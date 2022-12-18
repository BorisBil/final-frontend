import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchEmployeeThunk, editEmployeeThunk } from '../../store/thunks';

class EditEmployeeContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstname: "", 
            lastname: "",
            department: "",
            employeeId: null, 
            redirect: false, 
            redirectId: null
        };
    }

    componentDidMount() {
        this.props.fetchEmployee(this.props.match.params.id);
        this.setState({
            firstname: this.props.employee.name, 
            lastname: this.props.employee.description,
            department: this.props.employee.department
        });
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        let employee = {
            id: this.props.employee.id,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            department: this.state.department
        };
        
        this.props.editEmployee(employee);

        this.setState({
            redirect: true, 
            redirectId: this.props.employee.id
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
        if(this.state.redirect) {
            return (<Redirect to={`/employees/${this.state.redirectId}`}/>)
        }

        return (
            <form style={{textAlign: 'center'}} onSubmit={(e) => this.handleSubmit(e)}>
            <label style= {{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>
            <input type="text" name="firstname" value={this.state.name} onChange ={(e) => this.handleChange(e)}/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Last Name: </label>
            <input type="text" name="lastname" value={this.state.priority} onChange={(e) => this.handleChange(e)}/>
            <br/>
  
            <label style={{color:'#11153e', fontWeight: 'bold'}}>Department: </label>
            <input type="text" name="department" value={this.state.department} onChange={(e) => this.handleChange(e)} />
            <br/>
  
            <button type="submit">
                Submit
            </button>
            
            <Link to = {`/employees`}>
                <h5>Back</h5>
            </Link>

          </form>
        )
    }
}

// map state to props
const mapState = (state) => {
    return {
        employee: state.employee,
    };
};

const mapDispatch = (dispatch) => {
    return({
        editEmployee: (employee) => dispatch(editEmployeeThunk(employee)),
        fetchEmployee: (id) => dispatch(fetchEmployeeThunk(id)),
    })
}

export default connect(mapState, mapDispatch)(EditEmployeeContainer);