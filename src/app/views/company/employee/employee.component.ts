import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() {}
  childData: any;
  ngOnInit(): void {}
  addData(value: string) {
    this.newItemEvent.emit(value);
  }
}
