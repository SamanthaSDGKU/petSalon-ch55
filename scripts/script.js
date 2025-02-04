let petList=[];// empty array
let petSalon={
    name:"The fashion pet",
    address:{
        street:"Palm ave",
        zip:"22100"
    }
}
// getting HMTL elements
let inputName=document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
//constructor 
//name, age, gender, breed,
function Pet(name,age,gender,breed){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
}
function register(){ 
    // get the values from inputs
    // create obj using contructor
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value);
    console.log(newPet);
    //push the obj into the array
    petList.push(newPet);
    clearInputs();
}
function clearInputs(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
}

function init(){
    // create three pets
    let pet1 = new Pet("Scooby",65,"Male","Dane");
    let pet2 = new Pet("Scrappy",55,"Male","Mixed");
    // push the pets into the array
    petList.push(pet1,pet2);
}

window.onload=init;// wait to render the HTML

