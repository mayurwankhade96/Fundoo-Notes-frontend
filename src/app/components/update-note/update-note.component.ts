import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit
{
  updateForm!: FormGroup;
  @Output() msgEvent = new EventEmitter<any>();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private noteService: NotesService)
  {
    console.log(this.data);
  }

  ngOnInit(): void
  {
    this.updateForm = this.formBuilder.group({
      noteId: this.data.noteId,
      title: this.data.title,
      writtenNote: this.data.writtenNote
    })
    console.log(this.data);
  }

  close()
  {
    let reqData = {
      NoteId: this.updateForm.value.noteId,
      Title: this.updateForm.value.title,
      WrittenNote: this.updateForm.value.writtenNote
    }
    console.log(reqData);
    this.noteService.updateNote(reqData).subscribe((response: any) =>
    {
      console.log(response);
      this.msgEvent.emit();
    })
  }

  // trashNote()
  // {
  //   let reqData = {
  //     NoteId: this.updateForm.value.noteId,
  //   }
  //   this.noteService.trashNote(reqData).subscribe((response: any) =>
  //   {
  //     console.log(response);
  //     this.msgEvent.emit();
  //   })
  // }

  // archive()
  // {
  //   let reqData = {
  //     NoteId: this.updateForm.value.noteId,
  //   }
  //   this.noteService.archiveNote(reqData).subscribe((response: any) =>
  //   {
  //     console.log(response);
  //     this.msgEvent.emit();
  //   })
  // }
}
