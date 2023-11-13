import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-movie-item',
  templateUrl: './page-movie-item.component.html',
  styleUrls: ['./page-movie-item.component.css']
})
export class PageMovieItemComponent implements OnInit{
  id!:string;
  constructor (private route: ActivatedRoute, private sanitizer: DomSanitizer){}
  
  ngOnInit(): void {
    this.id != this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }

}
