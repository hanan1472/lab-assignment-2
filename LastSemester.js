import React from 'react';
import PropTypes from 'prop-types';

const LastSemester = ({ courses }) => {
  return (
    <div>
      <h1>Muhammad Hanan Haider</h1>
      <ul>
        {courses.map(course => (
          <li key={course.name}>
            {course.name}{' '}
            <button onClick={() => alert(`GPA: ${course.gpa}`)}>
              Show GPA
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

LastSemester.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      gpa: PropTypes.number.isRequired
    })
  ).isRequired
};

export default LastSemester;
