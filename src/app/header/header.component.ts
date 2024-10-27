import { Component } from '@angular/core';
import { Drop1Component } from '../dropdown/drop1/drop1.component';
import { Drop2Component } from '../dropdown/drop2/drop2.component';
import { Drop3Component } from '../dropdown/drop3/drop3.component';
import { Drop4Component } from '../dropdown/drop4/drop4.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Drop1Component,Drop2Component,Drop3Component,Drop4Component],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  dropdownState = "hidden";
  menuState = "";
  icon1 = "hidden";
  icon2 = "block";

  toggleDropdown() {
    if (this.dropdownState != "") {
      this.dropdownState = "";
    } else this.dropdownState = "hidden";
  }

  toggleMenu() {
    if (this.menuState != "") {
      this.menuState = "";
    } else this.menuState = "hidden";
    
    if (this.icon1 == "block") {
      this.icon1 = "hidden";
    } else this.icon1 = "block";

    if (this.icon2 == "block") {
      this.icon2 = "hidden";
    } else this.icon2 = "block";
  }
}
