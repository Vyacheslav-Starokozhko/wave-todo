import React from 'react';

import './App.css';
import {Header} from "./components/Header/Header";
import {TodoPanel} from "./components/TodoPanels/TodoPanel";
import {TodoList} from "./components/TodoList/TodoList";
import {TodoProvider} from "./utils";

export const App = () => {

    return (
        <TodoProvider>
            <div className="App">
                <div className="container">
                    <Header/>
                    <div className={'header_form'}>
                        <TodoPanel mode='add'/>
                    </div>
                    <TodoList/>
                </div>
            </div>
        </TodoProvider>
    );
}

export default App;
