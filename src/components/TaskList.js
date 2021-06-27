import React from 'react';

const TaskList = (props) => {
  const {
    taskList,
    removeTodo,
    firstLoad,
  } = props
  return (
    <ul>
      {taskList.length === 0 ? null : taskList.map((task) => {
        return(
          <li className="todo" key={task.id}>{task.key}<i onClick={() => removeTodo(task.id)} className="fas fa-trash"></i></li>
        )
      })}
    </ul>
  )
}

export default TaskList;