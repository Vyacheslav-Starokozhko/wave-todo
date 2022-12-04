import React from "react";
import {TodoContext} from "./TodoContext";

interface TodoProviderProps {
    children: React.ReactNode
}

let DEFAULT_TODO_LIST = [
    {id: 1, name: 'task 1', description: 'This task description ', checked: false},
    {id: 2, name: 'task 2', description: 'This task description ', checked: false},
    {id: 3, name: 'task 3', description: 'This task description ', checked: true}
];
export const TodoProvider: React.FC<TodoProviderProps> = ({children}) => {

    const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST);
    const [todoEdit, setTodoEdit] = React.useState<Todo['id'] | null>(null);

    const selectTodoEdit = (id: Todo['id']) => {
        setTodoEdit(id);
    }

    const addTodo = ({name, description}: Omit<Todo, 'checked' | 'id'>) => {
        setTodos([...todos, {
            id: todos[todos.length - 1].id + 1,
            description: description,
            name: name,
            checked: false
        }]);
    }

    const removeTodo = (id: Todo['id']) => {
        setTodos(
            todos.filter((todo => todo.id !== id))
        )
    }

    const checkTodo = (id: Todo['id']) => {
        setTodos(
            todos.map((todo => {
                    if (todo.id === id) {
                        return {...todo, checked: !todo.checked};
                    }
                    return todo;
                })
            )
        )
    }

    const changeTodo = ({name, description}: Omit<Todo, 'checked' | 'id'>) => {
        setTodos(
            todos.map((todo => {
                    if (todo.id === todoEdit) {
                        return {...todo, name: name, description: description};
                    }
                    return todo;
                })
            )
        )
        setTodoEdit(null);
    }
    const value = React.useMemo(() => ({

        checkTodo,
        removeTodo,
        selectTodoEdit,
        changeTodo,
        todoEdit,
        addTodo,
        todos
    }), [
        checkTodo,
        removeTodo,
        selectTodoEdit,
        changeTodo,
        todoEdit,
        addTodo,
        todos
    ]);
    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}