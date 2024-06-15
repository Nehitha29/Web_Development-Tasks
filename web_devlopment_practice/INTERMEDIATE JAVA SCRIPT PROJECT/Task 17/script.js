class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set numberOfStudents(numberOfStudents) {
        if (Number.isInteger(numberOfStudents) && numberOfStudents >= 0) {
            this._numberOfStudents = numberOfStudents;
        } else {
            throw new Error("numberOfStudents must be a non-negative integer");
        }
    }


    quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
    }

    static pickSubstituteTeacher(substituteTeachers) {
        const randomIndex = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[randomIndex];
    }

    displayInfo() {
        return `School Name: ${this.name}, Level: ${this.level}, Number of Students: ${this.numberOfStudents}`;
    }
}

class Primary extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }
}

class Middle extends School {
    constructor(name, numberOfStudents) {
        super(name, 'middle', numberOfStudents);
    }
}

class High extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
        return this._sportsTeams;
    }
}



//sample usage

const primarySchool = new Primary("Maple Elementary", 500, "Students must be picked up by a parent or guardian.");
primarySchool.quickFacts();  

console.log(`Pickup Policy: ${primarySchool.pickupPolicy}`);  

const substitutes = ["Mr. Smith", "Ms. Johnson", "Mrs. Brown", "Mr. Lee"];
const substituteTeacher = School.pickSubstituteTeacher(substitutes);
console.log(`Substitute Teacher: ${substituteTeacher}`);

const highSchool = new High("Hilltop High", 1500, ["Football", "Basketball", "Soccer"]);
highSchool.quickFacts(); 
