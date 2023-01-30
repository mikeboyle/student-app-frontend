import { useState } from 'react';
import StudentCard from '../StudentCard/StudentCard';

import './StudentList.css';

const StudentList = ({ studentData }) => {
  // When I type in the input, I should see filtered results by name
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  // body of function - filter data here
  // create a var to hold the filtered data
  let dataToDisplay = studentData;

  // if searchInput is truthy (not empty string)
  // reassign dataToDisplay with the filtered data
  if (searchInput) {
    // we only reach this code if the user has typed something
    dataToDisplay = studentData.filter((student) => {
      // If the student's full name includes the searchInput, return true
      // otherwise false
      // (case insensitive)
      const { firstName, lastName } = student;
      const fullName = `${firstName} ${lastName}`.toLowerCase();

      return fullName.includes(searchInput.toLowerCase());
    });
  }
  /* If dataToDisplay.length === 0, 
  show "no results for {searchInput}" 
  Else: render student cards 
  */
  const renderContent = () => {
    let contentClassName = 'StudentList__content';

    if (dataToDisplay.length === 0) {
      contentClassName += ' StudentList__content--center';
      return (
        <div className={contentClassName}>No results for {searchInput}</div>
      );
    } else {
      return (
        <div className={contentClassName}>
          {dataToDisplay.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      );
    }
  };

  console.log(`<StudentList /> rendered! searchInput = ${searchInput}`);
  return (
    <div className="StudentList">
      <div className="StudentList__input">
        <input
          value={searchInput}
          type="text"
          placeholder="Search by name"
          onChange={handleChange}
        />
      </div>
      {renderContent()}
    </div>
  );
};

export default StudentList;
