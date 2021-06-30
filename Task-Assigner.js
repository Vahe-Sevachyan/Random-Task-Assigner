btnTwo.addEventListener('click', function(){location.reload()});

const assignment = document.getElementById("assignment");

const childMale = [
    "to watch younger siblings",
    "to walk the dog",
    "to feed the pets",
    "to vacuum the rooms",  
    "to mow the lawn" 
];
const childFemale = [
    "to watch younger siblings",
    "to help make dinner", 
    "to rake the leaves",
    "to wash the dishes",  
    "to sweep the floors" 
];
const YoungerFemale = [
    "to clean the kitchen",
    "to clean the bedrooms",
    "to clean the bathrooms",
    "to wash the dishes",  
    "to do the laundry" 
];
const sixTeenOrYoungerMale = [
    "to clean the garage",
    "to take out the garbage cans",
    "to clean the backyard",
    "to wash the car",
    "to iron the clothes"
];
const eightTeenOrOlderFemale = [
    "to go grocery shopping",
    "to pick up your sister & brother from school",
    "to do the laundry",
    "to wash the dishes",
    "dust the furniture"
];
const eightTeenOrOlderMale = [
    "to go grocery shopping",
    "to pick up your sister & brother from school",
    "to wash the car",
    "to clean out the garage",
    "to do the laundry"
];

const maleChild = childMale[Math.floor(Math.random()*childMale.length)];
const femaleChild = childFemale[Math.floor(Math.random()*childFemale.length)];
const maleYoung = sixTeenOrYoungerMale[Math.floor(Math.random()*sixTeenOrYoungerMale.length)];
const femaleYoung = YoungerFemale[Math.floor(Math.random()*YoungerFemale.length)];
const eightTeenMale = eightTeenOrOlderMale[Math.floor(Math.random()*eightTeenOrOlderMale.length)];
const eightTeenFemale = eightTeenOrOlderFemale[Math.floor(Math.random()*eightTeenOrOlderFemale.length)];

btnOne.addEventListener("click", ()=> {
    let chosenAge = document.getElementById("ageSelection").value;
    let chosenGender = document.getElementById("genderSelection").value;
    if (+chosenAge === "" || chosenGender === ""){
        assignment.innerHTML = `Please choose your age and gender`;
        } else if (+chosenAge === 14 && chosenGender === "male"){
        assignment.innerHTML = `Your task for the day is ${maleChild}!`
        }else if (+chosenAge === 14 && chosenGender === "female"){
        assignment.innerHTML = `Your task for the day is ${femaleChild}!`
        }else if (+chosenAge === 16 && chosenGender === "male"){
        assignment.innerHTML = `Your task for the day is ${maleYoung}!`
        }else if (+chosenAge === 16 && chosenGender === "female"){
        assignment.innerHTML = `Your task for the day is ${femaleYoung}!`      
        }else if (+chosenAge === 18 && chosenGender === "male"){
        assignment.innerHTML = `Your task for the day is ${eightTeenMale}!`
        }else if (+chosenAge === 18 && chosenGender === "female"){
        assignment.innerHTML = `Your task for the day is ${eightTeenFemale}!`
        }  
    });