import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { RatingModule } from 'primeng/rating';
type Testimonial = {
  name: string;
  description: string;
  rating: number;
};

@Component({
  selector: 'app-testemonials',
  standalone: true,
  imports: [CarouselModule, RatingModule, FormsModule],
  templateUrl: './testemonials.html',
  styles:`
  .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
    
    .rating-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4px;
    }
  `,
})
export class Testemonials {
  products = signal<Testimonial[]>([
    {
      name: 'Tyler Durden',
      description:
        'Inceptia is the ultimate time saver for small business owners like me. It has transformed my business!',
      rating: 5,
    },
    {
      name: 'Jane Smith',
      description:
        'With Inceptia, we have finally accomplished things that have been waiting forever to get done.',
      rating: 4,
    },
    {
      name: 'Alice Johnson',
      description:
        'Everyone’s on the same page. Many of our people are not very organized naturally, so Quick Persona is a godsend!',
      rating: 5,
    },
    {
      name: 'Jason Bourne',
      description:
        "I have been using Quick Persona for over a year now and I love it! I can't imagine life without it. It's so easy to use, and the customer service is great.",
      rating: 4,
    },
    {
      name: 'Jamal Washington',
      description:
        'I would recommend Marketing ADs for anyone trying to get the word out about their business. It has saved me so much time!',
      rating: 5,
    },
    {
      name: 'Sarah Connor',
      description:
        'MoodBoard has helped my team and I stay on the same page. Previously, we were all over the board. Using MoodBoard has definitely saved us time and money.',
      rating: 5,
    },
    {
      name: 'Willis Wayne',
      description:
        'I love how easy it is to use, especially MoodBoard. I can create a project in minutes and get started right away.',
      rating: 4,
    },
    {
      name: 'Bruce Jenkins',
      description:
        'With Marketing Ad, we have finally accomplished things that have been waiting forever to get done.',
      rating: 5,
    },
    {
      name: 'David Lynch',
      description:
        'I would recommend Marketing ADs for anyone trying to get the word out about their business. It has saved me so much time!',
      rating: 5,
    }
  ]);

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
}
