// Callback function

console.log("line 1")

// getStudent(1)
//     .then(student => {
//         console.log(student)
//         return getCourse(student)
//     })
//     .then(courses => {
//         console.log(courses);
//         return getMarks(courses.courses);
//     })
//     .then(marks => {
//         console.log(marks)
//     })
//     .catch(err => console.log(err))


// Async Await

async function studentdata() {
    try {
        const student = await getStudent(1);
        const courses = await getCourse(student);
        const marks = await getMarks(courses.courses);
        console.log(marks);
    } catch (err) {
        console.log(err)
    }

}
studentdata();


// function showMarks(mark) {
//     console.log(mark);
// }
// function showCorses(courses) {
//     console.log(courses.courses[1])
//     getMarks(courses.courses, showMarks)
// }
// function showStudents(student) {
//     console.log(student.id);
//     console.log(student.name);
//     getCourse(student, showCorses)
// }


console.log("line 3")


function getStudent(id) {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching from Database!")
            resolve({
                id: id,
                name: "Nahid"
            })

        }, 2000);
    });
    return p;

}

function getCourse(student) {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Student Courses Database!")
            resolve({
                id: student.id,
                name: student.name,
                courses: ["JavaScript", "Python"]
            })
            //reject("Error Ocured!")
        }, 2000)
    })
    return p;
}

function getMarks(courses) {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Courses mark!")
            resolve({
                [courses[0]]: 5,
                [courses[1]]: 3
            })
        }, 3000)
    })
    return p;
}

