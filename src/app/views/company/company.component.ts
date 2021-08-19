import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  constructor() {}
  tempData = '';
  companyData = '';
  addData(data: string) {
    console.log('asd');
    this.companyData = data;
  }
  ngOnInit() {}
}
