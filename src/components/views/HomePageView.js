import { Link } from 'react-router-dom';

const HomePageView = () => {
    return (
        <div>
            <h6>Final Project</h6>
            <Link to={'/tasks'} > All Tasks </Link>
        </div>
    );    
}

export default HomePageView;