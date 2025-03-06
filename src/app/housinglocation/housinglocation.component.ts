import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  imports: [],
  templateUrl: './housinglocation.component.html',
  styleUrl: './housinglocation.component.css',
})
export class HousinglocationComponent {
  @Input() housingLocation!: HousingLocation;
}
