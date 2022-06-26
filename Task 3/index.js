// Write a “person” class to hold all the details.
class Person {
    constructor(name,age,dob,gender,education,profession,salary,mobileNo,email,address){
        this.name = name;
        this.age = age;
        this.dob = dob;
        this.gender = gender;
        this.education = education;
        this.profession = profession;
        this.salary = salary;
        this.mobileNo = mobileNo;
        this.email = email;
        this.address = address;
    }
    setDetails(nam,a,bd,gen,edu,pro,sal,mob,mail,add)
    {
        this.name = nam;
        this.age = a;
        this.dob = bd;
        this.gender = gen;
        this.education = edu;
        this.profession = pro;
        this.salary = sal;
        this.mobileNo = mob;
        this.email = mail;
        this.address = add;
    }
    displayDeatils()
    {
        console.log("Name       : ",this.name);
        console.log("Age        : ",this.age);
        console.log("Birth Date : ",this.dob);
        console.log("Gender     : ",this.gender);
        console.log("Education  : ",this.education);
        console.log("Profession : ",this.profession);
        console.log("Salary     : ",this.salary);
        console.log("Mobile     : ",this.mobileNo);
        console.log("Email      : ",this.email);
        console.log("Address    : ",this.address);
    }
};
let p = new Person();
p.setDetails("Agnes Lily",19,"27-07-2002","Female","B.E","Software Developer","12LPA",9988776655,"agneslily2772@gmail.com","Tondiarpet,Chennai");
p.displayDeatils();