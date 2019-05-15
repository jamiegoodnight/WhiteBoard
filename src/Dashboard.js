import React, { Component } from "react";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      student: {
        studentName: ""
      },
      sent: false
    };
  }
  render() {
    return (
      <div className="Dashboard">
        {this.state.sent === false ? (
          <form onSubmit={e => this.handleSubmit(e, this.state.student)}>
            <input
              type="text"
              name="studentName"
              value={this.state.student.studentName}
              placeholder="Write your name here!"
              onChange={this.handleChange}
            />
          </form>
        ) : (
          <i className="fas fa-chalkboard-teacher" />
        )}
        <div class="student">
          {this.state.array.map(s => (
            <div>
              <p>{s.studentName}</p>{" "}
            </div>
          ))}
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.fetchStudents();
  }
  fetchStudents() {
    console.log("thumbs-up");
    axios.get("https://web20jamiewb.herokuapp.com/api/sub").then(res => {
      console.log(res);
      this.setState({
        array: res.data
      });
    });
  }
  handleChange = e => {
    this.setState({
      // ...this.state,
      student: {
        // ...this.state.student,
        [e.target.name]: e.target.value
      }
    });
  };
  handleSubmit = (e, sn) => {
    e.preventDefault();
    axios
      .post("https://web20jamiewb.herokuapp.com/api/sub", sn)
      .then(res => {
        console.log(res);
        this.fetchStudents();
        this.setState({
          sent: true
        });
      })
      .catch(err => {
        console.log("errrororororor", err);
      });
  };
  deleteItem = (e, id) => {
    e.preventDefault();
    axios
      .delete(`https://web20jamiewb.herokuapp.com/api/sub/${id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    this.fetchStudents();
  };
}
export default Dashboard;
