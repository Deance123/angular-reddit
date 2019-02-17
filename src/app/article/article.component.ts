import { Component, OnInit, HostBinding, Input } from '@angular/core';

export interface IArticle {
  title: string;
  link: string;
  value: number;
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {


  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: IArticle;

  constructor() {
    
  }

  voteUp(): boolean {
    this.article.value += 1
    return false;
  }
  voteDown(): boolean {
    this.article.value -= 1;
    return false;

  }
  domain(): string {
    try {
      const domainAndPath: string = this.article.link.split('//')[1];
      return domainAndPath.split('/')[0];
    } catch (err) {
      return null;
    }

  }

}


