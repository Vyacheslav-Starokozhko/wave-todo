import React from "react";

export interface TodoContextProps {
    todos: Todo[],
    checkTodo: (id: Todo['id']) => void,
    removeTodo: (id: Todo['id']) => void,
    selectTodoEdit: (id: Todo['id']) => void,
    changeTodo: ({name, description}: Omit<Todo, 'checked' | 'id'>) => void,
    todoEdit: Todo['id'] | null,
    addTodo: ({name, description}: Omit<Todo, 'checked' | 'id'>) => void

}


export const TodoContext = React.createContext<TodoContextProps>({
    todos: [],
    checkTodo: () => {},
    removeTodo: () => {},
    selectTodoEdit: () => {},
    changeTodo: () => {},
    todoEdit: null,
    addTodo: () => {}

});