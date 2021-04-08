import { Component } from "react";

class UserForm extends Component {
  state = {
    username: "",
    phone: "",
    email: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    const { username, phone, email } = this.state;
    return (
      <form className="UserForm" onSubmit={this.handleSubmit}>
        <div>
          Username:{" "}
          <input
            name="username"
            value={username}
            onChange={this.handleChange}
          />
        </div>
        <div>
          Phone:{" "}
          <input name="phone" value={phone} onChange={this.handleChange} />
        </div>
        <div>
          Email:{" "}
          <input name="email" value={email} onChange={this.handleChange} />
        </div>
        <div>
          <button>+</button>
        </div>
      </form>
    );
  }
}

export default UserForm;
