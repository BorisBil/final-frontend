import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTaskThunk } from "../../store/thunks";
import { TaskView } from "../views";

class TaskContainer extends Component {
    componentDidMount() {
        
        // Getting task ID from url
        this.props.fetchTask(this.props.id);
    }

    render() {
        return (
        <TaskView 
            task = {this.props.task}
        />
        );
    }
};

// Map state to props
const mapState = (state) => {
    return {
        task: state.task,
    };
};

// Map dispatch to props
const mapDispatch = (dispatch) => {
    return {
        fetchTask: (id) => dispatch(fetchTaskThunk(id)),
    };
};

export default connect(mapState, mapDispatch)(TaskContainer);