import { Link } from "react-router-dom";

const AllTasksView = (props) => {
    let {tasks} = props;
    if (!tasks.length) {
        return (
        <div>
            <p>There are no tasks.</p>
            <Link to = {`/`}>
            <h5>Back</h5>
            </Link>
        </div>
        );
    }
    return (
        <div>
            {tasks.map((task) => {
                let name = task.name;
            return (
                <div key = {task.id}>
                    <Link to = {`/task/${task.id}`}>
                    <h2>{name}</h2>
                    </Link>
                </div>
            );
        }
        )}
        <Link to = {`/`}>
        <h5>Back</h5>
        </Link>
        </div>
    );
};

export default AllTasksView;