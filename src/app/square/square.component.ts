import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent  {

  @Input()
  value: 'X' | 'O' = "X";

}
