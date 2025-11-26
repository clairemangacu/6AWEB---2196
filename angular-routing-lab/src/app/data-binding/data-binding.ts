import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  studentName = " Claire Mangacu ";
  score = 95;

  imageURL = "https://picsum.photos/200";
  isDisabled = true;

  colSpanValue = 3;

  isPassing = true;

  boxColor = "purple";
  boxSize = "150px";

}
