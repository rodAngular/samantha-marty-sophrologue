import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-five',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-five.component.html',
  styleUrls: ['./section-five.component.css']
})
export class SectionFiveComponent implements OnInit {
  slides = [
    {
      image: 'assets/images/femme-enceinte-sophro-relaxation.jpg',
      text: 'N’ayant jamais pratiqué la sophrologie je n’avais pas vraiment d’attente particulière. J’ai beaucoup apprécié ces séances. D’une part parce qu’en sortant je me sentais plus détendu. Et d’autre part, parce que j’ai appris beaucoup pendant ces séances',
      name: 'Valérie'
    },
    {
      image: 'assets/images/femme-santé-mentale.jpg',
      text: 'L’entrée dans les exercices a été de plus en plus simple et rapide. L’apaisement de plus en plus facile à atteindre. Ce moment a été au fur et à mesure de plus en plus attendu avec un réel bien être à la sortie de la séance. Les échanges et les apports théoriques sont un plus pour prendre du recul avecles situations stressantes.',
      name: 'Emmanuelle.'
    },
    {
      image: 'assets/images/femme-méditation-nature-océan.jpg',
      text: 'Samantha a fait preuve d’un grand professionnalisme, de beaucoup de bienveillance et d’écoute dans le cadre des séances proposées. Ce fut une découverte pour moi et elle a été très pédagogue en expliquant clairement la progression proposée à chaque séance (du 1er au 3ème degré) et en proposant des exercices et supports variés.',
      name: 'Chloé'
    }
  ];

  currentIndex = 0;
  private intervalId?: number;

  ngOnInit(): void {
    this.intervalId = window.setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }


  prev() {
    this.currentIndex = (this.currentIndex === 0) ? this.slides.length - 1 : this.currentIndex - 1;
  }

  next() {
    this.currentIndex = (this.currentIndex === this.slides.length - 1) ? 0 : this.currentIndex + 1;
  }
}
