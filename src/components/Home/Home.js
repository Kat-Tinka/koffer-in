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
import { AuthContext } from "../../context/authContext";
// import { AuthContext } from "../../context/authContext";

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

      <p>
        No worries. No cares. Just float and wait for the wind to blow you
        around. We'll paint one happy little tree right here. Have fun with it.
        This is unplanned it really just happens. We wash our brush with
        odorless thinner. You can create the world you want to see and be a part
        of. You have that power. A beautiful little sunset. It's so important to
        do something every day that will make you happy. I thought today we
        would make a happy little stream that's just running through the woods
        here. You want your tree to have some character. Make it special. The
        only thing worse than yellow snow is green snow. We artists are a
        different breed of people. We're a happy bunch. Mountains are so simple,
        they're hard. Just go back and put one little more happy tree in there.
        Of course he's a happy little stone, cause we don't have any other kind.
        It's amazing what you can do with a little love in your heart. I'm sort
        of a softy, I couldn't shoot Bambi except with a camera. Remember how
        free clouds are. They just lay around in the sky all day long. I like to
        beat the brush. Don't hurry. Take your time and enjoy. If I paint
        something, I don't want to have to explain what it is. That's crazy.
        There are no mistakes. You can fix anything that happens. Let the paint
        work. You gotta think like a tree. You don't want to kill all your dark
        areas they are very important. A tree cannot be straight if it has a
        crooked trunk. Just make little strokes like that. We have no limits to
        our world. We're only limited by our imagination. We don't have to be
        committed. We are just playing here. Learn when to stop. This is a
        fantastic little painting. We don't need any guidelines or formats. All
        we need to do is just let it flow right out of us. Little trees and
        bushes grow however makes them happy. That easy. If what you're doing
        doesn't make you happy - you're doing the wrong thing. Let's put some
        happy little bushes on the other side now. Work that paint.
      </p>

      {/* <h4>we have a list of {characters.length} characters</h4> */}
    </div>
  );
}

export default Home;
