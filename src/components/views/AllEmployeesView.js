import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllEmployeesView = (props) => {
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
            {props.allEmployees.map((employee) => {
            let name = employee.firstname + " " + employee.lastname;
            return (
                <div key={employee.id}>
                <Link to={`/employees/${employee.id}`}>
                <h2>{name}</h2>
                </Link>
                <p>{employee.department}</p>
                </div>
            );
        })}
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