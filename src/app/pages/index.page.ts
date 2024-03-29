import {Component} from '@angular/core';
import {injectContent, MarkdownComponent} from "@analogjs/content";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, MarkdownComponent],
  template: `
    <h1>injectContentFiles type is broken</h1>

    <hr/>
    <h1>injectContent works</h1>
    @if (myContent$ | async; as myContent) {
      <analog-markdown [content]="myContent.content"></analog-markdown>
    }
  `,
})
export default class HomeComponent {
  readonly myContent$ = injectContent({
    customFilename: 'one'
  });
}
