import './../css/task-form.css';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';

function TaskForm(props) {

    const getInput = e => {
        const inputText = e.target.value;

        if ( inputText.length === 0 ) {
            e.target.className = 'task-input failed';

        } else if (inputText.length >= 1) {
            e.target.className = 'task-input success';
        }
    };

    const sendTask = e => {
        e.preventDefault();
        const input = e.target.firstChild.value;

        if ( !input.trim() ) {
            const $msgInfo = e.target.nextSibling;

            $msgInfo.children[0].textContent = 'Task empty';
            $msgInfo.className = 'task-information-content show';

            setTimeout(() => {
                $msgInfo.className = 'task-information-content';
            }, 2000);
        } else {
            const btnAdd = e.target.children[1];
            const btnEdit = e.target.children[2];

            if ( btnAdd.classList.value.includes('show') ) {
                const newTask = {
                    id: uuidv4(),
                    text: input,
                    completed: false
                };

                props.onSubmitAdd(newTask);

            } else if ( btnEdit.classList.value.includes('show') ) {
                btnEdit.className = 'task-button close';
                btnAdd.className = 'task-button show';

                const id = e.target.lastChild.value;
                props.onSubmitEdit(id, input);
            }

        }

        e.target.text.value = '';
        e.target.text.className = 'task-input failed';
    };

    return(
        <>
            <form
                className='task-form'
                onSubmit={sendTask}
            >
                <input
                    type="text"
                    className='task-input failed'
                    placeholder='Enter task'
                    name='text'
                    onChange={getInput}
                />
                <button
                    className='task-button show'
                    style={{background: '#00471b'}}
                >
                    Add Task
                </button>
                <button
                    className='task-button close'
                    style={{background: '#2e6ae5'}}
                >
                    Edit Task
                </button>
                <input type='hidden'/>
            </form>
            <div className='task-information-content'>
                <p className='task-information'></p>
            </div>
        </>
    );
}

export default TaskForm;