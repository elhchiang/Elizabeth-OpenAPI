const catOrDogContainer = document.getElementById("catOrDogContainer");
const fetchCatBtn = document.getElementById("fetchCat");
const fetchDogBtn = document.getElementById("fetchDog");

// Fetch a cat
fetchCatBtn.addEventListener("click", () => {
  fetch(
    "https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=1&api_key=live_LkfgbmcJd1AM5uw3ba5hgDcTp5serIe3RNIoQXk3jl6Y2po9JL8Hyig7rpr36pyy"
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error("Invalid Request");
      }
      return res.json();
    })
    .then((data) => {
      catOrDogContainer.innerHTML = "";

      const catImgUrl = data[0].url;
      const catImg = document.createElement("img");
      catImg.src = catImgUrl;

      const breedName = data[0].breeds[0].name;
      const catBreedTitle = document.createElement("h2");
      catBreedTitle.innerText = breedName;

      const breedDescription = document.createElement("p");
      breedDescription.innerText = data[0].breeds[0].description;

      catOrDogContainer.appendChild(catImg);
      catOrDogContainer.appendChild(catBreedTitle);
      catOrDogContainer.appendChild(breedDescription);
    })
    .catch((err) => {
      console.warn(err);
    });
});

// Fetch a dog
fetchDogBtn.addEventListener("click", () => {
  fetch(
    "https://api.thedogapi.com/v1/images/search?limit=1&has_breeds=1&api_key=live_YxNTAdm9ukAsytgRM7KPeKX9Bfpvug3AUGtyn82xCN5d9JepumulhXFpZglqsCAr"
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error("Invalid Request");
      }
      return res.json();
    })
    .then((data) => {
      catOrDogContainer.innerHTML = "";

      const dogImgUrl = data[0].url;
      const dogImg = document.createElement("img");
      dogImg.src = dogImgUrl;

      const breedName = data[0].breeds[0].name;
      const dogBreedTitle = document.createElement("h2");
      dogBreedTitle.innerText = breedName;

      const breedTemperament = document.createElement("p");
      breedTemperament.innerText = data[0].breeds[0].temperament;
      
      catOrDogContainer.appendChild(dogImg);
      catOrDogContainer.appendChild(dogBreedTitle);
      catOrDogContainer.appendChild(breedTemperament);
      
    })
    .catch((err) => {
      console.warn(err);
    });
});
