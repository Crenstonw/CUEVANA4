import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerieDetailResponse } from 'src/app/modules/serie-detail-response.module';
import { SerieListService } from 'src/app/service/serie-list.service';

@Component({
  selector: 'app-page-series-item',
  templateUrl: './page-series-item.component.html',
  styleUrls: ['./page-series-item.component.css']
})
export class PageSeriesItemComponent implements OnInit {
  id!: string | null;
  serie!: SerieDetailResponse;

  constructor(private route: ActivatedRoute, private serieListService: SerieListService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }


}
