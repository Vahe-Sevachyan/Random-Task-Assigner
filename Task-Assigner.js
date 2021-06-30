btnTwo.addEventListener('click', function(){location.reload()});

btnOne.addEventListener("click", ()=> {
    let chosenAge = document.getElementById("ageSelection").value;
    let chosenGender = document.getElementById("genderSelection").value;
    if (+chosenAge === "" || chosenGender === ""){
            alert("Please choose your age and gender")
            }     
        });

btnOne.addEventListener("click", ()=> {
    let chosenAge = document.getElementById("ageSelection").value;
    let chosenGender = document.getElementById("genderSelection").value;
    if (+chosenAge === 14 && chosenGender === "male"){
            document.getElementById("assignment").innerHTML = `Your task for the day is ${maleChild}!`
            }     
        });

const childMale = [
    "to watch younger siblings",
    "to walk the dog",
    "to feed the pets",
    "to vacuum the rooms",  
    "to mow the lawn" 
];

const maleChild = childMale[Math.floor(Math.random()*childMale.length)];

btnOne.addEventListener("click", ()=> {
    let chosenAge = document.getElementById("ageSelection").value;
    let chosenGender = document.getElementById("genderSelection").value;
    if (+chosenAge === 14 && chosenGender === "female"){
            document.getElementById("assignment").innerHTML = `Your task for the day is ${femaleChild}!`
            }     
        });

const childFemale = [
    "to watch younger siblings",
    "to help make dinner", 
    "to rake the leaves",
    "to wash the dishes",  
    "to sweep the floors" 
];

const femaleChild = childFemale[Math.floor(Math.random()*childFemale.length)];

btnOne.addEventListener("click", ()=> {
    let chosenAge = document.getElementById("ageSelection").value;
    let chosenGender = document.getElementById("genderSelection").value;
    if (+chosenAge === 16 && chosenGender === "female"){
            document.getElementById("assignment").innerHTML = `Your task for the day is ${femaleYoung}!`      
            }   
        });

const YoungerFemale = [
    "to clean the kitchen",
    "to clean the bedrooms",
    "to clean the bathrooms",
    "to wash the dishes",  
    "to do the laundry" 
];

const femaleYoung = YoungerFemale[Math.floor(Math.random()*YoungerFemale.length)];

btnOne.addEventListener("click", ()=> {
    let chosenAge = document.getElementById("ageSelection").value;
    let chosenGender = document.getElementById("genderSelection").value;
    if (+chosenAge === 16 && chosenGender === "male"){
            document.getElementById("assignment").innerHTML = `Your task for the day is ${maleYoung}!`
            }     
        });

const sixTeenOrYoungerMale = [
    "to clean the garage",
    "to take out the garbage cans",
    "to clean the backyard",
    "to wash the car",
    "to iron the clothes"
];

const maleYoung = sixTeenOrYoungerMale[Math.floor(Math.random()*sixTeenOrYoungerMale.length)];

btnOne.addEventListener("click", ()=> {
    let chosenAge = document.getElementById("ageSelection").value;
    let chosenGender = document.getElementById("genderSelection").value;
    if (+chosenAge === 18 && chosenGender === "male"){
        document.getElementById("assignment").innerHTML = `Your task for the day is ${eightTeenMale}!`
        }     
    });

const eightTeenOrOlderMale = [
    "to go grocery shopping",
    "to pick up your sister & brother from school",
    "to wash the car",
    "to clean out the garage",
    "to do the laundry"
];

const eightTeenMale = eightTeenOrOlderMale[Math.floor(Math.random()*eightTeenOrOlderMale.length)];

btnOne.addEventListener("click", ()=> {
    let chosenAge = document.getElementById("ageSelection").value;
    let chosenGender = document.getElementById("genderSelection").value;
    if (+chosenAge === 18 && chosenGender === "female"){
        document.getElementById("assignment").innerHTML = `Your task for the day is ${eightTeenFemale}!`
        }     
    });

const eightTeenOrOlderFemale = [
    "to go grocery shopping",
    "to pick up your sister & brother from school",
    "to do the laundry",
    "to wash the dishes",
    "dust the furniture"
];
const eightTeenFemale = eightTeenOrOlderFemale[Math.floor(Math.random()*eightTeenOrOlderFemale.length)];



       



















       