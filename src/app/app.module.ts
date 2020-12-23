import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApiService } from './api.service';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    ProductComponent

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    MatToolbarModule,

    RouterModule.forRoot([ 
      { path: 'home', component: HomeComponent }, 
      { path: 'product', component: ProductComponent },
      { path: 'admin', component: AdminComponent },
      {path:'', redirectTo:'/product',pathMatch:'full'}
    ]),
    BrowserAnimationsModule
      
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
