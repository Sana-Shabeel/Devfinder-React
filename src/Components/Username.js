import React, { useContext } from "react";
import ThemeChanger from "./Context/Context";
function Username() {
  const { queryResult } = useContext(ThemeChanger);
  return (
    <div className="username">
      <h2>{queryResult.name ?? "The Octocat"}</h2>
      <p>{`@${queryResult.login}` ?? "@octocat"}</p>
    </div>
  );
}

export default Username;
