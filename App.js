import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
    <div className="course-container">
    <header>
      <h1>React.js Course</h1>
      <p>Learn the fundamentals of React.js</p>
    </header>
    <main>
      <section className="course-details">
        <h2>Course Details</h2>
        <p>
          This course covers the basics of React.js, including components, state, props, and more.
        </p>
      </section>
      <section className="instructor">
        <h2>Instructor</h2>
        <p>John Doe</p>
      </section>
      <section className="schedule">
        <h2>Schedule</h2>
        <ul>
          <li>Week 1: Introduction to React</li>
          <li>Week 2: Components and Props</li>
          <li>Week 3: State and Lifecycle</li>
          {/* Add more weeks as needed */}
        </ul>
      </section>
      <section className="enroll">
        <button>Enroll Now</button>
      </section>
    </main>
  </div>
  );
}

export default App;
