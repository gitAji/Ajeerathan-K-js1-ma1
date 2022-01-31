const cats = [{
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
        age: "" //have add this line
    },
    {
        name: "Blurt",
        age: 21
    }
];

//Question1
console.log("questions #1");
const cat = {  //Create an object called cat.
    complain: console.log("Meow!") // inside the property there is a method
}


//Question2

var heading = document.querySelector("h3"); // heading var is created 
heading.innerHTML = "Updated heading";// heading is updated

//Question3

var heading = document.querySelector("h3");
heading.style.fontSize = "2em";// font size is changed on the heading

//Question4
var heading = document.querySelector("h3");
heading.addClass = "subheading";

//Question5

var paragraphs = document.querySelectorAll("p");//selects all the p elements on a page and assigns them to a variable called paragraphs.
for (let para of paragraphs) {

    para.style.color = "red";//change the colour of each to "red"
}

//Question6
var resultContainer = document.querySelector("div.results");//assign it to a variable called resultsContainer 
paraContent = ' <p>New paragraph</p>';
resultContainer.innerHTML = paraContent;
//Question7
console.log("Question #7");

function listOfCats(list) {
    for (var lists of list)//loop through the list parameter and console log the name property in each object.
        console.log(lists.name)
}
listOfCats(cats);//Call the function and pass in the cats variable

//Question8
console.log("Question #8")


function createCats(cats) {
    var html = ""; //create HTML for each object in the array
    for (var i = 0; i < cats.length; i++) {
      //age undefined, used empty string
        var age = cats[i].age;
        if (age === "") {
            age = "Age undefined";
        }
        console.log(cats[i].name);//cat name
        console.log(age);//cat age

        html += `<div><h5>${cats[i].name}</h5><p>${age}</p></div>`;

    }

    return html;//Return the HTML from the function
}

var catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = createCats(cats);//Call the function and pass in the cats array as the argument



