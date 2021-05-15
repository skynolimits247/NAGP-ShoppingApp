import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page/product-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductTileComponent } from './product-tile/product-tile.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { MaterialThemeModule } from '../shared/material-theme/material-theme.module';

@NgModule({
  declarations: [
    HomeComponent,
    ProductPageComponent,
    ProductTileComponent,
    ProductDescriptionComponent,
  ],
  entryComponents: [ProductDescriptionComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
