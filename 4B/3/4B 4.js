/* En Array av datanomer */
let datanoms = [
	{ name: 'foo', occupation: 'teacher', age: 42 }, 
	{ name: 'Alex', occupation: 'teacher', age: 44 },
	{ name: 'Tom', occupation: 'teacher', age: 44 },
	{ name: 'Andreas', occupation: 'student', age: 33 },
	{ name: 'Kevin', occupation: 'student', age: 17 },
	{ name: 'Linus', occupation: 'student', age: 17},
	{ name: 'Mikael', occupation: 'student', age: 17 },
	{ name: 'Eddie', occupation: 'student', age: 19 },
	{ name: 'Kristoffer', occupation: 'student', age: 17 },
	{ name: 'Rasmus', occupation: 'student', age: 18 },
	{ name: 'Max', occupation: 'student', age: 17 },
	{ name: 'Isak', occupation: 'student', age: 17 }
];
let name = 'Tom',
    city = 'Veikkola'; 
const url = 'http://prakticum.fi'; //konstant, för värden som inte ändras

//datanoms.forEach(element => console.log(element));

function writeName() {
  return 'Tom Lindström';
}

//som värde

const writeName = function(){
  return 'tommen';
}
//som pilfunktion

const writeName = () => {
  return 'Tom Lindstrom';
}
//om funktionen är bara en rad kan klamrar lämnas bort
const writeName = () => 'Tom Lindstr';

console.log(writeName());

//plocka ut lärare med for-loop
let teachers = [];

for(let i=0; i < datanoms.length; i++) {
  if(datanoms[i].occupation === 'teacher') {
    teachers.push(datanoms[i]); //lägger till teachers arrayn
  }
}

//console.log(teachers)
let isTeacher = (datanom) => datanom.occupation === 'teacher';

let teacherFilter = datanoms.filter(isTeacher);

console.log(teacherFilter);

//bara namnen i egen array
let namesFor = [];

for(let i=0; i < datanoms.length; i++) {
  namesFor.push(datanoms[i].name);
}
//console.log(namesFor);

let names = datanoms.filter(isTeacher).map((datanom) => datanom.name );

console.log(names);

//summa av allas ålder
let totAgeFor = 0;

for(let i=0; i < datanoms.length; i++) {
  totAgeFor += datanoms[i].age;
}
//console.log(totAgeFor);

const totAge = datanoms.reduce((sum, datanom) => sum + datanom.age, 0);
console.log(totAge);