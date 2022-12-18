import { Link } from "react-router-dom";

const EmployeeView = (props) => {
    const {employee, editTask, allTasks} = props;
    let employeename = employee.firstname + " " +  employee.lastname;
    let assignedTasks = allTasks.filter(task => task.employeeId === employee.id);
    let availableTasks = allTasks.filter(task => task.employeeId !== employee.id);
    return (
        <div>      
            <h1>{employeename}</h1>
            <h3>{employee.department}</h3>
            <Link to={`/editemployee/${employee.id}`}>Edit employee information</Link>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                <div>Assigned Tasks:
                    {assignedTasks.map( task => {
                    return (
                    <div key={task.id}>
                        <Link to={`/tasks/${task.id}`}>
                            <h4>{task.name}</h4>
                        </Link>
                        <button onClick={() => editTask({id:task.id, employeeId: null})}>x</button>
                    </div>
                    );
            })} </div>
                <div>Available Tasks:
                    {availableTasks.map( task => {
                    return (
                        <div key={task.id}>
                            <Link to={`/tasks/${task.id}`}>
                                <h4>{task.name}</h4>
                            </Link>
                            <button onClick={() => editTask({id:task.id, employeeId: employee.id})}>+</button>
                        </div>
                    );
            })} </div>
            </div>
        <Link to={`/employees`}>
            <h4>Back</h4>
        </Link>
        </div>
    );
};

export default EmployeeView;
