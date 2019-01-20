import React from "react";

class App2 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <h3>Company: {this.props.store.company}</h3>
      </div>
    )
  }
}
export default App2