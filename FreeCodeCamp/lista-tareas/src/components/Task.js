import './../css/task.css';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import React from 'react';

function Task({ id, text, completed, completedTask, removeTask }) {

    const showEditForm = (e) => {
        const nodeName = e.target.nodeName.toLowerCase();
        let numParent;

        if (nodeName.includes('path')) {
            numParent = 5;

        } else if (nodeName.includes('svg')) {
            numParent = 4;

        } else if (nodeName.includes('div')) {
            numParent = 3;
        }

        const form = getNthParent(e.target, numParent).children[1];
        const input = form.firstChild;
        const buttonAdd = form.children[1];
        const buttonEdit = form.children[2];
        const inputHidden = form.lastChild;

        input.className = 'task-input success';
        input.value = text;

        buttonAdd.className = 'task-button close';
        buttonEdit.className = 'task-button show';

        inputHidden.value = id;
    }

    const getNthParent = (element, n) => {
        let currentElement = element;

        for (let i = 0; i < n; i++) {
            currentElement = currentElement.parentElement;
        }

        return currentElement;
    };

    return(
        <div className={completed ? 'task-container completed' : 'task-container'}>
            <div
                className='task-text'
                onClick={() => completedTask(id)}
            >
                {text}
            </div>
            <div
                className='task-icon-container'
                onClick={(e) => showEditForm(e)}
            >
                <BiEdit
                    className='task-icon'
                />
            </div>
            <div
                className='task-icon-container'
                onClick={() => removeTask(id)}
            >
                <AiOutlineCloseCircle className='task-icon' />
            </div>
        </div>
    );
}

export default Task;