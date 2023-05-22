


document.addEventListener("DOMContentLoaded", () => {
  const mountainList = document.getElementById("mountainList");

  let heading = document.createElement("h1");
  let image = document.createElement("img");
  let description = document.createElement("p");
  let elevation = document.createElement("p");
  let coordinates = document.createElement("p");
  document.body.appendChild(heading)
  document.body.appendChild(image)
  document.body.appendChild(description)
  document.body.appendChild(elevation)
  document.body.appendChild(coordinates)

  for (let i = 0; i < mountainsArray.length; i++) {
    let mountainInfo = mountainsArray[i];
    const option = document.createElement("option");
    option.innerHTML = mountainInfo.name;
    option.value = mountainInfo.name;

    mountainList.appendChild(option);
  }

  function displayMountain(mountainInfo) {
   
    heading.innerHTML = mountainInfo.name;
    image.src = "images/" + mountainInfo.img;
    description.innerHTML = mountainInfo.desc;
    elevation.innerHTML = mountainInfo.elevation;
    coordinates.innerHTML = mountainInfo.coords;
  }

  mountainList.addEventListener("change", () => {
    let selectedList = mountainList.selectedOptions[0].value;
    for (i = 0; i < mountainsArray.length; i++) {
      let mountainInfo = mountainsArray[i];
      if (selectedList === mountainInfo.name) {
        displayMountain(mountainInfo);
      }
    }
  });
});
