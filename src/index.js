import React from "react";
import ReactDOM from "react-dom";
/*Here we have created a function with a parameter that will help to access the react properties of the tag. It helps in 
using the input as an object whose value can be accessed. This will be useful in reducing repetitive code*/
function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.source} alt="" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}
ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    {/* Here as you can see, we dont need to add each person separately as it looks cluttered, what we can do is create a function i.e an element 
    that will create a card and similar to passing inputs we can pass the details in the card itself. Also note that since this is a 
    custom component, we cannot use regular html tags like className etc, all this has to be done in the function itself.*/}
    <Card
      name="Beyonce"
      source="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />

    <h2>Jack Bauer</h2>
    <img
      src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      alt="avatar_img"
    />
    <p>+987 654 321</p>
    <p>jack@nowhere.com</p>

    <h2>Chuck Norris</h2>
    <img
      src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      alt="avatar_img"
    />
    <p>+918 372 574</p>
    <p>gmail@chucknorris.com</p>
  </div>,
  document.getElementById("root")
);
