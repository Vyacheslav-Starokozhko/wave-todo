import React from "react";
import {TodoItem} from "./TodoItem/TodoItem";
import './TodoList.style.css';
import {TodoPanel} from "../TodoPanels/TodoPanel";
import {useTodo} from "../../utils";



export const TodoList: React.FC = () => {
    const {todos, checkTodo, removeTodo, selectTodoEdit, todoEdit} = useTodo();
    return (
        <ul className={'todo_list'}>
            {todos.map((todo) => {
                if (todo.id === todoEdit) {
                    return <TodoPanel key={todo.id}
                                      mode='edit'
                                      editTodo = {{name: todo.name, description: todo.description}}
                    />
                } else {
                    return (
                        <TodoItem todo={todo}
                                  key={todo.id}/>
                    )
                }
            })}
        </ul>
    )
}