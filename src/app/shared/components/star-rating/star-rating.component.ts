import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  @Input() rating: number=0;
  @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>();

  onRatingChange() {
    console.log('La calificación ha cambiado a:', this.rating);
    this.ratingChange.emit(this.rating);
  }

  rate(value: number) {
    this.rating = value;
    this.onRatingChange();
  }
}
