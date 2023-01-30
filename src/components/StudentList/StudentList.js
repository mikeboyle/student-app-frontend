import { useState } from 'react';
import StudentCard from '../StudentCard/StudentCard';

import './StudentList.css';

const StudentList = ({ studentData }) => {
  const [searchInput, setSearchInput] = useState('');

  // create var to store filtered data
  const filteredData = studentData.filter((student) => {
    // create new var for the full name
    const fullName = student.firstName + ' ' + student.lastName;

    return fullName.toLowerCase().includes(searchInput.toLowerCase());
  });

  console.log(`<StudentList /> rendered!`);
  return (
    <div className="StudentList">
      <input
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        type="text"
        placeholder="Search by name"
      />
      {filteredData.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
      {filteredData.length === 0 && (
        <div>No students found for {searchInput}</div>
      )}
    </div>
  );
};

export default StudentList;
