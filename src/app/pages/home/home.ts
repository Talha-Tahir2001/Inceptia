import { Component } from '@angular/core';
import { ButtonModule } from "primeng/button";

import { RouterLink } from '@angular/router';
import {  FeaturesCard } from '../../components/ui/features-card/features-card';
import { HowItWorks } from "../../components/how-it-works/how-it-works";
import { Testemonials } from "../../components/testemonials/testemonials";



@Component({
  selector: 'app-home',
  imports: [ButtonModule, FeaturesCard, RouterLink, HowItWorks, Testemonials, ],
  templateUrl: './home.html',
  styles: ``
})
export class Home {

}
