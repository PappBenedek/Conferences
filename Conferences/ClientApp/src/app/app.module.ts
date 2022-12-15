import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CreateConferenceComponent } from './pages/conference/create/crete.component';
import { CreateSectionComponent } from './pages/section/create/create.component'
import { ListConferenceComponent } from './pages/conference/list/list.component';
import { ConferenceService } from './service/conferenceService'
import { ReactiveFormsModule } from '@angular/forms';
import { ListSectionsComponent } from './pages/section/list/list.component';
import { ListEventsComponent } from './pages/event/list/list.component';
import { CreateEventsComponent } from './pages/event/create/create.component';
import { UpdateEventsComponent } from './pages/event/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    CreateConferenceComponent,
    CreateSectionComponent,
    ListConferenceComponent,
    ListSectionsComponent,
    ListEventsComponent,
    CreateEventsComponent,
    UpdateEventsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ListConferenceComponent, pathMatch: 'full' },
      { path: 'create-conference', component: CreateConferenceComponent },
      { path: 'list-conference', component: ListConferenceComponent },
      { path: 'list-sections', component: ListSectionsComponent },
      { path: 'create-section', component: CreateSectionComponent },
      { path: 'list-event', component: ListEventsComponent },
      { path: 'create-event', component: CreateEventsComponent },
      { path: 'update-event', component: UpdateEventsComponent }
    ])
  ],
  providers: [ConferenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
