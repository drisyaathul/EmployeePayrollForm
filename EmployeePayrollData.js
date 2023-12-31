class EmployeeParollData {
    /*
     * Perform the validation on the setter method 
     * validating the user inputs using regular expression
     */

    get name() {
        return this._name;
    }

    set name( name ) {
        let nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
        if ( nameRegex.test(name) )
            this._name = name;
        else throw "Name is incorrect!";
    }

    get profilePic() {
        return this._profilePic;
    }

    set profilePic ( profilePic ) {
        this._profilePic = profilePic;
    }

    get gender() {
        return this._gender;
    }

    set gender ( gender ) {
        this._gender = gender;
    }

    get department() {
        return this._department;
    }

    set department ( department ) {
        this._department = department;
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
         //check if the input is a valid Date
         const inputDate = new Date(start_date);
         if(isNaN(inputData.getTime())) {
            throw new Error ("Invalid Date Format!")
         }
         //check if the date is not in the future
         const currentDate = new Date();
         if (inputDate > currentDate) {
            throw new Error("Start date cannot be in the Future")
         }
         //check if the Date is within 30days of joining
         const thirtyDaysAgo = new Date();
         thirtyDaysAgo.setDate(currentDate.getDate() - 30);
         if (inputDate < this.joinDate || inputDate > currentDate) {
            throw new Error ("Start date should be within 30 days of Joining.");
         }
         //Set the start date if all validation checks pass
         this.start_date = inputDate;
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.start_date ? "undefined" :
                        this.start_date.toLocaleDateString("en-US", options);
        return 'Name = ' + this.name + ", Gender = " + this.gender + ", ProfilePic = " +this.profilePic
                    + ", Department = " + this.department + ", Salary = " + this.salary +
                        ", StartDate = " + empDate + ", Note = " +this.note;
    }
}