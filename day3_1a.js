// A junior developer structure student name, skills and score in array of arrays which may not easy to read. 
// Destruction the following array name to name, skills array to skills, scores array to scores, JavaScript score to 
// jsScore and React score to reactScore variable.
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

    let name  = student[0],
    skills = student[1],
    scores = student[2],
    jsScore = student[2][2],
    reactScore = student[2][3];
    console.log(name, skills, scores)
    console.log(jsScore, reactScore)

//Write a function called convertArrayToObject which can convert the array to a structured object.
// function convertArrayToObject(students){
//     const array = students.map((item) => {
//         const newobj = {
//             name: item[0], 
//             skills: item[1], 
//             scores : item[2]
//         }
//         return newobj
//     })
//     return array
// }

// const students = [
//     ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
//     ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
// ]

//console.log(convertArrayToObject(students))


// Copy the student object to newStudent without mutating the original object. In the new object add the following ?

// 1. Add Bootstrap with level 8 to the front end skill sets
// 2. Add Express with level 9 to the back end skill sets
// 3. Add SQL with level 8 to the data base skill sets
// 4. Add SQL without level to the data science skill sets

// const student = {
//     name: 'David',
//     age: 25,
//     skills: {
//         frontEnd: [
//             { skill: 'HTML', level: 10 },
//             { skill: 'CSS', level: 8 },
//             { skill: 'JS', level: 8 },
//             { skill: 'React', level: 9 }
//         ],
//         backEnd: [
//             { skill: 'Node',level: 7 },
//             { skill: 'GraphQL', level: 8 },
//         ],
//         dataBase:[
//             { skill: 'MongoDB', level: 7.5 },
//         ],
//         dataScience:['Python', 'R', 'D3.js']
//     }
// }