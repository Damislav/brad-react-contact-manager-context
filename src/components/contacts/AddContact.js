import React, { Component } from "react";

export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
  };

  handleValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">
          Add Contact
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name </label>
                <input
                  onChange={this.handleValueChange}
                  name="name"
                  className="form-control form-control-lg"
                  placeholder="Enter Name..."
                  type="text"
                  value={name}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email </label>

                <input
                  onChange={this.handleValueChange}
                  name="email"
                  className="form-control form-control-lg"
                  placeholder="Enter Email..."
                  type="email"
                  value={email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone"> Phone</label>

                <input
                  onChange={this.handleValueChange}
                  name="phone"
                  className="form-control form-control-lg"
                  placeholder="Enter Phone..."
                  type="text"
                  value={phone}
                />
              </div>
              <input
                value="Add Contact"
                className="btn btn-block btn-light"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
