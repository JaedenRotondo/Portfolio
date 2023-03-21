
import React from 'react';
import EducationItem from "./EducationItem.jsx";
import education from '../data/education';
import Title from './Title';

function Education() {
    return (
        <div className="flex flex-col md:flex-row justify-center my-10">
            <div className="w-full ">
                <Title>Education</Title>
                <h3 className="text-lg font-semibold text-stone-900 dark:text-white mb-4">
                    Bachelors of Computer Science Co-op with Minor in Philosophy Concordia University
                </h3>
                {education.map(item => (
                    <EducationItem
                        title={item.title}
                    />
                ))}
            </div>
        </div>
    )
}

export default Education;