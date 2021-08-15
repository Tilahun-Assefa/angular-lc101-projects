import { Component } from '@angular/core';
import { uptime } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';

  takeOffEnabled: boolean = false;
  leftButtonEnabled: boolean = true;
  rightButtonEnabled: boolean = true;
  upButtonEnabled: boolean = true;
  downButtonEnabled: boolean = true;

  takeOff(rocketImg) {
    let confirmFlight = confirm("Confirm that the shuttle is ready for takeoff.");
    if (confirmFlight) {
      this.message = "Shuttle in flight.";
      this.color = "blue";
      this.width = 0;
      this.height += 10000;
      this.takeOffEnabled = true;
    }
  }

  land(rocketImg) {
    alert("The shuttle is landing. Landing gear engaged.");
    this.message = "The shuttle has landed.";
    this.color = "green";
    this.height = 0;
    this.takeOffEnabled = false;
    rocketImg.style.bottom = "0px";
  }

  abortMission(rocketImg) {
    let confirmAbort = confirm("Confirm that you realy want to abort the mission.");
    if (confirmAbort) {
      this.message = "Mission aborted.";
      this.color = "red";
      this.height = 0;
      this.takeOffEnabled = false;
      rocketImg.style.bottom = "0px";
    }
  }

  moveShuttle(rocketImg, direction, bkg?) {
    if (direction === "right") {
      let movement = parseInt(rocketImg.style.left);
      if (movement < bkg.clientWidth * 0.9) {
        rocketImg.style.left = movement + 10 + "px";
        this.width += 10000;
        this.leftButtonEnabled = true;
      }else{
        this.rightButtonEnabled = false;
      }
    } else if (direction === "left") {
      let movement = parseInt(rocketImg.style.left);
      if (movement > 0) {
        rocketImg.style.left = movement - 10 + "px";
        this.width -= 10000;
        this.rightButtonEnabled = true;
      } else {
        this.leftButtonEnabled = false;
      }
    } else if (direction === "up") {
      let movement = parseInt(rocketImg.style.bottom);
      if (movement < bkg.clientHeight * 0.8) {
        rocketImg.style.bottom = movement + 10 + "px";
        this.height += 10000;
        this.downButtonEnabled = true;
      }else{
        this.upButtonEnabled= false;
      }

    } else {
      let curPos = parseInt(rocketImg.style.bottom);
      if (curPos > 0) {
        rocketImg.style.bottom = curPos - 10 + "px";
        this.height -= 10000;
        this.upButtonEnabled = true;
      }else{
        this.downButtonEnabled = false;
      }
    }
  }
}
