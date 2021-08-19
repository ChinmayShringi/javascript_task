import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private http: HttpClient) {}
  list: any = [];
  ngOnInit(): void {
    this.askForData();
  }
  askForData() {
    return new Promise((resolve, reject) => {
      this.http
        .get('https://jsonplaceholder.typicode.com/todos')
        .subscribe((data: any) => {
          console.log(data);
          this.list = data;
        });
    });
  }
}
