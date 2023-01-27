import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css'],
})
export class UsernameComponent implements OnInit {
  userName = '';

  usernameIsEmpty: boolean = true;

  clearUsername(event: any) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {}
}
