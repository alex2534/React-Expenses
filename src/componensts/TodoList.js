import React from 'react';

import '../css/TodoList.css'
import TodoDate from './TodoDate';


const TodoList = (props) => {

    return(
        <div className='expense-item'>
            <TodoDate date={props.date} />
            
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.time}</div>
            </div>
        </div>

)

}

export default TodoList;