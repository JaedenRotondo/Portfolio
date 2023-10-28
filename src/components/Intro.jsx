import React from 'react';
import Typewriter from './Typewriter';

function Intro() {

    return (
        <div className="flex-col  pt-20 pb-6">
            <h1 className="flex items-center justify-center text-base md:text-5xl font-bold font-large">Jaeden
                Rotondo</h1>
            <p className="flex items-center justify-center text-base md:text-xl mb-3 text-center font-medium">Computer
                Science Student and Software Developer</p>
            <p className="text-sm font-medium max-w-screen-md -mb-8 font-mono ">
                <Typewriter
                    text="> Hello and welcome to my portfolio website! I am a third year computer science student who is currently interning as a Full Stack Software Developer at Flexspring. This website was built with React.js and Tailwind CSS, it is currently being hosted by Netlify."/>
            </p>
        </div>
    )
}

export default Intro;


