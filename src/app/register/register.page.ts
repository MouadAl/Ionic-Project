import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { collection, addDoc, setDoc, doc } from "firebase/firestore";

import { db } from 'src/environments/environment';
import { UserSignup } from './../Models/user.interface';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../../environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user = new UserSignup()
  data : any
  password : string
  confirmPassword : string

  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
      this.data = this.route.snapshot.params
  }

  signUp() : void {
    if (this.password === this.confirmPassword) {
      try{
      createUserWithEmailAndPassword(auth, this.user.email, this.password)
      addDoc(collection(db,"users",this.user?.email,"courses"),{
        Name:this.data.course,
        price: this.data.price
      });
      this.data = {...this.data,email:this.user.email} 
      this.router.navigate(['/confirm',this.data]);
    }catch(error){
        console.log(error.message);
        
      }
     
    } else {
      alert("Password and confirm password doesn't match")
    }
    
  }
}
