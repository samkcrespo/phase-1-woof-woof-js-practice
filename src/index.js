// When the page loads,  use `fetch` to get all of the pup data from your server
document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/pups")
    .then((res) => res.json())
    .then((pups) => displayPups(pups));
});
//const init = () => {

//};

// When you have this information, you'll need to add a `span` with the pup's
//name to the dog bar

function displayPups(pups) {
  pups.forEach((pup) => {
    displayPup(pup);
  });
}

function displayPup(pup) {
  const filter = document.querySelector("#dog-bar");

  const span = document.createElement("span");
  span.innerText = pup.name;
  filter.append(span);

  //When a user clicks on a pup's span in the div#dog-bar, that pup's info (image, /// name, and isGoodDog status) should show up in the div with the id of "dog-info"

  span.addEventListener("click", () => {
    console.log("I was clicked");
    const dogInfo = document.querySelector("#dog-info");
    dogInfo.innerHTML = "";
    const image = document.createElement("img");
    const name = document.createElement("h2");
    const dogBtn = document.createElement("button");
    image.src = pup.image;
    name.innerText = pup.name;
    dogBtn.innerText =
      pup.isGoodDog === true
        ? (dogBtn.innerText = "Good Dog!")
        : (dogBtn.innerText = "Bad Dog!");

    dogInfo.append(image, name, dogBtn);
    //When a user clicks the Good Dog/Bad Dog button, two things should happen:
    //The button's text should change from Good to Bad or Bad to Good
    dogBtn.addEventListener("click", onGoodDogButtonClick);
    console.log("good or bad clicked");
  });
}

function onGoodDogButtonClick(e) {
  let newValue;
  if (e.target.innerText.includes("Good")) {
    e.target.innerText = "Bad Dog";
    newValue = false;
  } else {
    e.target.innerText = "Good Dog";
    newValue = true;
  }
}
