let employee = {
    empName :"Scott",
    empid :1023,
    job:"Engineer",
    baseSal :500000,
    bonus: function(){
        return((this.baseSal*10)/100);
    }

}

console.log(employee["empName"]);
console.log(employee.bonus());