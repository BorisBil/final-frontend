import { Link } from "react-router-dom";

const TaskView = (props) => {
  const { task } = props;
  return (
    <div>
      <h1>{task.name}</h1>
      {task.employee ? <h3><Link to={`/employees/${task.employee.id}`}>{task.employee.firstname + " " + task.employee.lastname}</Link></h3>: <h3>Unassigned</h3>}
      <Link to={`/edittask/${task.id}`}>Edit task information</Link>
      <br/>
      <Link to={`/tasks`}>All tasks</Link>
    </div>
  );
};

export default TaskView;