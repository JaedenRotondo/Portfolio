import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
    const [hoverMail, setHoverMail] = useState(false);
    const [hoverLinkedin, setHoverLinkedin] = useState(false);
    const [hoverGithub, setHoverGithub] = useState(false);

    return (
        <div className="flex-col pt-20 pb-6">
            <h2 className="md:text-2xl font-large">Contact Me!</h2>
            <div className="flex items-center mt-2">
                <a
                    href="mailto:jaedenrotondo@jaedenrotondo.tech"
                    className="inline-block text-blue-500 hover:text-blue-600 transition-colors"
                    onMouseEnter={() => setHoverMail(true)}
                    onMouseLeave={() => setHoverMail(false)}
                >
                    <div className="flex items-center space-x-2">
                        <FaEnvelope className={`w-6 h-6 ${hoverMail ? 'animate-bounce' : ''}`} />
                        <span>Email Me</span>
                    </div>
                </a>
            </div>
            <div className="flex items-center mt-2">
                <a
                    href="https://www.linkedin.com/in/jaeden-rotondo/"
                    className="inline-block text-blue-500 hover:text-blue-600 transition-colors"
                    onMouseEnter={() => setHoverLinkedin(true)}
                    onMouseLeave={() => setHoverLinkedin(false)}
                >
                    <div className="flex items-center space-x-2">
                        <FaLinkedin className={`w-6 h-6 ${hoverLinkedin ? 'animate-bounce' : ''}`} />
                        <span>View LinkedIn Profile</span>
                    </div>
                </a>
            </div>
            <div className="flex items-center mt-2">
                <a
                    href="https://github.com/JaedenRotondo"
                    className="inline-block text-blue-500 hover:text-blue-600 transition-colors"
                    onMouseEnter={() => setHoverGithub(true)}
                    onMouseLeave={() => setHoverGithub(false)}
                >
                    <div className="flex items-center space-x-2">
                        <FaGithub className={`w-6 h-6 ${hoverGithub ? 'animate-bounce' : ''}`} />
                        <span>View GitHub Profile</span>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Contact;
