import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  [x: string]: any;
users: any[];
  constructor(private http: HttpClient) {
    
   }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe( (res: any) => {
      console.log("response:",res);
      this.users = res;
    })
  }

}
