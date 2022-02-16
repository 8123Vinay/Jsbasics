
function student(name,place,age){
    // functionalities of new is
    let x={};
    x.__proto__=name.prototype;
    x.constructor(name,place,age);
    return x;

}


function construct(name,age,place){
    this.name=name;
    this.age=age;
    this.place=place;

}

let student1=student('vinay','haveri',22);

