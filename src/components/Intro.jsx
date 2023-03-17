import React from 'react';
import Typewriter from './Typewriter';

function Intro() {

    return (
        <div className="flex-col  pt-20 pb-6">
            <h1 className="flex items-center justify-center text-base md:text-5xl font-bold font-large">Jaeden
                Rotondo</h1>
            <p className="flex items-center justify-center text-base md:text-xl mb-3 text-center font-medium">Computer
                Science Student and Software Developer</p>
            <p className="text-sm max-w-screen-md mb-6 font-mono ">
                <Typewriter
                    text="> I am a third year computer science student who is eager to learn more through an internship as well as contribute to the work environment. Willing to work independently and in a team environment to further my experience in the field."/>
            </p>
            <h2 class="md:text-2xl font-large">Education</h2>
            <div class="p-2"></div>
            <p className="text-left text-left font-medium">
            </p>
            <ul class="list-disc">
                <li>Bachelors of Computer Science Co-op with Minor in Philosophy Concordia University</li>
                <li>Member of the Institute for Co-operative Education</li>
                <li>Proficient in Object Oriented Programming in Java through COMP 248 and COMP 249</li>
                <li>Experience in Web Development and Programming Paradigms through SOEN 287 and COMP 348</li>
                <li>Mastered Data Structures and Algorithms through COMP 352</li>
                <li>Experience in AGILE methodologies and software development lifecycle through COMP 354</li>
            </ul>

        </div>
    )
}

export default Intro;


