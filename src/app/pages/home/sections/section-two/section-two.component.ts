import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.css']
})
export class SectionTwoComponent {
  cards = [
    {
      image: 'assets/images/card1.jpg',
      title: 'Stress et Anxiété',
      text: 'La sophrologie aide à gérer les troubles liés au stress et à l’anxiété. Elle offre des outils concrets pour retrouver calme et sérénité.',
      expanded: false
    },
    {
      image: 'assets/images/card2.jpg',
      title: 'Addictions',
      text: 'Grâce à la sophrologie, il est possible de renforcer la motivation et de développer une meilleure maîtrise de soi pour sortir des comportements addictifs.',
      expanded: false
    },
    {
      image: 'assets/images/card3.jpg',
      title: 'Troubles du Comportement Alimentaire',
      text: 'Un accompagnement sophrologique permet de restaurer l’estime de soi et d’apaiser le rapport au corps et à l’alimentation.',
      expanded: false
    },
    {
      image: 'assets/images/card4.jpg',
      title: 'Confiance en soi',
      text: 'Travailler sur sa respiration et ses ressentis permet de renforcer la confiance en soi, étape par étape.',
      expanded: false
    }
  ];

  toggle(card: any) {
    card.expanded = !card.expanded;
  }
}
