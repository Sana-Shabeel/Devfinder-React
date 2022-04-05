import React, { useContext } from "react";
import ThemeChanger from "./Context/Context";
function Avatar() {
  const { queryResult } = useContext(ThemeChanger);
  const defaultAvatar = "https://avatars.githubusercontent.com/u/583231?v=4";
  return (
    <img src={queryResult.avatar_url ?? defaultAvatar} alt="user avatar" />
  );
}

export default Avatar;
