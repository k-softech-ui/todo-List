import React from 'react'

const TodoList = ({todoList, deleteHandler}) => {
    return (
        <>
            {todoList.map((todo, index)=>
                <div key={index}>
                    <h5> {todo}&nbsp; <button onClick={()=> deleteHandler(index)}>Delete</button></h5>
                </div>
            )}
        </>
    )
}
export default TodoList


