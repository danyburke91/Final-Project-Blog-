// import { Link } from "react-router-dom";
import "./about.css";
import meMoun from '../about/meMoun.jpg'


export default function About() {
    return (
        <div className="aboutbar">
            <div className="aboutItem">
                <span className="aboutTitle">ABOUT ME</span>
                <img
                    src={meMoun}
                    alt=""
                />
                <h3>I love to play soccer, spend time with my family and fur babies, rescue animals, and travel.
                    I have a huge passion for animals and nature. My dream is to have a sanctuary of rescued animals, and have people with special needs come to enjoy time with them.
                    <strong><i> My goal in life is to make this world a better place, protect the unprotected and speak for those who can’t speak.</i></strong>
                </h3>
                <p>
                    If I told you writing saved my life would you believe me?
                    What writing did is give me a space. Give me a voice.
                    The beauty of writing therapy is that you can express yourself at any time, without the immediate need for another person to validate your view. Writing down your thoughts can help you to understand yourself better, see things from a different perspective, and even brainstorm solutions to distressing problems.
                    Let's WRITE!
                </p>
            </div>
            <div className="aboutItem">
                <span className="sidebarTitle">FOLLOW ME</span>
                <div className="sidebarSocial">
                    <a href="https://www.facebook.com/dany.burke.9/" className="sidebarIcon fab fa-facebook-square"></a>
                    <a href="https://www.instagram.com/danybrkrys/" className="sidebarIcon fab fa-instagram-square"></a>
                    <a href="https://www.pinterest.com/danyburke/" className="sidebarIcon fab fa-pinterest-square"></a>
                    <a href="https://www.linkedin.com/in/saradburke/" className="sidebarIcon fa-brands fa-linkedin"></a>
                </div>
            </div>

        </div>
    );
}