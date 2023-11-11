"use strict";

const divs = document.querySelectorAll("div");
const btn = document.querySelector("button");

console.log(divs);
// **  EVENT CAPTURING:  When one of the divs is clicked, the browser tries to find that element and starts from the top. Which means the browser gets all elements from the top to the one which the event is fired on. This happens DOWNWARDS

// ** EVENT BUBBLING: When the browser captures the fired element, it returns that element by going UPWARDS. This is why, if the third div is clicked on, and the capture:false it returns the third div firstly, then the second, then the first. If capture:true, the first div comes first, followed by the second, then the last where it is called

// ** EVENT PROPAGATION: This simply means telling the browser to only fire the first element it catches and not go further (backwards or forward)

// ** ONCE: We also have the once optional event, it makes sure to return an element ONLY ONCE, regardless of the number of times it is being clicked or changed

function logTxt(e) {
  console.log(this.classList.value);
  e.stopPropagation();
}

divs.forEach((div) =>
  div.addEventListener("click", logTxt, { capture: false, once: true })
);

btn.addEventListener("click", () => console.log("Click!!"), { once: true });
// The button will now only be clicked once. This can be good for commerce websites and submission forms
