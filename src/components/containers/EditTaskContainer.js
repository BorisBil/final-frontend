import { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { fetchTaskThunk, editTaskThunk } from '../../store/thunks';

class EditTaskContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "", 
            description: "",
            employeeId: null, 
            redirect: false, 
            redirectId: null
        };
    }

    componentDidMount() {
        // Getting task ID from url
        this.props.fetchTask(this.props.match.params.id);
        this.setState({
            name: this.props.task.name, 
            description: this.props.task.description,
            employeeId: this.props.task.employeeId, 
        });
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        //get new info for task from form input
        let task = {
            id: this.props.task.id,
            name: this.state.name,
            description: this.state.description,
            employeeId: this.state.employeeId
        };
        
        this.props.editTask(task);

        this.setState({
            redirect: true, 
            redirectId: this.props.task.id
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
        // Go to single task view of the edited task
        if(this.state.redirect) {
            return (<Navigate to={`/task/${this.state.redirectId}`}/>)
        }

        return (
            <form style={{textAlign: 'center'}} onSubmit={(e) => this.handleSubmit(e)}>
            <label style= {{color:'#11153e', fontWeight: 'bold'}}>Title: </label>
            <input type="text" name="title" value={this.state.title} onChange ={(e) => this.handleChange(e)}/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Timeslot: </label>
            <input type="text" name="timeslot" value={this.state.timeslot} onChange={(e) => this.handleChange(e)}/>
            <br/>
  
            <label style={{color:'#11153e', fontWeight: 'bold'}}>instructorId: </label>
            <input type="text" name="instructorId" value={this.state.instructorId} onChange={(e) => this.handleChange(e)} />
            <br/>
  
            <button type="submit">
              Submit
            </button>

          </form>
        )
    }
}

// map state to props
const mapState = (state) => {
    return {
        task: state.task,
    };
};

const mapDispatch = (dispatch) => {
    return({
        editTask: (task) => dispatch(editTaskThunk(task)),
        fetchTask: (id) => dispatch(fetchTaskThunk(id)),
    })
}

export default connect(mapState, mapDispatch)(EditTaskContainer);