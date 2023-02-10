const classroom = {
  hasTeachingAssistant: false,
  classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"],
};

const getStudents = (args) => {
  if (args.hasTeachingAssistant === true) {
    const { hasTeachingAssistant, classList } = classroom;
    const [, , ...students] = classList;
    console.log(students);
  } else {
    const { hasTeachingAssistant, classList } = classroom;
    const [, ...students] = classList;
    console.log(students);
  }
};

getStudents(classroom);
