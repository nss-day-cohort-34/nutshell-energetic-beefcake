
const factoryFunctions = {
  welcomePageHtmlRep() {
    return `
  <div id="welcome-container">
    <h1>Welcome to Nutshell</h1>
    <a href="#" id="welcome-register">Click Here to Register</a>
    <a href="#"id ="welcome-login">Existing Users Log In Here</a>
  </div>
  `
  },
  registerHtmlRep() {
    return `
    <fieldset id="register-container">
      <h2>Register</h2>
      <input type="text" id="register-firstname" placeholder="First Name">
      <input type="text" id="register-lastname" placeholder="Last Name">
      <input type="email" id="register-email" placeholder="Email">
      <input type="text" id="register-username" placeholder="Username">
      <input type="password" id="register-password" placeholder="Password">
      <button id="register-btn">Register</button>
    </fieldset>
    `
  },
  loginHtmlRep() {
    return `
      <fieldset id="login-container">
        <h2>Log in</h2>
        <input type="text" placeholder="Username" id="login-username">
        <input type="password" placeholder="Password" id="login-password">
        <button id="login-btn">Log In</button>
      </fieldset>
    `
  },
  dashboardHtmlRep() {
    return `
    <header>
      <h1>Nutshell</h1>
    </header>
      <section id="news-container">
      <h2>News</h2>
    </section>
    <section id="tasks-container">
      <h2>Tasks</h2>
      <div id="taskFormContainer">
        <button id="add-task-btn">Add New Task</button>
        <button id="see-todo-tasks-btn">View To Do List</button>
        <button id="see-completed-tasks-btn">View Completed Tasks</button>
      </div>
      <div id="taskCardsContainer" class="scrollable"></div>
    </section>
    <section id="messages-container">
      <h2>Message Board</h2>
    </section>
    <section id="events-container">
      <h2>Events</h2>
      <div id="eventFormContainer">
        <button id="add-event-btn">Add New Event</button>
      </div>
      <div id="eventCardsContainer" class="scrollable"></div>
    </section>
    <section id="friends-container">
      <h2>Friends</h2>
    </section>
    <button id="logout-btn">Log Out</button>
    <footer>By Energetic Beefcake</footer>
    `
  }

}

export default factoryFunctions