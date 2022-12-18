import { Link } from 'react-router-dom';

const HomePageView = () => {
    return (
        <div>
            <h1>Final Project</h1>
            <h3>All Tasks</h3>
            <Link to={'/tasks'} > All Tasks </Link>
            <h3>All Employees</h3>
            <Link to={'/employees'} > All Employees </Link>
        </div>
    );    
}

export default HomePageView;