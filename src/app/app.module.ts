import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatSidenavModule, MatButtonModule, 
  MatToolbarModule, MatIconModule, MatListModule, 
  MatCardModule, MatTableModule,
  MatDialogModule, MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './frontend/accueil/accueil.component';
import { PresentationComponent } from './frontend/presentation/presentation.component';
import { ContactComponent } from './frontend/contact/contact.component';
import { environment } from 'src/environments/environment';
import { PostService } from './shared/post.service';
import { AdminComponent } from './backend/admin/admin.component';
import { NotFoundComponent } from './backend/not-found/not-found.component';
import { NewPostComponent } from './backend/new-post/new-post.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full'},
  { path: 'accueil', component: AccueilComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PresentationComponent,
    ContactComponent,
    AdminComponent,
    NotFoundComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.config)
  ],
  entryComponents: [
    NewPostComponent
  ],
  providers: [ PostService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
