import { Component, Input, OnInit } from '@angular/core';
import { ImagesResponse } from 'src/app/modules/images.module';
import { MovieListService } from 'src/app/service/movie-list.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() id!: string | null
  imagesList!: ImagesResponse;

  constructor(private movieListService: MovieListService) { }

  ngOnInit(): void {
    if (this.id != null)
      this.movieListService.getImageKey(this.id).subscribe(resp => {
        this.imagesList = resp;
      })
  }
  getImg(url: string) {
    return `${environment.Photoheader}/${url}`
  }


}
