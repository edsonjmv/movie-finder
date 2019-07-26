import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'mf-main-view',
  template: `
    <header-bar></header-bar>

    <sidebar-list></sidebar-list>
    
    <items-finder></items-finder>
  `,
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.apiService.getMovies().subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    })
  }
}
