import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-userbyid",
  templateUrl: "./userbyid.component.html",
  styleUrls: ["./userbyid.component.scss"]
})
export class UserbyidComponent implements OnInit {
  [x: string]: any;
  user: any[];
  id: any;
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.get(params.get("id"));
    });
  }

  get(id) {
    this.http
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .subscribe((res: any) => {
        this.user = res;
        console.log("response:", this.user);
      });
  }
}
