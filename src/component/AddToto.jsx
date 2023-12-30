import { useState } from "react";
import { useDispatch } from 'react-redux'
import { addTodo } from "../features/todo/todoSlices";



const AddToto = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const addTodoHandeler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }
    return (
        <div>
            <form onSubmit={addTodoHandeler}>
                <input type="text" name="" placeholder="set a Todo..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddToto;