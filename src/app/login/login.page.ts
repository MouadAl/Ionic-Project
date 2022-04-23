import { addDoc, doc,collection } from 'firebase/firestore';
import { db } from './../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { UserSignin } from '../Models/user.interface';
import { Component, OnInit } from '@angular/core';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from 'src/environments/environment';
import { getDoc } from 'firebase/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  user = new UserSignin();
  data : any;
  course:any;
  price:any;

  constructor(private route : ActivatedRoute, private router : Router) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      this.data = params
     
      console.log(this.data);

    })
  }

   login() {
    
     signInWithEmailAndPassword(auth,this.user.email,this.user.password)
     .then((userCredential)=>{
        addDoc(collection(db,"users",this.user?.email,"courses"),{
          Name:this.data.course,
          price: this.data.price
        })
        this.data = {...this.data,email:this.user.email} 
        this.router.navigate(['/confirm',this.data]);
      })
        
  .catch((error)=>{
    alert("email or password incorrect")

  })
    
  }

  signUp(): void {
    this.router.navigate(['/register', this.data]);
  }
  

  

}
