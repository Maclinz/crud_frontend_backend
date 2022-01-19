import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

function TodoForm() {
    const link = 'http://localhost:5000/api/v1/crud';
    const [todos, setTodos] = useState([]);
    const [todoName, setTodoName] = useState('')
    const [todoComment, setTodoComment] = useState('')
    const [editTodoData, setEditTodoData] = useState(null)
    

    
    useEffect(() =>{
        getTodos();
    }, [])
    

    useEffect(() =>{
        if(editTodoData){
            setTodoName(editTodoData.name ? editTodoData.name : '')
            setTodoComment(editTodoData.name ? editTodoData.comment : '')
        }

    },[editTodoData])

    async function getTodos(){
        const data = await axios.get(link);
        setTodos(data.data.crud)
    }

    const editTodos  = (todosData) =>{
        setEditTodoData(todosData);
    }

    async function addTodos(e) {
        e.preventDefault();

        const todoData = {
            name: todoName ? todoName : undefined,
            comment: todoComment ? todoComment: undefined,
        }

        //Only post if editTodoData is not provided
        if(!editTodoData){
            await axios.post(link, todoData)
        }else{
            //Update the data if we do have the ediTodoData
            await axios.patch(`http://localhost:5000/api/v1/crud/${editTodoData._id}`, todoData)
        }

        setTodoName('');
        setTodoComment('')

        getTodos();
        setEditTodoData('');
    }

    const renderTodos = () =>{
        
        let sortedTodos = [...todos];

        sortedTodos = sortedTodos.sort((a, b) =>{
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return sortedTodos.map((todo, i) =>{
            return <TodoItem key={i} todo={todo} getTodos={getTodos} editTodos={editTodos} />
        })
    }
    

    const insertTodos = () =>{
        return <div className="Texteditor">
            <form onSubmit={addTodos}>
                <div className="input-control">
                    <input type="text" id="name" 
                        placeholder="Enter Name..." 
                        value={todoName} 
                        onChange={(e) => setTodoName(e.target.value)}
                        required
                        />
                </div>
                <div className="input-control">
                    <textarea name="" id="comment" cols="30" rows="5" 
                        placeholder="Task Name..." 
                        value={todoComment}
                        onChange={(e) => setTodoComment(e.target.value)}
                        ></textarea>
                </div>
                <button className="submit-btn">Add Item</button>
            </form>
        </div>
    }
    return (
        <TodoFormStyled>
            {insertTodos()}
            {renderTodos()}
        </TodoFormStyled>
    )
}


const TodoFormStyled = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
    .Texteditor{
        width: 60%;
        padding-top: 4rem;
        form{
            padding-bottom: 5rem;
            .submit-btn{
                padding: .5rem 1.5rem;
                outline: none;
                cursor: pointer;
                background-color: #6BBE92;
                border: none;
                border-radius: 34px;
                color: white;
                filter: drop-shadow(0px 4px 28px rgba(0, 0, 0, 0.25));
            }
        }
    }
`;

export default TodoForm;
