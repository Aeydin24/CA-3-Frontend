import React, { Component } from "react"
import facade from "./apiFacade";
import Planets from "./components/Planets";
import Films from "./components/Films";
import Persons from "./components/Persons";
import Welcome from "./components/Welcome"
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";


class LogIn extends Component {
 constructor(props) {
   super(props);
   this.state = { username: "", password: "" }
 }
 login = (evt) => {
   evt.preventDefault();
   this.props.login(this.state.username, this.state.password);
 }
 onChange = (evt) => {
   this.setState({[evt.target.id]: evt.target.value})
 }
 render() {
   return (
     <div>
       <h2>Login</h2>
       <form onSubmit={this.login} onChange={this.onChange} >
         <input placeholder="User Name" id="username" />
         <input placeholder="Password" id="password" />
         <button>Login</button>
       </form>
     </div>
   )
 }
}
class LoggedIn extends Component {
 constructor(props) {
   super(props);
   this.state= {dataFromServer: "Fetching!!"};
 }
 componentDidMount(){facade.fetchData().then(res=> this.setState({dataFromServer: res.msg}));}
 render() {
   return (
     <div>
       <h2>Data Received from server</h2>
       <h3>{this.state.dataFromServer}</h3>
     </div>
   )
 }
}
class App extends Component {
 constructor(props) {
   super(props);
   this.state = { loggedIn: false }
 }
 logout = () => {facade.logout();
   this.setState({ loggedIn: false });
} //TODO
 login = (user, pass) => {facade.login(user,pass)
  .then(res =>this.setState({ loggedIn: true }));
} //TODO
 render() {
   return (
     <div>
       {!this.state.loggedIn ? (<LogIn login={this.login} />) :
         ( 
         <Router>
           <div>
             <LoggedIn/>
             <Header />
             <Content />
             <button onClick={this.logout}>Logout</button>
           </div>
         </Router>)}
     </div>
   )
 }
}
export default App;

const Header = () => {
  return (
      <ul className="header">
          <li><NavLink exact to="/">Welcome Page</NavLink></li>
          <li><NavLink to="/planets">Planets</NavLink></li>
          <li><NavLink to="/persons">Persons</NavLink></li>
          <li><NavLink to="/films">Films</NavLink></li>
      </ul>
  );
};

const Content = () => {
  return (
      <div>
          <Switch>
              <Route exact path="/"> <Welcome /> </Route>
              <Route path="/planets"> <Planets /> </Route>
              <Route path="/persons"> <Persons /> </Route>
              <Route path="/films"> <Films /> </Route>
          </Switch>
      </div>
  );
};

