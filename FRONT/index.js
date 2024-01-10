console.log("Ola RPG!");

class Character {
	constructor(name, atk, defense, selected, image){
		this.name = name;
		this.atk = atk;
		this.defense = defense;
		this.selected = selected;
		this.image = image;
	}
	
	setName = (name) => {
		this.name = name;
	}
	setAtk = (atk) => {
		this.atk = atk;
	}
	setDefense = (defense) => {
		this.defense = defense;
	}
	setSelected = (selected) => {
		this.selected = selected;
	}
	setImage = (image) => {
		this.image = image;
	}
}

const character = new Character(null, null, null, null);

function factory(){
	const name = document.querySelector("#name").value;
	const atk = document.querySelector("#atk").value;
	const defense = document.querySelector("#defense").value;
	const selected = document.querySelector("#selected").value;
	
	character.setName(name);
	character.setAtk(atk);
	character.setDefense(defense);
	
	const card = document.querySelector("#card");
	card.style.display = "block";
	const divName = document.createElement("div");
	const divAtk = document.createElement("div");
	const divDefense = document.createElement("div");
	const imgElement = document.createElement("img");

	const cName = document.createTextNode(character.name);
	const cAtk = document.createTextNode(character.atk);
	const cDefense = document.createTextNode(character.defense);
	
	divName.appendChild(cName);
	divAtk.appendChild(cAtk);
	divDefense.appendChild(cDefense);

	card.appendChild(divName);
	card.appendChild(divAtk);
	card.appendChild(divDefense);

	
	const reader = new FileReader();

	reader.onload = () => {
		const dataURL = reader.result;
		imgElement.src = dataURL;
		card.insertBefore(imgElement, divName);
	};

	reader.readAsDataURL(character.image.files[0]);
}

function loadfile(file){
	character.setImage(file.target);
}