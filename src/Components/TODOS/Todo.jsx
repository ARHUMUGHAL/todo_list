import React, { useState } from 'react'
import './Todo.css'

const Todo = () => {

    const [value, setValue] = useState('')
    const [newValue, setNewValue] = useState([])

    function typedValue(letter) {
        setValue(letter.target.value)
    }
    function addRemoveText() {

        setNewValue((newValue) => {
            const valueShower = [...newValue, value]
            return valueShower
        })
        setValue('')
    }
    function removeList(i) {
        const deletedList = newValue.filter((datanoTwo, id) => {
            return i != id
        })
        setNewValue(deletedList)
    }
    function removeAll(){
        setNewValue([])
    }

    return (
        <div className='main'>
            <header><h1>TODO_LIST_APP</h1></header>

            <div className="input_field">

                <input type="text" placeholder='Add your activity here...' value={value} onChange={typedValue} />
                <button className='btn-access' onClick={addRemoveText}>ADD LIST</button>

            </div>

            <div className="list">
                {newValue != [] && newValue.map((data, i) => {
                    return (
                        <>
                            <p key={i}>
                                <div className='text'>{data}</div>
                                <button className='btn_close' onClick={() => removeList(i)}>x</button>
                            </p>
                        </>
                    )
                })}
            </div>

            {newValue.length >= 1 && <button className="remove_all" onClick={removeAll}>Remove All</button>}

            

        </div>
    )
}

export default Todo