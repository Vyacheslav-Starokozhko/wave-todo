import React from "react";
import './Header.style.css'
import {useTodo} from "../../utils";



export const Header: React.FC = () => {
    const {todos} = useTodo();
    return(
        <header className={'header'}>
            <h1>Todo List</h1>
            <h2>{todos.length} task(s)</h2>
        </header>
    )
}