const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
    // put your code here
    const passStudents = allStudentsList
    .filter(name=> !studentsForRetake.includes(name));
    return passStudents
    .map(name =>'Good job, ' + name);
    
};

// examples
const allStudTest1 = ['Den', 'John', 'Ann', 'Mike'];
const retakeStudTest1cf = ['John', 'Mike'];
getMessagesForBestStudents(allStudTest1, today I learned about array methodsretakeStudTest1); // ===> ['Good job, Den', 'Good job, Ann'];

const allStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
const retakeStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
getMessagesForBestStudents(allStudTest2, retakeStudTest2);