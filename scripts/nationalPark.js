document.addEventListener("DOMContentLoaded",()=>{



const searchBox = document.getElementById("searchBox")
const searchOptions = document.getElementById("searcOptions");
const locationList = document.getElementById("locationList");
const parkList = document.getElementById("parkList");



for (let i = 0; i < locationsArray.length; i++){
    let location = locationsArray[i];
    const option = document.createElement("option");
    option.innerHTML = location;
    option.value = location.toLowerCase();

    locationList.appendChild(option)
}


for(let i =0; i < parkTypesArray.length; i++){
    let park = parkTypesArray[i];
    const option = document.createElement("option");
    option.innerHTML = park;
    option.value = park.toLowerCase();

    parkList.appendChild(option)
}

function contains(needle, haystack){
    const NOT_FOUND = -1
    let doesContain = true

    needle = needle.toLowerCase()
    haystack = haystack.toLowerCase()

    index = haystack.indexOf(needle)

    if (index == NOT_FOUND){
        doesContain = false;
    }
    return doesContain
}

function search(){
const searchTerm = searchBox.value.toLowerCase();

nationalParksArray.forEach(item => {
    const searchFound = contains(searchTerm, item.LocationName)
    if (searchFound){
        searchOptions.innerHTML += item.LocationName
    }

})


}


searchBox.addEventListener("input", search);







})

