import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css'],
})
export class UsernameComponent implements OnInit {
  userName: string = '';

  clearUsername(event: any) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {}
}
