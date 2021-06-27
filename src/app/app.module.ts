import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { ReservationsComponent } from './reservations/reservations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon'
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

import { MatFormFieldModule } from '@angular/material/form-field'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu'
import { MatTabsModule } from '@angular/material/tabs'
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ParkingsComponent } from './parkings/parkings.component';
import { UsersComponent } from './users/users.component';
import { ParkingModalComponent } from './parking-modal/parking-modal.component';
import { StatsComponent } from './stats/stats.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { CagComponent } from './cag/cag.component'
import { EditParkingComponent } from './edit-parking/edit-parking.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ReservationsComponent,
    ParkingsComponent,
    UsersComponent,
    ParkingModalComponent,
    StatsComponent,
    LineChartComponent,
    PieChartComponent,
    BarChartComponent,
    CagComponent,
    EditParkingComponent
    
  ],
  entryComponents: [ParkingModalComponent, EditParkingComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'dashboard',
       component: DashboardComponent,
       canActivate: [AuthGuard] }

    ]),
    BrowserAnimationsModule,
    MatTabsModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule
  ],
  providers: [AuthService,
  {
    provide: HTTP_INTERCEPTORS, 
    useClass: TokenInterceptorService,
    multi: true
  },AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
