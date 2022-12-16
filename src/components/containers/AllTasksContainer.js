import { Component } from 'react';
import { connect } from 'react-redux';


import { fetchAllTasksThunk } from '../../store/thunks';

import AllTasksView from '../views/AllTasksView';

class AllTasksContainer extends Component {
    componentDidMount() {
        this.props.fetchAllTasks();
    }
    
    render(){
        return(
            <div>
                <AllTasksView 
                    tasks = {this.props.allTasks}  
                />
            </div>
        )
    }
}

// Map state to props;
const mapState = (state) => {
  return {
    allTasks: state.allTasks,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllTasks: () => dispatch(fetchAllTasksThunk()),
  };
};

export default connect(mapState, mapDispatch)(AllTasksContainer);