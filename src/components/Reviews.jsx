import avatarImg1 from "../images/avatar-1.png";
import avatarImg2 from "../images/avatar-2.png";
import instagramImg1 from "../images/instagram_1.jpg";
import instagramImg2 from "../images/instagram_2.jpg";
import instagramImg3 from "../images/instagram_3.jpg";
import instagramImg4 from "../images/instagram_4.jpg";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export default function Reviews() {
  return (
    <div className="reviews" id="about">
      <div className="container">
        <h3>+25K Buyers Love Us</h3>
        <div className="boxes">
          <div className="box">
            <div className="info">
              <img src={avatarImg1} alt="" />
              <div className="text">
                <h4 className="name">Thiago Alcantara</h4>
                <span>@thiago.lfc - 24 Dec, 2022</span>
              </div>
              <AiOutlineTwitter />
            </div>
            <p>
              <a href="#https://twitter.com/PingMystic" target="_blank">
                @ping
              </a>{" "}
              - a store with quality products & alway catch the trend. Much more
              things that i’m expect. Really awesome & satisfied!
            </p>
          </div>
          <div className="box">
            <div className="info">
              <img src={avatarImg2} alt="" />
              <div className="text">
                <h4 className="name">Thiago Alcantara</h4>
                <span>@thiago.lfc - 24 Dec, 2022</span>
              </div>
              <AiOutlineTwitter />
            </div>
            <p>
              <a href="#https://twitter.com/PingMystic" target="_blank">
                @ping
              </a>{" "}
              - a store with quality products & alway catch the trend. Much more
              things that i’m expect. Really awesome & satisfied!
            </p>
          </div>
        </div>
        <div className="social-media">
          <h2 className="title">Follow our instagram</h2>
          <p>
            Our official instagram <a href="">@ping</a> or handtags
            #ping.esports
          </p>
          <div className="images">
            <div className="image">
              <img src={instagramImg1} alt="" />
              <div className="icon">
                <AiOutlineInstagram />
              </div>
            </div>
            <div className="image">
              <img src={instagramImg2} alt="" />
              <div className="icon">
                <AiOutlineInstagram />
              </div>
            </div>
            <div className="image">
              <img src={instagramImg3} alt="" />
              <div className="icon">
                <AiOutlineInstagram />
              </div>
            </div>
            <div className="image">
              <img src={instagramImg4} alt="" />
              <div className="icon">
                <AiOutlineInstagram />
              </div>
            </div>
            <div className="image">
              <img src={instagramImg1} alt="" />
              <div className="icon">
                <AiOutlineInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
