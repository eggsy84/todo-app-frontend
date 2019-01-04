import React from 'react';

import Task from './Task';

class TaskList extends React.Component {

    render() {

        let listOfTasks = [ 
            {
                id: 1,
                description: "Take dog for a walk",
                completed: false
            },
            {
                id: 2,
                description: "By a bottle of Milk",
                completed: false
            },
            {
                id: 3,
                description: "Go to bed",
                completed: false
            },
        ];

        return (
            <div>
                {
                    listOfTasks.map((task, i) => 
                        <Task taskDescription={task.description} key={i} />
                    )
                }
            </div>
        );
    }

}

export default TaskList;