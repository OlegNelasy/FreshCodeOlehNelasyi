import { Component } from "react";
import cn from "classnames";

import styles from "./SignUp.module.css";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      isAgreed: false,
      showPassword: false,
      showPasswordConfirmation: false,
      isSubmitted: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleCheckboxChange = (event) => {
    this.setState({ isAgreed: event.target.checked });
  };

  togglePassword = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  togglePasswordConfirmation = () => {
    this.setState((prevState) => ({
      showPasswordConfirmation: !prevState.showPasswordConfirmation,
    }));
  };

  validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    return passwordRegex.test(password);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isSubmitted: true });

    const { fullName, email, password, passwordConfirmation, isAgreed } =
      this.state;

    const isFullNameInvalid = !fullName.trim();
    const isEmailInvalid = !email.trim();
    const isPasswordInvalid = !this.validatePassword(password);
    const isConfirmationInvalid = password !== passwordConfirmation;

    const errors = [];

    if (isFullNameInvalid) {
      errors.push("Поле FULL NAME пустое или состоит из пробелов.");
    }
    if (isEmailInvalid) {
      errors.push("Поле EMAIL ADDRESS пустое.");
    }
    if (isPasswordInvalid) {
      errors.push(
        "Пароль должен содержать минимум 6 символов, хотя бы одну заглавную букву и одну цифру.",
      );
    }
    if (isConfirmationInvalid) {
      errors.push("Пароли не совпадают.");
    }
    if (!isAgreed) {
      errors.push("Не отмечен чекбокс согласия с правилами.");
    }

    if (errors.length > 0) {
      console.log("Форма не отправлена. Найдены следующие ошибки:");

      errors.forEach((error) => console.log(`- ${error}`));

      return;
    }

    console.log("Успешная регистрация!", this.state);
    alert("Форма успешно отправлена!");
  };

  render() {
    const {
      fullName,
      email,
      password,
      passwordConfirmation,
      isAgreed,
      isSubmitted,
      showPassword,
      showPasswordConfirmation,
    } = this.state;

    const isFullNameInvalid = isSubmitted && !fullName.trim();
    const isEmailInvalid = isSubmitted && !email.trim();
    const isPasswordInvalid = isSubmitted && !this.validatePassword(password);
    const isConfirmationInvalid =
      isSubmitted &&
      (!this.validatePassword(passwordConfirmation) ||
        password !== passwordConfirmation);
    const isCheckboxInvalid = isSubmitted && !isAgreed;

    return (
      <section className={styles.wrapper}>
        <h2 className={styles.title}>Create Your Account</h2>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label className={styles.label} htmlFor="fullName">
            FULL NAME
          </label>
          <input
            id="fullName"
            className={cn(styles.input, {
              [styles.inputError]: isFullNameInvalid,
            })}
            type="text"
            name="fullName"
            placeholder="John Doe"
            value={fullName}
            onChange={this.handleChange}
          />

          <label className={styles.label} htmlFor="email">
            EMAIL ADDRESS
          </label>
          <input
            id="email"
            className={cn(styles.input, {
              [styles.inputError]: isEmailInvalid,
            })}
            type="email"
            name="email"
            placeholder="johndoe@gmail.com"
            value={email}
            onChange={this.handleChange}
          />

          <label className={styles.label} htmlFor="password">
            PASSWORD
          </label>
          <div className={styles.inputContainer}>
            <input
              id="password"
              className={cn(styles.inputWithIcon, {
                [styles.inputError]: isPasswordInvalid,
              })}
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
            />
            <span
              className={styles.togglePassword}
              onClick={this.togglePassword}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <label className={styles.label} htmlFor="passwordConfirmation">
            PASSWORD CONFIRMATION
          </label>
          <div className={styles.inputContainer}>
            <input
              id="passwordConfirmation"
              className={cn(styles.inputWithIcon, {
                [styles.inputError]: isConfirmationInvalid,
              })}
              type={showPasswordConfirmation ? "text" : "password"}
              name="passwordConfirmation"
              placeholder="Password"
              value={passwordConfirmation}
              onChange={this.handleChange}
            />
            <span
              className={styles.togglePassword}
              onClick={this.togglePasswordConfirmation}
            >
              {showPasswordConfirmation ? "🙈" : "👁️"}
            </span>
          </div>

          <div className={styles.checkboxContainer}>
            <input
              className={styles.checkboxContainerInput}
              type="checkbox"
              id="terms"
              checked={isAgreed}
              onChange={this.handleCheckboxChange}
            />
            <label
              className={cn(styles.checkboxContainerLabel, {
                [styles.errorText]: isCheckboxInvalid,
              })}
              htmlFor="terms"
            >
              I Agree All Statements In Terms Of Service
            </label>
          </div>

          <button className={styles.btn} type="submit">
            Sign Up
          </button>

          <p className={styles.footerText}>
            I'm already a member!{" "}
            <a className={styles.footerTextLink} href="#signin">
              Sign In
            </a>
          </p>
        </form>
      </section>
    );
  }
}
