import React from "react";
import './TodoItem.style.css';
import {useTodo} from "../../../utils";

interface TodoItemProps {
    todo : Todo,
}

export const TodoItem: React.FC<TodoItemProps> = ({todo}) => {
    const {
        checkTodo, removeTodo, selectTodoEdit} = useTodo();
    const checked = todo.checked ? 'checked' : 'no-checked';
    const classes = `todo_item ${checked}` ;

    return(
        <li className={classes}>
            <label htmlFor={`item-${todo.id}`}>{todo.name}</label>
            <span>{todo.description}</span>
            <input type="checkbox" id={`item-${todo.id}`} onChange={()=> checkTodo(todo.id)} defaultChecked={todo.checked}/>
            <div className={'button_group'}>
                <button className={'edit_button edit-button'} onClick={()=> selectTodoEdit(todo.id)}>
                    Edit
                </button>
                <button onClick={()=> removeTodo(todo.id)} className={'remove_button remove-button'}>
                    Remove
                </button>
            </div>
        </li>
    )
}