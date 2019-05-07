import React, { Component } from "react";

function Display(props) {
  return (
    <div className="Display">
      <h3>Strikes: {props.strikes}</h3>
      <h3>Balls: {props.balls}</h3>
      <h3>Fouls: {props.fouls}</h3>
      <h3>Hits: {props.hits}</h3>
    </div>
  );
}

export default Display;

// import React, { Component } from "react";

// class Display extends Component {
//   render() {
//     return (
//       <div className="Display">
//         <h3>Strikes: {this.props.state.strikes}</h3>
//         <h3>Balls: {this.props.state.balls}</h3>
//         <h3>Fouls: {this.props.state.fouls}</h3>
//         <h3>Hits: {this.props.state.hits}</h3>
//       </div>
//     );
//   }
// }

// export default Display;
