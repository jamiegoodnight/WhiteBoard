import React, { Component } from "react";
import axios from "axios";

class Dashboard extends Component {
  state = {
    array: [{ name: "Jamie" }],
    student: "",
    sent: false
  };
  render() {
    return (
      <div className="Dashboard">
        {this.state.sent === false ? (
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="student"
              value={this.state.student}
              placeholder="Write your name here!"
              onChange={this.handleChange}
            />
          </form>
        ) : (
          <div>
            <p> Thanks for submitting!</p>
          </div>
        )}
        <i class="fas fa-chalkboard-teacher" />
        <div>
          {this.state.array.map(s => (
            <p>{s.name}</p>
          ))}
        </div>
      </div>
    );
  }
  // componentDidMount() {
  //   console.log("thumbs-up");
  //   axios.get("").then(res => {
  //     console.log(res);
  //     this.setState({
  //       array: res.data
  //     });
  //   });
  // }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {};
}
export default Dashboard;
