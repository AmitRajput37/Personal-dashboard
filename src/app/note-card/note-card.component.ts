import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../shared/note.model';
import { NoteService } from '../shared/note.service';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

  @Input() note: Note

  @Output() editClick: EventEmitter<void> = new EventEmitter()

  constructor(private route: ActivatedRoute, private noteService: NoteService, private router: Router,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  deleteNote() {
    this.noteService.deleteNote(this.note.id);
    this.router.navigateByUrl("/notes");
    this.notificationService.show('Note Deleted!', 2000)
  }

  onEditClick() {
    this.editClick.emit();
  }


}
