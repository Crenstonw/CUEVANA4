import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/modules/accountDetails.module';
import { AuthenticationService } from 'src/app/service/authentication.interface';

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.css']
})
export class PageUserComponent implements OnInit {

  user!: User
  userAvatar!:string
  constructor(private authService: AuthenticationService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.authService.getUserDetails().subscribe(u => {
      this.user=u;
      if(u.avatar.tmdb.avatar_path == null) {
        this.userAvatar = './assets/img/user.png'
      } else {
        this.userAvatar = 'https://image.tmdb.org/t/p/w500/' + u.avatar.tmdb.avatar_path;
      }     
    })}



}
