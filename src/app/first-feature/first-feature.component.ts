import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-first-feature',
  templateUrl: './first-feature.component.html',
  styleUrls: ['./first-feature.component.css']
})
export class FirstFeatureComponent implements OnInit, DoCheck, OnDestroy {
  page = {
          title: 'My first feature component',
          description: 'A description'
         } ;
        oldTitle =  '';

  constructor() { }

  ngOnInit() {
    console.log('First feature component is initialised.');

    if ( this.oldTitle !== this.page.title ) {
      console.log('First feature title was changed.');
      this.oldTitle = this.page.title;
    }
  }

  ngDoCheck() {
    console.log('First Feature component ngDoCheck called.');
  }

  ngOnDestroy(){
    console.log('First feature component is destroyed.');
  }

}
