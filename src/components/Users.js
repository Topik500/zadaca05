import React from "react";

export class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) { this.setState({value: event.target.value});  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>Korisnik:</p>
            <input type="text" value={this.state.value} onChange={this.handleChange} />  
          </label>
        </form>
        <p>{this.state.value}</p>
      </div>
    );
  }
}
