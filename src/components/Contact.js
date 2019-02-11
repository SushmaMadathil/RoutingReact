import React from "react";
const Contact = () => {
  /*setTimeout(() => {
    props.history.push("/about");
  });*/
  //redirection will work from the contact page as it is one of the router paths. But it wont work from the navbar page as it is not one of the routes.
  //this is where we need higher order components which wraps another component and gives it extra power(more functions).
  return (
    <div className="container">
      <h1 className="center">This is Contact Page</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt animi
        cupiditate deserunt voluptatibus numquam. Sit quod suscipit magni
        tempora, autem aspernatur. Vel saepe provident quisquam illum velit
        quasi nobis autem?
      </p>
    </div>
  );
};
export default Contact;
