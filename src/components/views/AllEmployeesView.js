import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllEmployeesView = (props) => {
    let {deleteEmployee} = props;
    if (!props.allEmployees.length) {
        return (
            <div>There are no employees.
                <Link to = {`/`}>
                    <h5>Back</h5>
                </Link>
            </div>
        );
    }
    return (
        <div>
            <h1>All Employees View</h1>
            {props.allEmployees.map((employee) => {
            let name = employee.firstname + " " + employee.lastname;
            return (
                <div key={employee.id}>
                    <table style = {{   border: "1px solid black",
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
                            <Link to={`/employees/${employee.id}`}>
                                <h3>{name}</h3>
                            </Link>
                            </td>
                            <td style = {{  border: "1px solid black",
                                            padding: "10px",
                                            margin: "auto",
                                            borderSpacing: "30px",
                                            borderCollapse: "collapse"
                                        }}>
                                {employee.department}
                            </td>
                        </tr>
                    </table>
                    <button style = {{margin: "15px"}} onClick={() => deleteEmployee(employee.id)}>Delete</button>
                </div>
            );
        })}
        <Link to={`/newemployee`}>
            <button style = {{margin: "5px"}}>Add New Employee</button>
        </Link>
        <Link to = {`/`}>
            <h5>Back</h5>
        </Link>
        </div>
    );
};

AllEmployeesView.propTypes = {
    allEmployees: PropTypes.array.isRequired,
};

export default AllEmployeesView;