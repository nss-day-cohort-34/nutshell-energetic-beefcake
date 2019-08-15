
const factoryFunctions = {
  loginHtmlRep() {
    return `
    <div id="login-and-registration-container" class="">
      <fieldset id="login-container">
        <h2>Log in</h2>
        <label for="username">User Name</label>
        <input type="text">
        <label for="password">Password</label>
        <input type="password">
        <button id="login-btn">Log In</button>
      </fieldset>
      <fieldset id="register-container">
        <h2>Register</h2>
        <input type="text" id="register-firstname" placeholder="First Name">
        <input type="text" id="register-lastname" placeholder="Last Name">
        <input type="email" id="register-email" placeholder="Email">
        <input type="text" id="register-username" placeholder="Username">
        <input type="password" id="register-password" placeholder="Password">
        <button id="register-btn">Register</button>
      </fieldset>
    </div>
    `
  },
  dashboardHtmlRep() {
    return `
    <section id="news-container">
      <h2>News</h2>
    </section>
    <section id="tasks-container">
      <h2>Tasks</h2>
    </section>
    <section id="messages-container">
      <h2>Message Board</h2>
    </section>
    <section id="events-container">
      <h2>Events</h2>
    </section>
    <section id="friends-container">
      <h2>Friends</h2>
    </section>
    `
  }

}

export default factoryFunctions