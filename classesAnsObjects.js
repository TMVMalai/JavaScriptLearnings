class student{

    constructor(sid,sname,grade){
        this.sid=sid;
        this.sname=sname;
        this.grade=grade;
    }

    // setDetails(){
    //     this.sid=10;
    //     this.sname="John";
    //     this.grade='A';
    // }

    display(){
        console.log(this.sid,this.sname,this.grade);
    }
}
let stu = new student(10,"John","A");
stu.display();
let stu1 = new student(11,"Ace","B");
stu1.display();
let stu2 = new student(12,"Barry","c");
stu2.display();