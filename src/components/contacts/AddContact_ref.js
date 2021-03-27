import React, { Component } from "react";

export default class AddContact extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();

    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
    };
    console.log(contact);
  };
  static defaultProps = {
    name: "Fred Smith",
    email: "Fred@yahoo.com",
    phone: "777-777-777",
  };
  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">
          Add Contact
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name </label>
                <input
                  name="name"
                  className="form-control form-control-lg"
                  placeholder="Enter Name..."
                  type="text"
                  defaultValue={name}
                  ref={this.nameInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email </label>

                <input
                  name="email"
                  className="form-control form-control-lg"
                  placeholder="Enter Email..."
                  type="email"
                  defaultValue={email}
                  ref={this.emailInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone"> Phone</label>

                <input
                  name="phone"
                  className="form-control form-control-lg"
                  placeholder="Enter Phone..."
                  type="text"
                  defaultValue={phone}
                  ref={this.phoneInput}
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
