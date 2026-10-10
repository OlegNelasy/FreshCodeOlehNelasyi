import React, { Component } from "react";
import UserItem from "./../UserItem";
import UsersForm from "./../UsersForm";

import styles from "./UsersList.module.scss";

export default class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isLoading: false,
      error: null,
    };
  }

  loadUsers = (options) => {
    this.setState({ isLoading: true, error: null });

    const { gender, resultsCount, includedFields } = options;

    let url = `https://randomuser.me/api?results=${resultsCount}`;

    if (gender !== "all") {
      url += `&gender=${gender}`;
    }

    const incParams = ["name", "picture", "login", "nat", "gender"];

    if (includedFields.location) incParams.push("location");
    if (includedFields.email) incParams.push("email");
    if (includedFields.phone) incParams.push("cell");
    if (includedFields.age) incParams.push("dob");

    url += `&inc=${incParams.join(",")}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ users: data.results }))
      .catch((err) => this.setState({ error: err }))
      .finally(() => this.setState({ isLoading: false }));
  };

  componentDidMount() {
    this.loadUsers({
      gender: "all",
      resultsCount: 10,
      includedFields: {
        location: true,
        email: true,
        phone: true,
        age: true,
      },
    });
  }

  render() {
    const { users, isLoading, error } = this.state;

    return (
      <>
        <UsersForm onSubmit={this.loadUsers} />

        {isLoading && <div>Loading...</div>}

        {error && <div>Error: {error.message}</div>}

        <div className={styles.usersContainer}>
          {!isLoading &&
            !error &&
            users.map((u) => <UserItem key={u.login.uuid} user={u} />)}
        </div>
      </>
    );
  }
}
