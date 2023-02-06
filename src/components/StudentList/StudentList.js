import { useState } from 'react';
import StudentCard from '../StudentCard/StudentCard';

import './StudentList.css';

const StudentList = ({ studentData }) => {
  // When I type in the input, I should see filtered results by name
  const [searchInput, setSearchInput] = useState('');

  // Keep track of which students should have expanded cards
  // Possible data types:
  // - array of ids ["1", "3"]
  const [expanded, setExpanded] = useState([]);

  // pass this as a prop to the child
  // this function will toggle the presence of the
  // child's id in the expanded array
  const handleToggleExpanded = (id) => {
    // be careful not to mutate the state -- use copies of expanded array
    // if the id is not in the expanded array, add it to the array
    if (!expanded.includes(id)) {
      // add it to a copy of the expanded array
      const newExpanded = [...expanded, id];
      setExpanded(newExpanded);
    } else {
      // remove the id from a copy of the expanded array
      const removed = expanded.filter((currId) => currId !== id);
      setExpanded(removed);
    }
  };

  const handleExpandAll = () => {
    // replace the expanded state with an array that has all the ids
    // (all the ids == all the ids in studentData)
    const allIds = studentData.map((student) => student.id);
    setExpanded(allIds);
  };

  const handleCollapseAll = () => {
    setExpanded([]);
  };

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
          {/* if the current student's id is in the expanded array,
              the expanded prop should be true; else false
           */}
          {dataToDisplay.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              expanded={expanded.includes(student.id)}
              onClick={() => handleToggleExpanded(student.id)}
            />
          ))}
        </div>
      );
    }
  };

  console.log(`<StudentList /> rendered! searchInput = ${searchInput}`);
  return (
    <div className="StudentList">
      <div className="StudentList__controls">
        <input
          value={searchInput}
          type="text"
          placeholder="Search by name"
          onChange={handleChange}
        />
        <button onClick={handleExpandAll}>Expand All</button>
        <button onClick={handleCollapseAll}>Collapse All</button>
      </div>
      {renderContent()}
    </div>
  );
};

export default StudentList;
