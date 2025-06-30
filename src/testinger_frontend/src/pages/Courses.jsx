import React, { useEffect, useState } from "react";
// import backend from "../services/backendService";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    backend.get_all_courses().then(setCourses);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Available Courses</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index} className="mb-2">
            <strong>{course.title}</strong>: {course.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
