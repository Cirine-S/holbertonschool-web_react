import React from 'react';
import PropTypes from 'prop-types';

import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import './CourseList.css';

const CourseList = ({ listCourses }) => {
  return (
    <table id='CourseList' cellSpacing='0'>
      <thead>
      <CourseListRow textFirstCell='Available courses' isHeader={true} />
        <CourseListRow
          textFirstCell='Course Name'
          textSecondCell='Credit'
          isHeader={true}
        />
      </thead>
      <tbody>
        {listCourses.length ? (
          listCourses.map(({ id, name, credit }) => (
            <CourseListRow
              key={id}
              textFirstCell={name}
              textSecondCell={credit}
            />
          ))
        ) : (
          <tr>
            <td colSpan='2'>No course available yet</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
};

CourseList.defaultProps = {
  listCourses: []
};

export default CourseList;
