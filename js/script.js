const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");


  const selectRandomImage = function(images){

    let randomIndex =Math.floor(Math.random()*images.length);
    let randomImage = images[randomIndex];
    displayImage(randomImage);

};

const displayImage = function(randomImage){
     
    let author = randomImage.author;
    let imageAddress = randomImage.download_url;
    
    imgDiv.classList.remove("hide");
    authorSpan.innerText = author;
    img.src = imageAddress;
    




};

button.addEventListener("click", function(){

    
    const getImage = async function () {
        const res = await fetch(
            "https://picsum.photos/v2/list?limit=100"
        );
      
        const images = await res.json();
        selectRandomImage(images);
      };
      

      getImage();


});

 
  
  