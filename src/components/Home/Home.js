// import React from "react";
// import { Link } from "react-router-dom";
// import "./Home.css";

// const Home = () => {
//   return (
//     <div>
//       <p>Welcome! "Ich hab noch einen Koffer in...Berlin"</p>
//     </div>
//   );
// };

// export default Home;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
// import { CharactersContext } from "../context/charactersContext";
import { AuthContext } from "../context/authContext";

function Home() {
  // const { characters } = useContext(CharactersContext);
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2>"Ich hab noch einen Koffer in...{"{ Berlin }"}"</h2>
      {user && (
        <h3>
          {" "}
          Welcome to your "One Little Suitcase in.."-account, {user.email}!
        </h3>
      )}

      {/* <h4>we have a list of {characters.length} characters</h4> */}
    </div>
  );
}

export default Home;
