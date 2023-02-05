const StudentGrades = ({ grades }) => {
  return (
    <ul>
      {grades.map((grade, index) => (
        <li>
          Test {index + 1} {grade}%
        </li>
      ))}
    </ul>
  );
};

export default StudentGrades;

/*
const greet = (name) => {
  return `Hello, ${name}`;
};

greet('Kong'); // "Hello, Kong"

const greet2 = (name) => `Hello, ${name}`;

greet2('Isidro'); // "Hello, Isidro"

const greet3 = (name) => (`Hello, ${name}`);
*/
