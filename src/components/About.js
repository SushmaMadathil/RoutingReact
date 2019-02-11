import React from "react";
import Rainbow from "../hoc/Rainbow";
const About = () => {
  return (
    <div className="container">
      <h1 className="center">This is About Page</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt animi
        cupiditate deserunt voluptatibus numquam. Sit quod suscipit magni
        tempora, autem aspernatur. Vel saepe provident quisquam illum velit
        quasi nobis autem?
      </p>
    </div>
  );
};
export default Rainbow(About);
