import { Component, OnInit } from '@angular/core';
import { db } from '../../environments/environment';
import { Router } from '@angular/router';
import { collection, getDocs } from 'firebase/firestore';

import { Training } from '../Models/training.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'Menu.page.html',
  styleUrls: ['Menu.page.scss'],
})

export class HomePage implements OnInit {

  title = 'DevOps Bootcamp';

  trainingsList : Array<Training>
  //get data from firestire and store it on an Array 
  constructor(private router : Router) {
    getDocs(collection(db, 'trainings'))
    .then((snapshot)=>{
      const Trainings = [];
      snapshot.docs.forEach((doc)=>{
        Trainings.push(doc.data());
      });
      this.trainingsList = Trainings;
    });
  }

  ngOnInit(): void {
  }

  showInfo(training : any) : void {   
    this.router.navigate(['/details', training]);
  }
}
