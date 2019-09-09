import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Routes ,RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GitComponent } from './components/git/git.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './components/main/main.component';
import {FlexLayoutModule} from '@angular/flex-layout';

import { MatSidenavModule, MatToolbarModule, MatCardModule, MatButtonModule, MatInputModule, MatListModule, MatIconModule } from '@angular/material';
import { GitcommandsComponent } from './components/gitcommands/gitcommands.component';

const routes:Routes =[
  { path:'', component: GitComponent, children: [
    {path:'',component:GitcommandsComponent}
  ]}
]

@NgModule({
  declarations: [
    AppComponent,
    GitComponent,
    MainComponent,
    GitcommandsComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,RouterModule.forRoot(routes),FlexLayoutModule,
    FormsModule,ReactiveFormsModule,HttpClientModule,MatSidenavModule,MatToolbarModule,
    MatCardModule,MatButtonModule,MatInputModule,MatListModule,MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
