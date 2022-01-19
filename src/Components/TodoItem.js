import React from 'react';
import styled from 'styled-components';
import document from '../img/document.svg';
import deleteIcon from '../img/delete.svg';
import edit from '../img/edit.svg';
import axios from 'axios';



function TodoItem({todo, getTodos, editTodos}) {
    const deleteTodo = async () =>{
        await axios.delete(`http://localhost:5000/api/v1/crud/${todo._id}`)

        getTodos();
    }
    return (
        <TodoItemSTyled>
            <div className="icon-document">
                <img src={document} alt="" />
            </div>
            <div className="text-con">
                <div className="left-text">
                    <h3>Task Name</h3>
                    <p>{todo.name}</p>
                </div>
                <div className="right-text">
                    <h3>Comment</h3>
                    <p>{todo.comment}</p>
                </div>
            </div>
            <div className="edit" onClick={() => editTodos(todo)}>
                <img src={edit} alt="" />
            </div>
            <div className="delete" onClick={deleteTodo}>
                <img src={deleteIcon} alt="" />
            </div>
        </TodoItemSTyled>
    )
}

const TodoItemSTyled = styled.div`
    background-color: #4F6877;
    padding: 1rem;
    margin: .8rem 0;
    width: 100%;
    border-radius: 30px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-between;
    color: white;
    &:last-child{
        margin-bottom: 4rem;
    }
    h3{
        color: #6BBE92;
    }
    .icon-document, .edit, .delete{
        background-color: white;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
        cursor: pointer;
        img{
            cursor: pointer;
        }
    }

    .text-con{
        flex: 3;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 0 3rem;
        .right-text{
            flex: 2;
        }
        .left-text{
            padding-right: 4rem;
        }
    }
    .edit{
        margin-right: 1rem;
    }
`;

export default TodoItem;
