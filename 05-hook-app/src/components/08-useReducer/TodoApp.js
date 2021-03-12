import React, { useReducer } from 'react';
import './styles.css'
import { todoReducer } from './todoReducer';

const initialState = [{
    id: new Date().getTime(),
    desc: 'Learn React',
    done: false,
}];

export const TodoApp = () => {
    const [ todos ] = useReducer(todoReducer, initialState);
    console.log(todos);
    return (
        <div>
            <h1>Todo App ({ todos.length })</h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        { todos && todos.length && todos.map( (todo, idx) => (
                            <li 
                                key={ todo.id } 
                                className="list-group-item"    
                            > 
                                <p className="text-center">{idx + 1}. { todo.desc }</p>
                                <button className="btn btn-danger">Delete</button>
                            </li> 
                        ))}
                    </ul>
                </div>

                <div className="col-5">
                    <h4>Add todo</h4>
                    <hr />

                    <form>
                        <input 
                            className="form-control"
                            type="text" 
                            name="description" 
                            placeholder="Learn..." 
                            autoComplete="off"/>
                        <button className="btn btn-outline-primary btn-block mt-1">Add</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
