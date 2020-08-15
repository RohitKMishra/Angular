import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FrontpageComponent } from "./components/frontpage/frontpage.component";
import { TestComponent } from "./test/test.component";
import { NgswitchComponent } from "./ngswitch/ngswitch.component";
import { EventbindComponent } from "./eventbind/eventbind.component";
import { NgforComponent } from "./ngfor/ngfor.component";
import { PipesComponent } from "./pipes/pipes.component";
import { PersonService } from "./person.service";
import { PersonComponent } from "./person/person.component";
import { PersonDetailsComponent } from "./person-details/person-details.component";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    TestComponent,
    NgswitchComponent,
    EventbindComponent,
    NgforComponent,
    PipesComponent,
    PersonComponent,
    PersonDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [PersonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
