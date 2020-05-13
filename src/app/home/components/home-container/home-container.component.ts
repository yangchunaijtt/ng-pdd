import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { TopMenu } from 'src/app/shared/components';
import { Router } from '@angular/router';
import { HomeService } from '../../services';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeContainerComponent implements OnInit {
  constructor(private router: Router, private service: HomeService) {}

  topMenus$: Observable<TopMenu[]>;

  ngOnInit(): void {
    this.topMenus$ = this.service.getTabs();
  }

  handleTabSelected(topMenu: TopMenu) {
    this.router.navigate(['home', topMenu.link]);
  }
}
