// content-card.component.ts
import { Component, OnInit } from '@angular/core';
import ContentList from './helper-files/content-list';
import Content from './helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  contentList: ContentList = new ContentList();

  constructor() {
    // Adding sample content
    this.contentList.addContent({
      id: 1,
      title: 'Keep Your Dog\'s Coat Healthy',
      description: 'Regular grooming helps keep your dog\'s coat healthy and reduces shedding. Use a quality brush appropriate for your dog\'s coat type.',
      creator: 'Parul Saini',
      imgURL: 'https://via.placeholder.com/150',
      type: 'Dog Care',
      tags: ['Grooming', 'Shedding', 'Coat Care']
    });
    this.contentList.addContent({
      id: 2,
      title: 'Provide Fresh Water Daily',
      description: 'Make sure your pet always has access to clean, fresh water. Change the water in their bowl daily to prevent bacteria growth.',
      creator: 'Parul Saini',
      imgURL: 'https://via.placeholder.com/150',
      type: 'General Care',
      tags: ['Hydration', 'Health']
    });
    this.contentList.addContent({
      id: 3,
      title: 'Regular Vet Check-ups',
      description: 'Schedule regular check-ups with your veterinarian to ensure your pet stays healthy. Vaccinations, parasite control, and dental care are important aspects of pet health.',
      creator: 'Parul Saini',
      imgURL: 'https://via.placeholder.com/150',
      type: 'Healthcare',
      tags: ['Vet Visits', 'Preventative Care', 'Pet Health']
    });
  }

  ngOnInit(): void {
  }
}
