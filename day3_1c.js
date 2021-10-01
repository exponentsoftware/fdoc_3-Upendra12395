// Copy the student object to newStudent without mutating the original object. In the new object add the following ?

// 1. Add Bootstrap with level 8 to the front end skill sets
// 2. Add Express with level 9 to the back end skill sets
// 3. Add SQL with level 8 to the data base skill sets
// 4. Add SQL without level to the data science skill sets

const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
    }
}

let newStudent = JSON.parse(JSON.stringify(student));

newStudent.skills.frontEnd.push({skill : 'Bootstrap', level : 8})
newStudent.skills.backEnd.push({skill : 'Express', level : 9})
newStudent.skills.dataBase.push({skill:'SQL', level: 8})
newStudent.skills.dataScience.push('SQL')
console.log(newStudent.skills)
console.log(student.skills)

// // a. Find the length of student object keys
let lengthOfObject = Object.keys(newStudent).length;
 console.log(" Length of values of Student object " +lengthOfObject)

// b. Find the length of the student object values
console.log("Length of values of Student object " +Object.values(newStudent).length)

// c. Find the length of skills object key
console.log('Length of key of skills object  ' +Object.keys(newStudent.skills).length)

// d. check if the student object has graphicDesign property
for (let prop in student) {                          
    if(prop==="graphicDesign")
    {
        console.log("It has graphicDesign proprties")
    }
}


// e. Iterate the keys of the student object
for(let key in newStudent){
    console.log(key)
}