import React from 'react'
import usetodo from './useFetch.js/usetodo'

function Todolist() {

    const result = usetodo("https://jsonplaceholder.typicode.com/todos")
    console.log(result);
  return (
    <>
    <h1 className='text-center text-primary mt-5'>All Todo list</h1>
    <div className='container'>
        <table className='table shadow mt-5'>
            <thead>
                <tr>
                    <th>USER ID</th>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>COMPLETED</th>
                </tr>
            </thead>
            <tbody>
                {
                    result?.length>0? result.map((todo,index)=>(
                        <tr key={index}>
                            <td>{todo.userId}</td>
                            <td>{todo.id}</td>
                            <td>{todo.title}</td>
                            <td>{todo.completed?"yes":"no"}</td>
                        </tr>
                        
                    )):<tr className='text-danger fs-4 fw-bolder'></tr>
                }

            </tbody>
        </table>

    </div>
    </>
  )
}

export default Todolist