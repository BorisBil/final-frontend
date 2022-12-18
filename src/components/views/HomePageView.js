import { Link } from 'react-router-dom';

const HomePageView = () => {
    return (
        <div>
            <h1>Task and Employee Management System</h1>
            <h3>Tasks</h3>
            <Link to={'/tasks'} > All Tasks </Link>
            <h3>Employees</h3>
            <Link to={'/employees'} > All Employees </Link>
        </div>
    );    
}

export default HomePageView;