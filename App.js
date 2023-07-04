import React from 'react';
import LastSemester from './LastSemester';

const App = () => {
  const courses = [
    { name: 'SDA', gpa: 2.7 },
    { name: 'Web Technologies', gpa: 2.7 },
    { name: 'Database', gpa: 3.0 },
    { name: 'Software Requirement Engineering', gpa: 2.3 },
    { name: 'Human Computer Interaction', gpa: 2.7 }
  ];

  return (
    <div>
      <LastSemester courses={courses} />
    </div>
  );
};

export default App;
