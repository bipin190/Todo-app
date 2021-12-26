
import './Task.css';

function Task({TaskList, updateTaskList }) {
   const deleteTaskFromList = key => { 
    const newList = TaskList.filter(taskobj => {
        return taskobj.key !==key;
    });
   updateTaskList(newList);
   }; 
    return (
        <div>
            {TaskList.map(taskobj => {
                return (
                    <div key={taskobj.key} className='Task'>
                        <p onClick={()=> deleteTaskFromList(taskobj.key)}>{taskobj.Task}</p>
                        

                    </div>
                );
            })}
        </div>
    );
}
export default Task;