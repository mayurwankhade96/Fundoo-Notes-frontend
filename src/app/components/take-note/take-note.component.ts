import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { UserService } from 'src/app/services/user.service';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit
{
  noteForm!: FormGroup;
  response: any;
  token: any;
  submitted: boolean = false;
  @Output() messageEvent = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private notesService: NotesService) { }

  ngOnInit(): void
  {
    this.noteForm = this.formBuilder.group({
      title: ['', [Validators.maxLength(200), Validators.minLength(1)]],
      body: ['', [Validators.maxLength(400)]]
    });
  }

  close()
  {
    if (this.noteForm.value.title != "" && this.noteForm.value.body != "")
    {
      this.submitted = true;
      let reqData = {
        Title: this.noteForm.get('title')?.value,
        WrittenNote: this.noteForm.get('body')?.value,
        Color: "white",
        IsArchive: false,
        IsPin: false,
        IsBin: false,
      }

      console.log(reqData);
      this.notesService.createNote(reqData).subscribe(
        response =>
        {
          console.log(response);
          this.messageEvent.emit();
        },
        error => 
        {
          console.log(error)
        });
      // this.messageEvent.emit();
    }
  }
}
