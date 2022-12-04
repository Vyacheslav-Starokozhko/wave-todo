import React from "react";
import {useTodo} from "../../utils";
import './TodoPanel.style.css';
import {logger} from "workbox-core/_private";

const DEFAULT_TODO = {
    name: '',
    description: ''
}
const isButtonState = 'disabled';

interface AddTodoPanelProps {
    mode: 'add';
}

interface EditTodoPanelProps {
    mode: 'edit';
    editTodo: Omit<Todo, 'id' | 'checked'>;
}

type TodoPanelProps = AddTodoPanelProps | EditTodoPanelProps

export const TodoPanel: React.FC<TodoPanelProps> = (props) => {
    const {changeTodo, addTodo} = useTodo();
    const isEdit = props.mode === 'edit';
    const [todo, setTodo] = React.useState(isEdit ? props.editTodo : DEFAULT_TODO);

    const [buttonState, setButtonState] = React.useState(isButtonState);
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setTodo({...todo, [name]: value});

        if (value.length > 0) {
            setButtonState('enable')
        }
        else{
            setButtonState(isButtonState)
        }

    }

    const onClick = () => {
        const todoItem = {name: todo.name, description: todo.description};
        if (todoItem.description || todoItem.name) {
            if (isEdit) {
                return changeTodo(todoItem)
            }
            addTodo(todoItem);
            setTodo(DEFAULT_TODO);
            setButtonState(isButtonState);

        }

    }

    return (
        <div className={'todo_panel'}>
            <div>
                <label htmlFor="name">
                    <div>name</div>
                    <input type="text" name="name" id="name" onChange={onChange} value={todo.name}/>
                </label>
            </div>
            <div>
                <label htmlFor="description">
                    <div>description</div>
                    <input type="text" id="description" name="description" onChange={onChange}
                           value={todo.description}/>
                </label>
            </div>
            <div>
                {!isEdit && (
                    <button onClick={onClick} className={`add-button ${buttonState}`}>Add</button>
                )}
                {isEdit && (
                    <button onClick={onClick} className={'edit-button'}>Edit</button>
                )}
            </div>
        </div>
    )
} 