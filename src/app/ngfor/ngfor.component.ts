import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ngfor",
  templateUrl: "./ngfor.component.html",
  styleUrls: ["./ngfor.component.css"],
})
export class NgforComponent implements OnInit {
  public colors = ["red", "blue", "green", "yellow", "orange"];

  constructor() {}

  ngOnInit(): void {}
}
