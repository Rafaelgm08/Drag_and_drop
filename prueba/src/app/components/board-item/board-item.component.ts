import { Component, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrl: './board-item.component.css'
})
export class BoardItemComponent implements OnInit {

  @Output() courseDeleted = new EventEmitter<any>();

ngOnInit(): void {
  
}
onCourseDelete() {
  this.courseDeleted.emit();
}

}
