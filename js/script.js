
// question 1

var pets = [
	{
		type: "cat",
		age: 5.5,
	},
	{
		type: "dog",
		age: 3.8,
	},
	{
		type: "parrot",
		age: 4.0,
	},
];

for (var i = 0; i < pets.length; i++) {
    var ageOfPet = pets[i].age;
    
    if (ageOfPet >= 4)

    var typeOfPets = pets[i].type;
    console.log(typeOfPets);

}

// question 2

function numberOfCalories (breakfast) {

    if (breakfast === true || breakfast === false)

    console.log(breakfast);

    else {
        console.log("Please pass a boolean value in")

    }
}

numberOfCalories(320);

// question 3

var button = document.querySelector("button");
var subheading = document.querySelector("h2");

function changeSubheading () {
    subheading.innerHTML = "Updated subheading";
    subheading.style.color = "blue";
}

button.onclick = changeSubheading;