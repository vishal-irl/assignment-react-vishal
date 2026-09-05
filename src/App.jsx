import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("students");

  const students = [
    {
      name: "Jagruti",
      course: "BCA",
      semester: "5th Semester",
      email: "jagruti@gmail.com",
      phone: "9876543210",
      city: "Navsari",
    },
    {
      name: "Bhumika",
      course: "Bcom",
      semester: "6th Semester",
      email: "bhumika@gmail.com",
      phone: "9876543211",
      city: "Navsari",
    },
    {
      name: "Hetal",
      course: "BBA",
      semester: "4th Semester",
      email: "hetal@gmail.com",
      phone: "9876543212",
      city: "Surat",
    },
  ];

  return (
    <div className="app">

      {page === "students" ? (
        <>
          <h1 className="title">Student Profile</h1>

          <div className="student-container">
            {students.map((student, index) => (
              <StudentCard
                key={index}
                name={student.name}
                course={student.course}
                semester={student.semester}
                email={student.email}
                phone={student.phone}
                city={student.city}
              />
            ))}
          </div>

          <button
            className="analyzer-btn"
            onClick={() => setPage("analyzer")}
          >
            Text Analyzer
          </button>
        </>
      ) : (
        <TextAnalyzer onBack={() => setPage("students")} />
      )}

    </div>
  );
}


/* =========================
   STUDENT CARD
========================= */

function StudentCard({
  name,
  course,
  semester,
  email,
  phone,
  city,
}) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="student-card">

      <h2>{name}</h2>

      <p>Course: {course}</p>
      <p>Semester: {semester}</p>

      <button
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {showDetails && (
        <div className="details">
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>City: {city}</p>
        </div>
      )}

    </div>
  );
}


/* =========================
   TEXT ANALYZER
========================= */

function TextAnalyzer({ onBack }) {
  const [text, setText] = useState("");

  const words =
    text.trim() === ""
      ? 0
      : text.trim().split(/\s+/).length;

  const characters = text.length;

  useEffect(() => {
    document.title = `Text Analyzer - ${characters} Characters`;
  }, [characters]);

  return (
    <div className="analyzer-page">

      <button
        className="back-btn"
        onClick={onBack}
      >
        ← Student Profile
      </button>

      <h1>Text Analyzer</h1>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write something here..."
      />

      <div className="stats">

        <div className="stat-box">
          <span>Words</span>
          <strong>{words}</strong>
        </div>

        <div className="stat-box">
          <span>Characters</span>
          <strong>{characters}</strong>
        </div>

      </div>

    </div>
  );
}

export default App;