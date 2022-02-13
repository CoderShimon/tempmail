import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../../services/data-transfer.service';
import {MDCSlider,} from '@material/slider';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  dark:boolean =false;

  value: number = 43;
  slider: any;
 
  constructor(private dataService: DataTransferService) { }

  ngOnInit(): void {
    
    setTimeout( () => {
      const header = document.getElementById('Header') as HTMLElement;
      header.style.height = '105px';
      header.style.transition = '.4s';
      console.log('hiii')
      this.slider = new MDCSlider(document.querySelector('.mdc-slider') as any);
     },0);


  }

  darkMode(){
    if (this.dark) {
      localStorage.setItem('theme', 'dark')
      this.dataService.darkTheme.next(true);
    } else {
      this.dataService.darkTheme.next(false);
      localStorage.removeItem('theme')
    }
  }


   



}
