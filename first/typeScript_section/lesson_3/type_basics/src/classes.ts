class Students{
    grade:number;

    constructor(grade:number){
        this.grade = grade
    }
}

const s = new Students(10)
console.log(s)
console.log(s.grade)


/// factory 
interface Studenttss {
    name: string;
    age: number
    greet(): void;
  }
  
  const studentFactory = (name: string, age: number): Studenttss =>{ 
    const greet = ():void => console.log('hello'); 
    return { name, age, greet };
  }
  
  const myStudent:Studenttss = studentFactory('Hana', 16);
  console.log(myStudent)