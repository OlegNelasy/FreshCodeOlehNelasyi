import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import styles from "./UserItem.module.scss";

export default class UserItem extends Component {
  render() {
    const { user } = this.props;

    return (
      <article
        className={cn(styles.imgContainer, {
          [styles.imgContainerMale]: user.gender === "male",
          [styles.imgContainerMaleFemale]: user.gender === "female",
        })}
      >
        <img
          className={styles.photo}
          src={user.picture.large}
          alt="User photo"
        />

        <div className={styles.infoContainer}>
          <h3>
            {user.name.first} {user.name.last}
          </h3>

          {user.dob && <p>Age: {user.dob.age}</p>}

          {user.location && (
            <>
              <p>
                Country:
                <img
                  className={styles.flag}
                  src={`https://flagcdn.com/w40/${user.nat.toLowerCase()}.png`}
                  alt="flag"
                />
                {user.location.country}
              </p>
              <p>City: {user.location.city}</p>
            </>
          )}

          {user.email && <p>Email: {user.email}</p>}
          {user.cell && <p>Phone: {user.cell}</p>}
        </div>
      </article>
    );
  }
}

UserItem.propTypes = {
  user: PropTypes.shape({
    gender: PropTypes.string,
    name: PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string,
    }).isRequired,
    picture: PropTypes.shape({
      large: PropTypes.string,
    }).isRequired,
    nat: PropTypes.string.isRequired,
    dob: PropTypes.shape({ age: PropTypes.number }),
    location: PropTypes.shape({
      country: PropTypes.string,
      city: PropTypes.string,
    }),
    email: PropTypes.string,
    cell: PropTypes.string,
  }).isRequired,
};
