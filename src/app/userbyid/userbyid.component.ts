import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userbyid',
  templateUrl: './userbyid.component.html',
  styleUrls: ['./userbyid.component.scss']
})
export class UserbyidComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
        .subscribe(params => {
          console.log(params.get('id'));
          
        })
  }

}
