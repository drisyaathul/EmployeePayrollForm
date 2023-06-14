class EmployeeParollData {
    /*
     * Perform the validation on the setter method 
     * validating the user inputs using regular expression
     */

    get name() {
        return this.name;
    }
    set name (name) {
        let name = RegExp("^[A-Z]{1}[a-zA-z\\s]{2,}$");
        if (name.test(name))
        this.name = name;
        else throw "Name is Incorrect";
    }

    get profilePic() {
        return this.profilePic;
    }
    set profilePic (profilePic) {
        this.profilePic = profilePic;
    }

    get gender() {
        return this.gender;
    }
    set gender (gender) {
        this.gender = gender;
    }

    get department() {
        return this.department;
    }
    set department(department) {
        this.department = department;
    }

    get salary() {
        return this._salary;
    }
    set salary ( salary ) {
        this._salary = salary;
    }

    get note() {
        return this._note;
    }
    set note ( note ) {
        this._note = note;
    }

    get start_date() {
        return this._start_date;
    }
    set start_date ( start_date ) {
        this._start_date = start_date;
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.start_date ? "undefined" : this.start_date.toLocalDataString("en-US", options);
        return 'Name = ' + this.name + ", Gender = " + this.gender + ", ProfilePic = " +this.profilePic
        + ", Department = " + this.department + ", Salary = " + this.salary +
            ", StartDate = " + empDate + ", Note = " +this.note;
    
    }
}