import { Component, OnInit } from '@angular/core';
import { DataTransferService } from './services/data-transfer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tempmail';
  darkTheme = false;
  constructor (private dataService: DataTransferService) {}
  ngOnInit(): void {
    if (localStorage.getItem('theme')) {
      this.dataService.darkTheme.next(true);
    }
    this.dataService.toggleDarkTheme().subscribe((toggle) => {
      this.darkTheme = toggle;
    })
  }
}
