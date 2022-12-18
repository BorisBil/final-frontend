import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

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
            employeeId: this.props.task.employeeId
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
            return (<Redirect to={`/tasks/${this.state.redirectId}`}/>)
        }

        return (
            <form style={{textAlign: 'center'}} onSubmit={(e) => this.handleSubmit(e)}>
            <label style= {{color:'#11153e', fontWeight: 'bold'}}>Name: </label>
            <input type="text" name="name" value={this.state.name} onChange ={(e) => this.handleChange(e)}/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Priority: </label>
            <input type="text" name="priority" value={this.state.priority} onChange={(e) => this.handleChange(e)}/>
            <br/>
  
            <label style={{color:'#11153e', fontWeight: 'bold'}}>Employee Id: </label>
            <input type="integer" name="employeeId" value={this.state.employeeId} onChange={(e) => this.handleChange(e)} />
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Description: </label>
            <input type="text" name="description" value={this.state.description} onChange={(e) => this.handleChange(e)} />
            <br/>
  
            <button type="submit">
                Submit
            </button>
            
            <Link to = {`/tasks`}>
                <h5>Back</h5>
            </Link>

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