import {Component} from '@angular/core';
import {injectContent, injectContentFiles, MarkdownComponent} from "@analogjs/content";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, MarkdownComponent],
  template: `
    <h1>injectContentFiles type is broken</h1>
    @if (myContentFiles[0]; as myContentFile) {
      <analog-markdown [content]="myContentFile.content"></analog-markdown>
    }
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

  readonly myContentFiles = injectContentFiles((file)=> {
    return file.slug == 'one'
  });
}
