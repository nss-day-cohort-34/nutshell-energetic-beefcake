
const factoryFunctions = {
  welcomePageHtmlRep() {
    return `
  <div id="welcome-container">
    <div id="logo"></div>
    <h1>Welcome to Nutshell</h1>
    <div id="nav-container">
    <a href="#" id="welcome-register">Register</a>
    <a href="#" id="welcome-login">Log In</a>
    </div>
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
      <h1 id="nutshell-title">Nutshell</h1>
    </header>
      <div id="dashboard-container">
      <section id="news-container oneSection">
      <h2>News</h2>
      <div id="newsFormContainer">
        <button id="add-news-btn">Add New Article</button>
      </div>
      <div id="newsCardsContainer" class="scrollable"></div>
    </section>
    <section id="tasks-container oneSection">
      <h2>Tasks</h2>
      <div id="taskFormContainer">
        <button id="add-task-btn">Add New Task</button>
        <button id="see-todo-tasks-btn">View To Do List</button>
        <button id="see-completed-tasks-btn">View Completed Tasks</button>
      </div>
      <div id="taskCardsContainer" class="scrollable"></div>
    </section>
    <section id="messages-container oneSection">
      <h2>Message Board</h2>
      <div id="messageCardsContainer" class="scrollable scroll-bottom"></div>
      <div id="messageFormContainer">
        <button id="add-message-btn">Post New Message</button>
      </div>
    </section>
    <section id="events-container oneSection">
      <h2>Events</h2>
      <div id="eventFormContainer">
        <button id="add-event-btn">Add New Event</button>
        <button id="upcoming-event-btn">Upcoming Events</button>
        <button id="past-event-btn">Show Pasts Events</button>
      </div>
      <div id="eventCardsContainer" class="scrollable"></div>
      </section>
      <section id="friends-container oneSection">
      <h2>Friends</h2>
      <div id="friendFormContainer">
        <button id="search-friends-btn">Add New Friends</button>
      </div>
      <div id="friend-cards-container" class="scrollable"></div>
    </section>
    </div>
    <footer id="main-footer">
    <button id="logout-btn">Log Out</button>
    </footer>
    `
  }

}

export default factoryFunctions