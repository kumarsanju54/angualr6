import { Component } from '@angular/core';
import { PostsService } from './posts.service';
import { Response } from '@angular/http'
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fruit : string = 'apple';
  one : number = 100;
  two : number = 50
  imgSrc : string = "https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
  fullName :  string = "sanjeev";
  data;
  constructor(private PostsService: PostsService){

  }
  addnumber(){
      return this.one + this.two;
  }

  onSave($event) {
    //console.log(this.PostsService.allPosts);
    this.PostsService.allPosts().subscribe(
      response => { 
        this.data=response.json();
          console.log(this.data);
      }
    );
  setTimeout(() => {
    console.log(this.data);
  }, 300);
      

  }

}
