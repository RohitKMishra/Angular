import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"],
})
export class TestComponent implements OnInit {
  public name = " ";
  @Input() public parentData;

  // @Input('parentData') public name

  @Output() public childEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  fireEvent() {
    this.childEvent.emit("Message from child");
  }
}
