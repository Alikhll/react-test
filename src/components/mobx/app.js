import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";
import userStore from '../../mobxStore/userStore';
import App2 from './app2'

import '../../styles/app.css'

class App extends React.Component {

  constructor(props) {
    super(props);
    userStore.getUsers();
    userStore.getCompany();

    this.addUser = this.addUser.bind(this);
  }
  async addUser() {
    // let response = await fetch("http://localhost:8080");

    userStore.updateCompany("changed");

    userStore.addUser();
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <h1 className="test">Home</h1>
        <App2 store={userStore}></App2>

        {userStore.users.map((c, k) => {
          return (<div key={k}>{c.name}</div>)
        })}

        <MDBBtn color="primary" onClick={this.addUser}>Add User</MDBBtn>
      </div>
    )
  }
}
export default App