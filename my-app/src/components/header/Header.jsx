import "./header.css";
import videoBgb from '../header/videoBgb.mp4'

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">YOUR SAFE SPACE</span>
        <span className="headerTitleLg">THERAPY BLOG</span>
      </div>
      <video className="videoHeader" src={videoBgb} autoPlay loop muted />
      {/* <img
        className="headerImg"
        src="https://tse2.mm.bing.net/th?id=OIP.45wGPN3pPnbK9tjs8aIvzwHaEK&pid=Api&P=0"
        alt=""
      /> */}
    </div>
  );
}