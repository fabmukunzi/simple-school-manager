import React, { useEffect, useState } from 'react';

const Teacher = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [addData, setAddData] = useState(false);
  const [showclasses, setShowClasses] = useState(false);
  const [classes, setClasses] = useState([]);
  const [showstudents, setShowStudents] = useState(false);
  const [students, setStudents] = useState([]);
  const [showscores, setShowScores] = useState(false);
  const [scores, setScores] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [works, setWorks] = useState([]);
  const getStudentsByClass = (classId) => {
    fetch(`http://localhost:3000/teacher/${classId}/students`)
      .then((res) => res.json())
      .then((response) => {
        console.log(response.students, 'students');
        setStudents(response.students);
        setShowStudents(true);
        console.log(students, 'ddddd');
      });
  };
  const getStudentScores = (studentId) => {
    fetch(`http://localhost:3000/teacher/scores?student=${studentId}`)
      .then((res) => res.json())
      .then((response) => {
        console.log(response.scores, 'scores');
        setScores(response.scores);
        setShowScores(true);
      });
    console.log(scores, 'sco');
  };
  useEffect(() => {
    fetch('http://localhost:3000/teacher/subjects')
      .then((res) => res.json())
      .then((response) => {
        setSubjects(response.subjects);
      });
    fetch('http://localhost:3000/teacher/classes')
      .then((res) => res.json())
      .then((response) => {
        setClasses(response.classes);
      });
    fetch('http://localhost:3000/teacher/works')
      .then((res) => res.json())
      .then((response) => {
        setWorks(response.works);
      });
  }, []);
  return (
    <div>
      <h1>Teacher's Page</h1>
      <h2>Welcome {user?.names}</h2>
      <button type="button" onClick={() => setAddData(true)}>
        Add marks
      </button>
      {addData
        ? subjects.map((subject) => {
            return (
              <li>
                <a href="#" onClick={() => setShowClasses(true)}>
                  {subject.name}
                </a>
              </li>
            );
          })
        : ''}
      {showclasses
        ? classes.map((classe) => {
            return (
              <li>
                <a href="#" onClick={() => getStudentsByClass(classe.id)}>
                  {classe.name}
                </a>
              </li>
            );
          })
        : ''}
      {showstudents
        ? students?.map((student) => {
            return (
              <li>
                <a href="#" onClick={() => getStudentScores(student.id)}>
                  {student.names}
                </a>
              </li>
            );
          })
        : ''}
      {showscores ? (
        <table style={{ color: 'green' }}>
          <tr>
            <th>Work</th>
            <th>Marks</th>
          </tr>
          <tr>
            {scores?.map((score) => {
              return (
                <>
                  <td>
                    {works?.map((work) =>{
                        const name=score?.work === work?.id ? work.name : ''
                      return name;
                    })}
                  </td>
                  <td>{score.marks}</td>
                </>
              );
            })}
          </tr>
        </table>
      ) : (
        ''
      )}
    </div>
  );
};

export default Teacher;
