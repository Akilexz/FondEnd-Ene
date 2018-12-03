import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';


@Component({
  selector: 'app-edit',
  templateUrl: './Edit.component.html',
  styleUrls: ['./Edit.component.css']
})
export class EditComponent implements OnInit {

    constructor(private http: HttpClient) { }

    ngOnInit() {

    }

}
