import { Link } from "react-router-dom";

const TaskView = (props) => {
  const { task } = props;
  return (
    <div>
      <h1>{task.name}</h1>
      <table style = {{ border: "1px solid black",
                        padding: "10px",
                        margin: "auto",
                        borderSpacing: "30px",
                        borderCollapse: "collapse"
                      }}>
        <tr style =   {{  border: "1px solid black",
                          borderWidth: "5px;",
                          borderSpacing: "10px"
                      }}>
          <td style = {{  border: "1px solid black",
                          padding: "10px",
                          margin: "auto",
                          borderSpacing: "30px",
                          borderCollapse: "collapse"
                      }}>
            <h3>Assigned to</h3>
          </td>
          <td style = {{  border: "1px solid black",
                          padding: "10px",
                          margin: "auto",
                          borderSpacing: "30px",
                          borderCollapse: "collapse"
                      }}>
            <h3>Description</h3>
          </td>
          <td style = {{  border: "1px solid black",
                          padding: "10px",
                          margin: "auto",
                          borderSpacing: "30px",
                          borderCollapse: "collapse"
                      }}>
            <h3>Priority</h3>
          </td>
          <td style = {{  border: "1px solid black",
                          padding: "10px",
                          margin: "auto",
                          borderSpacing: "30px",
                          borderCollapse: "collapse"
                      }}>
            <h3>Completion</h3>
          </td>
        </tr>
        <tr>
          <td style = {{  border: "1px solid black",
                          padding: "10px",
                          margin: "auto",
                          borderSpacing: "30px",
                          borderCollapse: "collapse"
                      }}>
            {task.employee ? <h4>{task.employee.firstname + " " + task.employee.lastname}</h4>: <h4>Unassigned</h4>}
          </td>
          <td style = {{  border: "1px solid black",
                          padding: "10px",
                          margin: "auto",
                          borderSpacing: "30px",
                          borderCollapse: "collapse"
                      }}>
            {task.description}
          </td>
          <td style = {{  border: "1px solid black",
                          padding: "10px",
                          margin: "auto",
                          borderSpacing: "30px",
                          borderCollapse: "collapse"
                      }}>
            {task.priority}
          </td>
          <td style = {{  border: "1px solid black",
                          padding: "10px",
                          margin: "auto",
                          borderSpacing: "30px",
                          borderCollapse: "collapse"
                      }}>
            {task.completion}
          </td>
        </tr>
      </table>
      <Link to={`/edittask/${task.id}`}>Edit task information</Link>
      <br/>
      <Link to={`/tasks`}>View all tasks</Link>
    </div>
  );
};

export default TaskView;