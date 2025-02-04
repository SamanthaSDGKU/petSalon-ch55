// Object constructor

function Student(name,email,age){
    //properties = values
    this.name = name;
    this.email=email;
    this.age = age;
}

// creating the object

// let objName = new Constructor("value1","value2","value3");
let student1 = new Student("Leo","lmiranda@sdgku.edu",80);
let student2 = new Student("Nar","nar@sdgku.edu",30);

console.log(student1);