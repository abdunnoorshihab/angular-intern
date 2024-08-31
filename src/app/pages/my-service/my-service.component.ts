import {Component, inject} from '@angular/core';
import {MyServiceService} from '../../services/common/my-service.service';

@Component({
  selector: 'app-my-service',
  templateUrl: './my-service.component.html',
  styleUrl: './my-service.component.scss'
})
export class MyServiceComponent {

  result: number = null;

  private readonly myServiceService = inject(MyServiceService);

  // constructor(
  //   private readonly myServiceService: MyServiceService
  // ) {
  // }


  onGenerate() {
    this.result =  this.myServiceService.getRandomInt(100, 10000);
  }

  onAddFavourite() {
    this.myServiceService.setMyFavouriteNum();
    this.myServiceService.needRefreshWishlist$();

    console.log(this.myServiceService.myFavouriteNum)
  }
}
