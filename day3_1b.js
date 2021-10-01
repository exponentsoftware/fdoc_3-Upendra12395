//Write a function called convertArrayToObject which can convert the array to a structured object.
function convertArrayToObject(students){
    const array = students.map((item) => {
        const newobj = {
            name: item[0], 
            skills: item[1], 
            scores : item[2]
        }
        return newobj
    })
    return array
}

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

console.log(convertArrayToObject(students))