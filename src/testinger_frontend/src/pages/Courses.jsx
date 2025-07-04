import React, { useEffect, useState } from "react";
// import backend from "../services/backendService";
import './Courses.css';
import Navbar from "../components/Navbar";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Replace with actual API call:
    // backend.get_all_courses().then(setCourses);

    // Mock data for demo
    setCourses([
      {
        title: "Web Development",
        description: "Learn HTML, CSS, JavaScript, and React to build modern websites.",
        status: "open",
        outcomes: [
          "Build responsive websites",
          "Understand React fundamentals",
          "Deploy to the web"
        ]
      },
      {
        title: "Data Science",
        description: "Work with data, build models, and gain insights.",
        status: "closed",
        outcomes: [
          "Work with Python and Pandas",
          "Create predictive models",
          "Visualize data effectively"
        ]
      }
    ]);
  }, []);

  return (
    <>
      <div className="courses-page">
        <div className="courses-header">
          <h1>Available Courses</h1>
          <p>Explore our curated selection of skill-based courses and start learning today!</p>
        </div>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <h2>{course.title}</h2>
              <p className="description">{course.description}</p>

              <div className="meta">
                <span className={`status ${course.status}`}>
                  {course.status === "open" ? "Open for Enrollment" : "Closed"}
                </span>
              </div>

              {course.outcomes && (
                <ul className="outcomes">
                  {course.outcomes.map((outcome, i) => (
                    <li key={i}>{outcome}</li>
                  ))}
                </ul>
              )}

              <button
                className="enroll-btn"
                disabled={course.status !== "open"}
              >
                {course.status === "open" ? "Enroll Now" : "Enrollment Closed"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
