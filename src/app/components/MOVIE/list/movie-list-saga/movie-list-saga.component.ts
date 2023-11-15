import { Component, Input, OnInit } from '@angular/core';
import { CollectionResponse } from 'src/app/modules/collecion-response.module';
import { CollectionService } from 'src/app/service/collection.service';

@Component({
  selector: 'app-movie-list-saga',
  templateUrl: './movie-list-saga.component.html',
  styleUrls: ['./movie-list-saga.component.css']
})
export class MovieListSagaComponent implements OnInit {
  @Input() collectionId!: string | null
  collection!: CollectionResponse

  constructor(private collectionService: CollectionService) { }

  ngOnInit(): void {
    if (this.collectionId != null)
      this.collectionService.getCollection(this.collectionId.toString()).subscribe(
        resp => {
          this.collection = resp;
          console.log(this.collection.name)
        }
      )

  }

}
