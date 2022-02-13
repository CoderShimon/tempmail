import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../services/data-transfer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dark:boolean =false;
  bannerHeight:boolean = false ;

  constructor(private dataService: DataTransferService) { }

  ngOnInit(): void {
    if (localStorage.getItem('theme')) {
      this.dark = true;
    }
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
  
  toggleBanner(){
    const banner = document.getElementById('Home_banner') as HTMLElement;
    const Content = document.getElementById('content-tab') as HTMLElement;
    var expanded: boolean = false;
    setTimeout(()=>{

      const childrens = Content.children;
      for (let index = 0; index < childrens.length; index++) {
        console.log(childrens[index].className.includes('active'));
        if(childrens[index].className.includes('active')){
          
          expanded = true;
          banner.style.height = '70%';
          return
        }
        else{
          expanded = false;
          banner.style.height = '90%';
        }
      }
    },0)
    }
 
  }






