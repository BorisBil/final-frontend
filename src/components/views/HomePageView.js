import { Link } from 'react-router-dom';

const HomePageView = () => {
    return (
        <div>
            <h6>Final Project</h6>
            <h2>All Tasks</h2>
            <Link to={'/tasks'} > All Tasks </Link>
            <h2>All Employees</h2>
            <Link to={'/employees'} > All Employees </Link>
        </div>
    );    
}

export default HomePageView;