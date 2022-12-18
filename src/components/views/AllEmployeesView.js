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
                    <Link to={`/employees/${employee.id}`}>
                        <h2>{name}</h2>
                    </Link>
                    <p>{employee.department}</p>
                    <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
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