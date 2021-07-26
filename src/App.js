import React, {useState} from 'react'
import TodoList from './TodoList';

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const changeHandler = e => setTask(e.target.value);
  const submitHandler = e => {
    e.preventDefault();
    const newTodos = [...todos, task];
    setTodos(newTodos);
    setTask("");
    console.log(task);
  }
  const deleteHandler = (indexValue) => {
    const newTodos = todos.filter((todo, index) => index !==indexValue);
    setTodos(newTodos);
  }
  return (
    <>
     <center>
       <div className="card">
         <div className="card-body">
          <h5 className="card-title">Todo Management Application</h5>
          <form onSubmit={submitHandler}>
            <input type="text" name="task" value={task}
            onChange={changeHandler}
            /> &nbsp; &nbsp;
            <input type="submit" value="Add" name="Add" size="30"/>
          </form> <br />
          <TodoList todoList = {todos} deleteHandler= {deleteHandler} />
         </div>
       </div>
     </center> 
    </>
  )
}
export default App




