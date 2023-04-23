import React, { useEffect, useRef, useState } from 'react';
import SelectBox from './SelectBox';

const Teacher = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  //   const [classe, setClasse] = useState({});
  const [classes, setClasses] = useState([]);
  const [subject, setSubject] = useState('');
  const [work, setWork] = useState('');
  const [students, setStudents] = useState([]);
  const [showData, setShowData] = useState(false);
  const [scores, setScores] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [works, setWorks] = useState([]);
  const [showSubject, setShowSubject] = useState(true);
  const [showWork, setShowWork] = useState(true);
  const [enableShowBtn, setEnableShowBtn] = useState(true);
  const currentScore = useRef({});

  const getStudentsByClass = (classId) => {
    fetch(`http://localhost:3000/teacher/${classId}/students`)
      .then((res) => res.json())
      .then((response) => {
        setStudents(response.students);
      });
  };
  const handleClassChange = (classe) => {
    getStudentsByClass(classe);
    setShowSubject(false);
  };
  const handleSubjectChange = (subject) => {
    setSubject(subject);
    setShowWork(false);
  };
  const handleWorkChange = (work) => {
    setWork(work);
    getStudentScores(work);
    setEnableShowBtn(false);
  };
  const getStudentScores = (workId) => {
    fetch(`http://localhost:3000/teacher/scores?work=${workId}`)
      .then((res) => res.json())
      .then((response) => {
        setScores(response.scores);
      });
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
  }, [subjects, classes, works]);
  return (
    <div>
      <h1>Teacher's Page</h1>
      <h2>Welcome {user?.names}</h2>
      <div className="flex gap-10">
        <SelectBox
          label="classes"
          title="Select class"
          options={classes}
          onchange={handleClassChange}
        />
        <SelectBox
          label="subjects"
          title="Select subject"
          options={subjects}
          onchange={handleSubjectChange}
          disabled={showSubject}
        />
        <SelectBox
          label="works"
          title="Select Work"
          options={works}
          onchange={handleWorkChange}
          disabled={showWork}
        />
        <button
          className="bg-gray-500 px-10 m-3"
          disabled={enableShowBtn}
          onClick={() => setShowData(true)}
        >
          Show
        </button>
      </div>
      {showData ? (
        <div className="relative pt-10 top-5 overflow-x-auto">
          {/* <caption className="w-full absolute top-3">{`${subject} ${work}`}</caption> */}
          <table className="w-[80%] mr-auto ml-auto  text-sm text-left text-blue-100 dark:text-blue-100">
            <thead className="text-xs text-white uppercase bg-blue-600 dark:text-white">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Student Names
                </th>
                <th scope="col" className="px-6 py-3">
                  Student Marks
                </th>
                <th scope="col" className="px-6 py-3">
                  Options
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => {
                return (
                  <tr
                    key={student?.id}
                    className="bg-blue-500 border-b border-blue-400"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                    >
                      {student.names}
                    </th>
                    <td className="px-6 py-4">
                      <td className="px-6 py-4">
                        {scores.map((score) => {
                            console.log(scores,'scores')
                          if (score.student === student.id) {
                            const matchingScore = scores.find(
                              (s) => s.student === student?.id
                            );
                            if (matchingScore.subject === subject) {
                              return (
                                <input
                                  type="text"
                                  defaultValue={matchingScore.marks || 0}
                                  ref={(ref) =>
                                    (currentScore.current[student?.id] = ref)
                                  }
                                  id="marks"
                                  className="focus:border-none p-2 text-black"
                                />
                              );
                            }
                          }
                        })}
                        {/* <input
                          type="text"
                          defaultValue={ls}
                          ref={(ref) =>
                            (currentScore.current[student?.id] = ref)
                          }
                          id="marks"
                          className="focus:border-none p-2 text-black"
                        /> */}
                      </td>

                      {/* {scores.map((score) => {
                        if (score.student === student.id) {
                          const matchingScore = scores.find(
                            (s) =>
                              s.student === student?.id && s.subject === subject
                          );
                          return (
                            <>
                              <input
                                type="text"
                                defaultValue={
                                  matchingScore ? matchingScore.marks : 0
                                }
                                ref={(ref) =>
                                  (currentScore.current[student?.id] = ref)
                                }
                                id="marks"
                                className="focus:border-none p-2 text-black"
                              />
                            </>
                          );
                        }
                      })} */}
                    </td>

                    <td>
                      <button
                        type="button"
                        className="bg-white text-black px-10 py-3"
                        onClick={(e) => {
                          const value = currentScore.current[student?.id].value;
                          const matchingScore = scores.find(
                            (score) =>
                              score.subject === subject &&
                              score.student === student?.id
                          );
                          console.log(user.id,'user')
                          const scoreId = matchingScore
                            ? matchingScore?.id
                            : null;
                          fetch('http://localhost:3000/teacher/addmarks', {
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                              marks: value,
                              subject: subject,
                              work: work,
                              teacherId:user.id,
                              student: student?.id,
                              id: scoreId,
                            }),
                          })
                            .then((res) => res.json())
                            .then((response) => {
                              console.log(
                                {
                                  marks: value,
                                  subject: subject,
                                  work: work,
                                  student: student?.id,
                                  id: scoreId,
                                },
                                'sent data'
                              );
                              console.log(response, 'response');
                              alert(response.message);
                              console.log(value, 'value');
                            });
                        }}
                      >
                        Save
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Teacher;
