


export class User{
    
    
    constructor(
    
      name:string,
      surname:string,
      pincode:string,
      doj:Date,
      dob:Date,
      email:string,
      password:string,
      phoneno:string,
     
    ){
        this.name=name;
        this.surname=surname;
        this.pincode=pincode;
        this.doj=doj;
        this.dob=dob;
        this.email=email;
        this.password=password;
        this.phoneno=phoneno;
  
       
    }
    name:string;
    surname:string;
    pincode:string;
    doj:Date;
    dob:Date;
    email:string;
    password:string;
    phoneno:string;
      
  }
