import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/modules/movie-list.module';
import { PerosnalListsService } from 'src/app/service/perosnal-lists.service';

@Component({
  selector: 'app-user-list-favoritemovie',
  templateUrl: './user-list-favoritemovie.component.html',
  styleUrls: ['./user-list-favoritemovie.component.css']
})
export class UserListFavoritemovieComponent implements OnInit{

  movies!: Movie[]

  constructor (private personalListService: PerosnalListsService){}

  ngOnInit(): void {
    var id = localStorage.getItem('USER_ID');
    if(id!=null)
    this.personalListService.getFavoriteMovies(id).subscribe(resp=>{
      this.movies=resp.results;
      console.log('works')
    })
  }

}
