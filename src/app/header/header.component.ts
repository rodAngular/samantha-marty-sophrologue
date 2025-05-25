import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { RouterModule  } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,MenuComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {}
