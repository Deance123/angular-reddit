import { Component } from '@angular/core';
import { IArticle } from './article/article.component';

class Article {
  title: string;
  link: string;
  value: number;
  constructor(data: IArticle) {
    this.title = data.title;
    this.link = data.link;
    this.value = 0;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: IArticle[];

  constructor() {
    this.articles = [];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {

    const result = this.doSomething(title.value, link.value);
    this.articles.push(result);
    return false;
  }

  private doSomething(titleValue: string, linkValue: string) {

    return new Article({
      title: titleValue,
      link: linkValue,
      value: 0
    });
  }

}
