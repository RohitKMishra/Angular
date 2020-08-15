import { Component, OnInit } from "@angular/core";
import { PersonService } from "../person.service";

@Component({
  selector: "app-person",
  templateUrl: "./person.component.html",
  styleUrls: ["./person.component.css"],
})
export class PersonComponent implements OnInit {
  public persons = [];
  constructor(private _personService: PersonService) {}

  ngOnInit(): void {
    this._personService
      .getPersonDetails()
      .subscribe((data) => (this.persons = data));

    // this.persons = this._personService.getPersondetails();
  }
}
