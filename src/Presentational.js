import React from "react";
import { connect } from "react-redux";
import { addMessage } from "./actions";

class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  // set input value to state.input
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  // Push the new message from state.input to messages array which Redux is handling
  submitMessage() {
    this.props.submitNewMessage(this.state.input);

    // Set state.input to an empty string after submitting
    this.setState({
      input: ""
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange} />
        <br />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {/* map over props.messages and return a list of all the messages*/}
          {this.props.messages.map((message, idx) => {
            return <li key={idx}>{message}</li>;
          })}
        </ul>
      </div>
    );
  }
}

// The 'mapStateToProps' and 'mapDispatchToProps' deals with your Redux store’s state and dispatch, respectively.

// The returns of 'mapStateToProps' and 'mapDispatchToProps' are referred to internally as 'stateProps' and 'dispatchProps', respectively. They will be supplied to 'Presentational' component.

const mapStateToProps = state => {
  return { messages: state };
};

const mapDispatchToProps = dispatch => {
  return {
    submitNewMessage: message => {
      dispatch(addMessage(message));
    }
  };
};

// Connect 'Presentational' component with Redux store
const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Presentational);

export default Container;
