var imageContainer = document.createElement('div');
const body = document.querySelector('body');

function loadImage(input){
    const file = input.files[0];
    var imageType = /image.*/;
    
    if (file.type.match(imageType)) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
          imageContainer.style.backgroundImage = `url(${e.target.result})`;
          imageContainer.setAttribute("class", "characterImage");
          character.setImage(e.target.result);
          body.appendChild(imageContainer);
        }
        
        reader.readAsDataURL(file);
    } else {
        alert("Essa foto é feia, quero outra!");
    }
}

function loadImageByName(input) {
    const characterImage = localStorage.getItem(input.value);
    imageContainer.style.backgroundImage = `url(${characterImage})`;
    imageContainer.setAttribute("class", "characterImage");
    body.appendChild(imageContainer);
}