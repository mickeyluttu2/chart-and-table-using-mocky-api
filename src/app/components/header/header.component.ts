import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
  }

  public onChartClicked() {
    this.router.navigate(["./charts/bar-chart"]);
  }

  public onTableClicked() {
    this.router.navigate(["./tables/table"]);
  }

}

