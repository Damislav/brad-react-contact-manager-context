import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";

class Contact extends Component {
  state = {
    showContactInfo: false,
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };
  render() {
    const { name, id, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                <i
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo,
                    })
                  }
                  className="fas fa-sort-down"
                ></i>
                <i
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                ></i>
              </h4>

              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">{email} </li>
                  <li className="list-group-item">{phone}</li>
                </ul>
              ) : (
                false
              )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
// prop checking
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};
export default Contact;
