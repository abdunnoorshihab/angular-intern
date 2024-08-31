import {Component, inject, OnInit} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MyServiceService} from '../../../services/common/my-service.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent implements OnInit {

  myFavouriteNum: number;


  private readonly myServiceService = inject(MyServiceService);

  ngOnInit() {

    this.myServiceService.refreshWishlist$.subscribe(() => {
      console.log('Re Call-----')
      this.getFavouriteData();
    });

    this.getFavouriteData();
  }

  private getFavouriteData() {
    console.log('getFavouriteData---')
    this.myFavouriteNum = this.myServiceService.myFavouriteNum;
  }g

}
