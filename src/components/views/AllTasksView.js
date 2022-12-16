import { Link } from "react-router-dom";

const AllTasksView = (props) => {
    let {tasks} = props;
    if (!tasks.length) {
        return (
        <div>
            <p>There are no tasks.</p>
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
                    <h1>{name}</h1>
                    </Link>
                </div>
            );
        }
        )}
        </div>
    );
};

export default AllTasksView;