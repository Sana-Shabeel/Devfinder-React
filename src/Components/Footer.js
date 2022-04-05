import React, { useContext } from "react";
import ThemeChanger from "./Context/Context";
import { MdLocationOn } from "react-icons/md";
import { BiLink } from "react-icons/bi";
import { BsTwitter, BsBuilding } from "react-icons/bs";

function Footer() {
  const { toggleTheme, queryResult } = useContext(ThemeChanger);

  const grayishColor = { color: toggleTheme.contentColor };
  const iconBlue = { color: toggleTheme.iconsBlue };
  return (
    <div className="footer-container">
      <div>
        <MdLocationOn style={iconBlue} className="icon" />
        <p style={grayishColor}>{queryResult.location ?? "Not Available"}</p>
      </div>
      <div>
        <BsTwitter style={iconBlue} className="icon" />
        <p style={grayishColor}>
          {queryResult.twitter_username ?? "Not Available"}
        </p>
      </div>
      <div>
        <BiLink style={iconBlue} className="icon" />
        <a href={queryResult.blog} style={grayishColor}>
          https://github.blog
        </a>
      </div>
      <div>
        <BsBuilding style={iconBlue} className="icon" />
        <p style={grayishColor}>{queryResult.company ?? "Not Available"}</p>
      </div>
    </div>
  );
}

export default Footer;
