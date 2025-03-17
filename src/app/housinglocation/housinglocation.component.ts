import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterLink],
  templateUrl: './housinglocation.component.html',
  styleUrl: './housinglocation.component.css',
})
export class HousinglocationComponent {
  @Input() housingLocation!: HousingLocation;
}
