import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisastersComponent } from './disasters/disasters.component';
import {Route, RouterModule, Routes} from '@angular/router';
import { DisasterDetailsComponent } from './disaster-details/disaster-details.component';
import { FormsModule } from '@angular/forms';
import {DisasterService} from './disaster.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import { MessagesComponent } from './messages/messages.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule, MatSortModule } from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import { DisasterSearchComponent } from './disaster-search/disaster-search.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'disasters', component: DisastersComponent},
  { path: 'detail/:id', component: DisasterDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DisastersComponent,
    DisasterDetailsComponent,
    MessagesComponent,
    DisasterSearchComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(
      appRoutes,
    ), FormsModule, BrowserAnimationsModule, MatButtonModule, MatPaginatorModule, MatTableModule, MatCheckboxModule, MatListModule, MatCardModule, MatFormFieldModule, MatInputModule, HttpClientModule, MatIconModule,
    HttpClientModule, MatGridListModule, HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}), MatSortModule
  ],
  providers: [DisasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
