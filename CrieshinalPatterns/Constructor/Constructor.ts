class TaskBuilder{
    description: string;
    dueDate: string;
    isFinished: boolean;

    setDescription(description) {
        this.description = description;
        return this;
    }

    setDueDate(dueDate) {
        this.dueDate = dueDate;
        return this;
    }

    finished() {
        this.isFinished = true;
    }

    congr(){
        if(this.isFinished === true){
            return 'Congratulations!';
        }else{
            return 'Nice try!';
        }
    }
}

class User extends TaskBuilder{
    constructor(public name: string, public age: number, public phone: number){ super() }
}

let newUser = new User('Some Name', 33, 88005553535);

newUser.setDescription('Some descr').setDueDate('12.31.2021');
console.log(newUser.congr());
newUser.finished();
console.log(newUser.congr());
