import { useState,useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const initialState ={ todos:[], }

function reducer(state,action){
  switch(action.type){
    case'ADD_TODO':
    return{
      todos:[...state.todos,action.payload],
    };
    case'DELETE_TODO':
    return {
      ...state,
      todos: state.todos.filter((todo, index) => index !== action.payload),
    };
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer,initialState)
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue) {
      dispatch({ type: 'ADD_TODO', payload: inputValue });
      setInputValue('');
    }
  };

  const handleDelete = (index) => {
    dispatch({ type: 'DELETE_TODO', payload: index });
  };

  return (
    <div className="main">
     <h1 className="header">Todo App</h1>
     <form onSubmit={handleSubmit }>
     <div className="inputField">
       <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Add your new todo"/>
       <button type='submit'>+</button>
     </div>
     </form>
     <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>

      
    </div>
  )
}

export default App
