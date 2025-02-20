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
let inputService = document.getElementById("txtService");
//constructor 
//name, age, gender, breed,
function Pet(name,age,gender,breed,service){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
}
function register(){ 
    // get the values from inputs
    // create obj using contructor
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value);
    console.log(newPet);
    //push the obj into the array
    if(isValid(newPet)){
        petList.push(newPet);
        displayTable();
        displayPetsInfo();
        clearInputs();
        showAlert("A new pet was added","success");
    }else{
        showAlert("Please, add all  the information","danger");
    }
}

//Validations
function isValid(pet){
    let validation = true;

    //reset the style
    inputName.classList.remove("error");
    inputAge.classList.remove("error");
    document.getElementById("alert-error").classList.add("hide");

    if(pet.name === ""){
        validation = false;
        inputName.classList.add("error");
    }
    if(pet.age === ""){
        validation = false;
        inputAge.classList.add("error");
    }
    return validation;
}


function clearInputs(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    inputService.value="";
}

function deletePet(petId){
    //remove from HTML
    document.getElementById(petId).remove();

    // remove from the array splice()
    petList.splice(petId,1);

    //re-display the table
    displayTable();
    displayPetsInfo();

    //show the notification
    showAlert("The pet was deleted","warning");
}

function showAlert(msg,type){
    let alertContainer = document.getElementById("alertContainer");
    alertContainer.innerHTML=`
        <div id="alert-error" class="alert alert-${type}" role="alert">
            ${msg}
        </div>
    `;

    setTimeout(()=>{
        document.getElementById("alert-error").remove();
    },3000);// 1000 = 1s
}
function getServices(){
    let list = read();// read the services from LS
    let option="";
    for(let i=0;i<list.length;i++){
        let service=list[i];
        option += `<option value="${service.title}">${service.title} - ${service.price}</option>`;
    }
    inputService.innerHTML=option;
}
function init(){
    // create three pets
    let pet1 = new Pet("Scooby",65,"Male","Dane","Grooming");
    let pet2 = new Pet("Scrappy",55,"Male","Mixed","Vaccines");
    // push the pets into the array
    petList.push(pet1,pet2);
    displayTable();
    displayPetsInfo();
    getServices();
    document.getElementById("alert-error").classList.add("hide");
}

window.onload=init;// wait to render the HTML

