import React from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

const CoursesList = ({ courses }) => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <h2 className="mt-4 mb-3">{t('Courses')}</h2>
      <div className="row">
        {courses.map((course) => (
          <div className="col-md-4 mb-4" key={course.id}>
            <div className="card">
              {/* Image section */}
              <img
                src={course.imageUrl}
                className="card-img-top"
                alt={course.title}
              />
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                {/* Link to CourseDetail */}
                <Link to={`/courses/${course.id}`} className="btn btn-primary">
                  {t('View')}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
