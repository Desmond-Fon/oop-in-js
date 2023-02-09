const classroom = {
    hasTeachingAssistant: true,
    classList:['Rashida', 'John', 'Roman', 'Lisa', 'Omair', 'Lukas']
};

const getStudents = (classroom) => {
    if (classroom.hasTeachingAssistant === true){
        const { hasTeachingAssistant, classList} = classroom
        const [, , ...students] = classList;
        console.log(students);
    } else{
        const { hasTeachingAssistant, classList} = classroom
        const [ , ...students] = classList;
        console.log(students);
    }
} 

getStudents()

