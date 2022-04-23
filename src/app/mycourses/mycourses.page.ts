import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { db } from '../../environments/environment';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { course } from '../Models/course.interface';


@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.page.html',
  styleUrls: ['./mycourses.page.scss'],
})
export class MycoursesPage implements OnInit {

    data : any
    userEmail : string
    coursesList : Array<course>
    
  constructor(private route : ActivatedRoute, private router : Router)  {
    

    }
  
    async ngOnInit() {
      //this.confirm = this.route.snapshot.params
      this.data=this.route.snapshot.params;
      this.userEmail = this.data.email;
      
      console.log(this.userEmail);
      const docRef = collection(db,"users",this.userEmail,"courses");
      const data = await getDocs(docRef);
      // console.log(data.docs[0].data());
      const courses = []
      courses.push(data.docs.map((doc) =>{return doc.data()}))
      this.coursesList = courses[0];
       console.log(this.coursesList)

    }
   /*  async getData(){
      const docRef = collection(db,"users",this.userEmail,"courses");
      const data = await getDocs(docRef);
      console.log(data);
  
     }
   */
     Menu() : void {
      this.router.navigate(['/'])
    }

  

  }
