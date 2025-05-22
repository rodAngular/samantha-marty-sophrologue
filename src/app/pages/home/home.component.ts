import { Component } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { SectionOneComponent} from './sections/section-one/section-one.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, SectionOneComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}

