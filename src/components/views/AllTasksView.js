import { Link } from "react-router-dom";

const AllTasksView = (props) => {
    let {tasks, deleteTask} = props;
    if (!tasks.length) {
        return (
        <div>
            <p>There are no tasks.</p>
            <Link to={`/newtask`}>
                <button>Add New Task</button>
            </Link>
            <Link to = {`/`}>
                <h5>Back</h5>
            </Link>
        </div>
        );
    }
    return (
        <div>
            <h1>All Tasks View</h1>
            {tasks.map((task) => {
                let name = task.name;
            return (
                <div key = {task.id}>
                    <table style = {{border: "1px solid black",
                        padding: "10px",
                        margin: "auto",
                        borderSpacing: "30px",
                        borderCollapse: "collapse"
                    }}>
                        <tr>
                            <td style = {{  border: "1px solid black",
                                            padding: "10px",
                                            margin: "auto",
                                            borderSpacing: "30px",
                                            borderCollapse: "collapse"
                                        }}>
                            <Link to = {`/tasks/${task.id}`}>
                                <h3>{name}</h3>
                            </Link>
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
                    
                    <button style = {{margin: "10px"}} onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
            );
        }
        )}
        <Link to={`/newtask`}>
            <button style = {{margin: "5px"}}>Add New Task</button>
        </Link>
        <Link to = {`/`}>
            <h5>Back</h5>
        </Link>
        </div>
    );
};

export default AllTasksView;