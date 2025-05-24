import { Component } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { SectionOneComponent} from './sections/section-one/section-one.component';
import { SectionTwoComponent } from './sections/section-two/section-two.component';
import { SectionThreeComponent } from './sections/section-three/section-three.component';
import { SectionFourComponent } from './sections/section-four/section-four.component';
import { SectionFiveComponent } from './sections/section-five/section-five.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, SectionOneComponent, SectionTwoComponent, SectionThreeComponent, SectionFourComponent, SectionFiveComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}

