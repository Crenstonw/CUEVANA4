import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.interface';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-barra-tareas',
  templateUrl: './barra-tareas.component.html',
  styleUrls: ['./barra-tareas.component.css']
})
export class BarraTareasComponent implements OnInit {
  approved: boolean = false;
  userId: number | undefined;
  userName: string | undefined;
  userAvatar: string | undefined;

  constructor(private authService: AuthenticationService, private route: ActivatedRoute) { }

  authenticateToken() {
    this.authService.getAuthToken().subscribe(a => {
      localStorage.setItem('TOKEN', a.request_token);
      window.location.href = `https://www.themoviedb.org/authenticate/${localStorage.getItem('TOKEN')}?${environment.apiKey}&redirect_to=http://localhost:4200/home`;
    });

    // https://www.angularjswiki.com/angular/get-query-parameters-in-angular/
  }

  cerrarSesion() {
    localStorage.removeItem('SESSION_ID')
    localStorage.removeItem('TOKEN')
    localStorage.removeItem('USER_ID')
    window.location.href = 'http://localhost:4200/home';
  }

  getUserInfo() {
    this.authService.getUserDetails().subscribe(u => {
      localStorage.setItem('USER_ID', u.id.toString());
      this.userName = u.username;
      if(u.avatar.tmdb.avatar_path == null) {
        this.userAvatar = './assets/img/user.png'
      } else {
        this.userAvatar = 'https://image.tmdb.org/t/p/w500/' + u.avatar.tmdb.avatar_path;
      }
      console.log(u.avatar.tmdb.avatar_path)
      
    })
  }

  ngOnInit(): void {
    if(localStorage.getItem('SESSION_ID')){
      this.approved = true;
      this.getUserInfo();
    } else {
      this.route.queryParams.subscribe(params => {
        
          if(params['approved']) {
            localStorage.setItem('TOKEN', params['request_token'])
            console.log('El token ha sido recogido con éxito')
            this.authService.createSession(localStorage.getItem('TOKEN')!).subscribe(params => {
              if(params.success) {
                console.log('se ha conseguido el id de sesion')
                localStorage.setItem('SESSION_ID', params.session_id)
                this.approved = true;
                this.getUserInfo();
              } else {
                console.log('no se ha conseguido el id de sesion')
              }
            })
          } else 
            console.log('El token ha sido rechazado')
        
        })
     }  } 
    }  
  
