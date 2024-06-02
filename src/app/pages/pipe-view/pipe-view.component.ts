import {Component, inject, OnInit} from '@angular/core';
import {RoleViewPipe} from '../../shared/pipes/role-view.pipe';

@Component({
  selector: 'app-pipe-view',
  templateUrl: './pipe-view.component.html',
  styleUrl: './pipe-view.component.scss',
  providers: [RoleViewPipe]
})
export class PipeViewComponent implements OnInit {



  users: any[] = [
    {
      _id: '1',
      name: 'Sazib',
      role: '1'
    },
    {
      _id: '2',
      name: 'Reza',
      role: '2'
    },
    {
      _id: '3',
      name: 'Fahim',
      role: '3'
    }
  ];


  products: any[] = [
    {
      discountType: 1,
      discountAmount: 10,
      salePrice: 500
    },
    {
      discountType: 2,
      discountAmount: 50,
      salePrice: 1000
    }
  ];


  private readonly roleViewPipe = inject(RoleViewPipe);


  ngOnInit() {
    this.test();
  }

  private test() {
    for (const data of this.users) {
      const role = this.roleViewPipe.transform(data.role, 1900);
      console.log(`Name: ${data.name}. Role: ${role}`)
    }

  }

}
