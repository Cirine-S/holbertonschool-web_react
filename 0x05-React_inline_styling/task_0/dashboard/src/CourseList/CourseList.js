import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';

const CourseList = ({ listCourses }) => {
  return (
    <table id='CourseList' cellSpacing='0' className={css(styles.table)}>
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
            <td colSpan='2' clasName={css(styles.cell)}>No course available yet</td>
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

const styles = StyleSheet.create({
  table: {
    width: '100%'
  },
  'table-header': {
    textAlign: 'center'
  },
  cell: {
    padding: '0.25rem',
    border: '1px solid lightgray'
  }
});

export default CourseList;
