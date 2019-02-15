import React from 'react';

import Task from './Task';

class TaskList extends React.Component {

    render() {

        return (
            <div>
                {
                    this.props.tasks.map((task, i) => 
                        <Task taskId={task.taskId} taskDescription={task.taskDescription} key={i} />
                    )
                }
            </div>
        );
    }

}

export default TaskList;