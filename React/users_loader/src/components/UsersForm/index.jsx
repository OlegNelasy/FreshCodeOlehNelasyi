import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./UsersForm.module.scss";

export default class UsersForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      gender: "all",
      resultsCount: 10,
      includedFields: {
        location: true,
        email: true,
        phone: true,
        age: true,
      },
    };
  }

  handleGenderChange = (e) => {
    this.setState({ gender: e.target.value });
  };

  handleCountChange = (e) => {
    this.setState({ resultsCount: e.target.value });
  };

  handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    this.setState((prevState) => ({
      includedFields: {
        ...prevState.includedFields,
        [name]: checked,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const { gender, resultsCount, includedFields } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.formContainer}>
        <div className={styles.formRow}>
          <label className={styles.inputGroup}>
            Number:
            <input
              type="number"
              min="1"
              max="50"
              value={resultsCount}
              onChange={this.handleCountChange}
              className={styles.numberInput}
            />
          </label>
        </div>

        <div className={styles.formRow}>
          <span className={styles.labelTitle}>Gender:</span>

          <div className={styles.radioGroup}>
            <label>
              <input
                type="radio"
                value="all"
                checked={gender === "all"}
                onChange={this.handleGenderChange}
              />{" "}
              All
            </label>
            <label>
              <input
                type="radio"
                value="female"
                checked={gender === "female"}
                onChange={this.handleGenderChange}
              />{" "}
              Woman
            </label>
            <label>
              <input
                type="radio"
                value="male"
                checked={gender === "male"}
                onChange={this.handleGenderChange}
              />{" "}
              Man
            </label>
          </div>
        </div>

        <div className={styles.formRow}>
          <span className={styles.labelTitle}>Show data:</span>

          <div className={styles.checkboxGroup}>
            <label>
              <input
                type="checkbox"
                name="age"
                checked={includedFields.age}
                onChange={this.handleCheckboxChange}
              />{" "}
              Age
            </label>
            <label>
              <input
                type="checkbox"
                name="location"
                checked={includedFields.location}
                onChange={this.handleCheckboxChange}
              />{" "}
              Location
            </label>
            <label>
              <input
                type="checkbox"
                name="email"
                checked={includedFields.email}
                onChange={this.handleCheckboxChange}
              />{" "}
              Email
            </label>
            <label>
              <input
                type="checkbox"
                name="phone"
                checked={includedFields.phone}
                onChange={this.handleCheckboxChange}
              />{" "}
              Phone
            </label>
          </div>
        </div>

        <button type="submit" className={styles.submitBtn}>
          Update
        </button>
      </form>
    );
  }
}

UsersForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
