import { Component, signal } from '@angular/core';
import { CardModule } from 'primeng/card';

export type CardData = {
  icon?: string;
  title: string;
  description: string;
  bulletPoints?: string[];
};

@Component({
  selector: 'app-card',
  imports: [CardModule],
  templateUrl: './features-card.html',
  styles: ``,
})
export class FeaturesCard {
  cards = signal<CardData[]>([
    {
      icon: 'pi pi-pencil',
      title: 'Marketing ADs',
      description: 'Generate compelling marketing copy for Google Ads, Instagram, Twitter, and email campaigns in seconds.',  
      bulletPoints: [
        'Google Ads',
        'Facebook Ads',
        'Instagram Ads',
        'LinkedIn Ads',
        'TikTok Ads',
      ],
    },
    {
      title: 'QuickPersona',
      description: 'Create detailed user personas with demographics, goals, pain points, and authentic quotes.',
      bulletPoints: [
        'QuickPersona',
        'Branding',
        'Web Design',
        'SEO',
        'Content Creation',
      ],     
    },
    {
      title: 'MoodBoard',
      description: 'Generate visual inspiration and mood boards to define your brand aesthetic and design direction.',
      bulletPoints: [
        'MoodBoard',
        'Visual Design',
        'User Experience',
        'Prototyping',
        'Collaboration',
      ],     
    },
  ]);
}
