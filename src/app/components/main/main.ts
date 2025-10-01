import { Component, OnInit } from '@angular/core';
import { RecipeService } from './main.service';
import { PwaInstallService } from './PwaInstall.service';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main implements OnInit {

    public data: any;

    constructor(
      public pwaInstall: PwaInstallService,
      public rs: RecipeService
    ) { }

    ngOnInit(): void {
        this.rs.getRecipes().subscribe(resp => {
          this.data = resp.map( (r: any) => {
            return {
              ...r,
              ref: r.ref.substring(0, 3)
            }
          });
        });
    }
}
