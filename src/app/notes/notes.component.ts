import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../shared/note.model';
import { NoteService } from '../shared/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes : Note[];

  constructor(private noteService: NoteService, private router: Router) { }

  ngOnInit(): void {
    this.notes = this.noteService.getNotes();
  }

  onEditClick(notes: Note){
    this.router.navigate(['/notes', notes.id])
  } 



}
