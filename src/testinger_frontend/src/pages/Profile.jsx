import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [role, setRole] = useState("student");

  const student = {
    name: "John Doe",
    rollNo: "NITW2025CS123",
    subjectsEnrolled: ["Blockchain Fundamentals", "Smart Contracts", "Distributed Systems"],
    latestCgpa: 8.9,
    previousCgpa: 8.7,
  };

  const admin = {
    name: "Admin User",
    employeeId: "ADMIN001",
    responsibilities: ["Manage Courses", "Review Proposals", "Oversee DAO Governance"],
    contactEmail: "admin@platform.com",
  };

  return (
    <div className="profile-container">
      <div className="role-toggle">
        <button
          className={role === "student" ? "active" : ""}
          onClick={() => setRole("student")}
        >
          Student Panel
        </button>
        <button
          className={role === "admin" ? "active" : ""}
          onClick={() => setRole("admin")}
        >
          Admin Panel
        </button>
      </div>

      <div className="profile-card">
        <h2 className="profile-title">
          {role === "student" ? "Student Profile" : "Admin Profile"}
        </h2>

        <p><strong>Name:</strong> {role === "student" ? student.name : admin.name}</p>

        {role === "student" && (
          <>
            <p><strong>Roll No:</strong> {student.rollNo}</p>
            <p><strong>Subjects Enrolled:</strong></p>
            <ul className="subjects-list">
              {student.subjectsEnrolled.map((subject, index) => (
                <li key={index}>{subject}</li>
              ))}
            </ul>
            <p><strong>Latest CGPA:</strong> {student.latestCgpa}</p>
            <p><strong>Previous Semester CGPA:</strong> {student.previousCgpa}</p>
          </>
        )}

        {role === "admin" && (
          <>
            <p><strong>Employee ID:</strong> {admin.employeeId}</p>
            <p><strong>Contact Email:</strong> {admin.contactEmail}</p>
            <p><strong>Responsibilities:</strong></p>
            <ul className="subjects-list">
              {admin.responsibilities.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
