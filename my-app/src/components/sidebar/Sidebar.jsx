import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import meMoun from '../sidebar/meMoun.jpg'
import path from '../sidebar/path.mp3'
import sentire from '../sidebar/sentire.mp3'
import lucky from '../sidebar/lucky.mp3'

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("http://localhost:5000/api/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src={meMoun}
          alt=""
        />
        <p>I love to play soccer, spend time with my family and fur babies, rescue animals, and travel.
                    I have a huge passion for animals and nature. My dream is to have a sanctuary of rescued animals, and have people with special needs come to enjoy time with them.
                    <strong><i> My goal in life is to make this world a better place, protect the unprotected and speak for those who can’t speak.</i></strong>
                </p>
        <p>
          If I told you writing saved my life would you believe me?
          What writing did is give me a space. Give me a voice.
          The beauty of writing therapy is that you can express yourself at any time, without the immediate need for another person to validate your view. Writing down your thoughts can help you to understand yourself better, see things from a different perspective, and even brainstorm solutions to distressing problems.
          Let's WRITE!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <a href="https://www.facebook.com/dany.burke.9/" className="sidebarIcon fab fa-facebook-square"></a>
          <a href="https://www.instagram.com/danybrkrys/" className="sidebarIcon fab fa-instagram-square"></a>
          <a href="https://www.pinterest.com/danyburke/" className="sidebarIcon fab fa-pinterest-square"></a>
          <a href="https://www.linkedin.com/in/saradburke/" className="sidebarIcon fa-brands fa-linkedin"></a>
        </div>
      </div>
      <audio id="audio" src={path}
        preload="auto" controls muted loop autoplay>
      </audio>
      <audio id="audio" src={sentire}
        preload="auto" controls muted loop autoplay>
      </audio>
      <audio id="audio" src={lucky}
        preload="auto" controls muted loop autoplay>
      </audio>
    </div>
  );
}