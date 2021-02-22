import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isOpened: boolean = false

  constructor(private layoutService: LayoutService) { }

  ngOnInit(): void {
    this.layoutService.layout.subscribe({
      next: () => this.isOpened = !this.isOpened
    })
  }

}
