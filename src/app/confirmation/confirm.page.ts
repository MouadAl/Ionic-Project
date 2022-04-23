import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit {

  confirm : any

  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.confirm = this.route.snapshot.params
    
    console.log(this.confirm) 
  }
  

  Menu() : void {
    this.router.navigate(['/'])
  }
  CoursesList() : void {
    this.router.navigate(['/mycourses',this.confirm])
  }

}
