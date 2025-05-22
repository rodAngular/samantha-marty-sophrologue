import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule  } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
  imports: [FormsModule, RouterModule],
})
export class FooterComponent {
  onSubmit(form?: NgForm) {
    if (form && form.valid) {
      // ici tu peux gérer l'envoi (ex: appel service HTTP)
      alert('Message envoyé ! Merci de votre contact.');
      form.reset();
    }
  }
}
