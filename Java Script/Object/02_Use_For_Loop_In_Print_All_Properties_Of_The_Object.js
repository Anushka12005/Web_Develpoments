let studentInfor = [{name : "Anushka",age : 20, Marks : 80, Course: "BCs"}
{name : "Anushka",age : 20, Marks : 80, Course: "BCs"},
{name : "Anushka",age : 20, Marks : 80, Course: "BCs"},
{name : "Anushka",age : 20, Marks : 80, Course: "BCs"}
];

for(let i = 0; i<studentInfor.length;i++)
{
    console.log("Student" + (i+1) +":");
    console.log("Name" + StudentInfor[i].name);
    console.log("Age"+StudentInfor[i].age);
    console.log("Course"+StudentInfor[i].course);
    console.log("------------********-----------");
}

     let student = {
        name : "Anushka",
        age : 20,
        Location : "Pune'
    
     };
     for(let key in student)
     {
        console.log(key +":" +Student[key]);

     }