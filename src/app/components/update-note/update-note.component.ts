import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
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

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private noteService: NotesService, private dataService: DataService)
  {
    console.log(this.data);
  }

  ngOnInit(): void
  {
    this.updateForm = this.formBuilder.group({
      title: this.data.title,
      writtenNote: this.data.writtenNote
    })
    console.log(this.data);
  }

  close()
  {
    let reqData = {
      NoteId: this.data.noteId,
      Title: this.updateForm.value.title,
      writtenNote: this.updateForm.value.writtenNote
    }
    console.log(reqData);
    this.noteService.updateNote(reqData).subscribe((response: any) =>
    {
      console.log(response);
      this.dataService.sendMessage(response);
    })
  }
}
