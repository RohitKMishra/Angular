import { Component, OnInit } from "@angular/core";
import { PersonService } from "../person.service";

@Component({
  selector: "app-person-details",
  templateUrl: "./person-details.component.html",
  styleUrls: ["./person-details.component.css"],
})
export class PersonDetailsComponent implements OnInit {
  public persons = [];
  public errMsg;
  constructor(private _personservice: PersonService) {}

  ngOnInit(): void {
    this._personservice.getPersonDetails().subscribe(
      (data) => (this.persons = data),
      (error) => (this.errMsg = error)
    );

    // this.persons = this._personservice.getPersonDetails();
  }
}
