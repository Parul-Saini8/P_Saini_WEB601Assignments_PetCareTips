// content-card.component.ts
import { Component, Input } from '@angular/core';
import Content from './helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent {
  @Input() content: Content;

  constructor() {}

  displayContentInfo(): void {
    console.log(`Content ID: ${this.content.id}, Title: ${this.content.title}`);
  }
}
