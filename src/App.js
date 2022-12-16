import "./App.css";

//Router
import { Switch, Route } from "react-router-dom";

//Components
import {
  HomePageContainer,
  TaskContainer,
  AllTasksContainer,
  EditTaskContainer,
  EmployeeContainer,
  AllEmployeesContainer
} from './components/containers';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component = {HomePageContainer} />
        <Route exact path="/tasks" component = {AllTasksContainer} />
        <Route exact path="/task/:id" component = {TaskContainer} />
        <Route exact path="/edittask/:id" component = {EditTaskContainer} />
        <Route exact path="/employees" component = {AllEmployeesContainer} />
        <Route exact path="/employees/:id" component = {EmployeeContainer} />
      </Switch>        
    </div>
  );
}

export default App;
