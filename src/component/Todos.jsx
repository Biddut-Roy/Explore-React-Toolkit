import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlices';

const Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos)

    return (
        <div>
            <h1>Todos</h1>
            {
                todos.map(todo =>(
                    <li key={todo.id}>
                        {todo.text}
                        <button style={{ marginRight: '-10px', color: 'red' }} onClick={()=> dispatch(removeTodo(todo.id))}>
                            Delete
                        </button>
                    </li>
                ))
            }
        </div>
    );
};

export default Todos;