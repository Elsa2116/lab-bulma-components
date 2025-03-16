import React from "react";
import "bulma/css/bulma.css";

// Navbar Component
const Navbar = () => {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">Home</a>
      </div>
      <div className="navbar-end">
        <a className="navbar-item" href="/login">Login</a>
        <a className="navbar-item" href="/signup">Signup</a>
      </div>
    </nav>
  );
};

// FormField Component
const FormField = ({ label, type, placeholder }) => {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input className="input" type={type} placeholder={placeholder} />
      </div>
    </div>
  );
};

// CoolButton Component
const classMapping = {
  isPrimary: "is-primary",
  isSuccess: "is-success",
  isDanger: "is-danger",
  isSmall: "is-small",
  isRounded: "is-rounded",
};

const CoolButton = ({ children, ...props }) => {
  const classList = ["button"];

  Object.keys(props).forEach((key) => {
    if (classMapping[key]) {
      classList.push(classMapping[key]);
    }
  });

  return <button className={classList.join(" ")}>{children}</button>;
};

// SignupForm Component
const SignupForm = () => {
  return (
    <div className="container">
      <h1 className="title">Signup</h1>
      <form>
        <FormField label="Name" type="text" placeholder="Enter your name" />
        <FormField label="Email" type="email" placeholder="Enter your email" />
        <FormField label="Password" type="password" placeholder="Enter your password" />
        <CoolButton isSuccess>Submit</CoolButton>
      </form>
    </div>
  );
};

// Message Component
const Message = ({ isInfo, title, children }) => {
  return (
    <article className={`message ${isInfo ? "is-info" : ""}`}>
      <div className="message-header">
        <p>{title}</p>
      </div>
      <div className="message-body">{children}</div>
    </article>
  );
};

// App Component
function App() {
  return (
    <div className="App">
      <Navbar />
      <SignupForm />
      <CoolButton isSmall isDanger isRounded>Button 1</CoolButton>
      <CoolButton isSmall isSuccess>Button 2</CoolButton>
      <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
  );
}

export default App;
