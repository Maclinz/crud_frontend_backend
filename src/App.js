import styled from 'styled-components';
import TodoForm from './Components/TodoForm';

function App() {
  return (
    <AppStyled>
      <div className="content-container">
        <TodoForm />
      </div>
    </AppStyled>
  );
}


const AppStyled = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .content-container{
    background-color:  #374954;
    width: 80%;
    height: 80vh;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    box-shadow: 10px 12px 20px rgba(0,0,0, .2);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;
    align-items: flex-start;
    .switch{
      position: absolute;
      right: 15%;
      top: 15%;
      width: 3.5rem;
      height: 1.5rem;
      box-shadow: inset 0 0 5px grey; 
      z-index: 10;
      opacity: 1;
      border-radius: 50px;
      .switch-toggler{
        height: 1.5rem;
        background-color: var(--switch);
        width: 1.5rem;
        border-radius: 50%;
        box-shadow: 3px 3px 15px rgba(0,0,0, .2);
        cursor: pointer;
      }
    }
    ::-webkit-scrollbar {
      width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey; 
      border-radius: 10px;
    }
    
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(179.75deg, #EB5757 -12.26%, #4F6877 55.88%);
      border-radius: 10px;
    }

    form{
      input, textarea{
        width: 100%;
        padding: .7rem 1rem;
        font-size: inherit;
        font-family: inherit;
        outline: none;
        border: none;
        border-radius: 15px;
        filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.25));
        margin: .5rem 0;
        background-color: #4F6877;
        color: white;
        resize: none;
      }
    }
  }
`;
export default App;
