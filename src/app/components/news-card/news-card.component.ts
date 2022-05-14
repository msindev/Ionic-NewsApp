import { Component, Input, OnInit } from '@angular/core';
import { ArticlesEntity } from 'src/app/interfaces/news-response';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent implements OnInit {
  @Input() news: ArticlesEntity;
  constructor() {}

  ngOnInit() {}
}
