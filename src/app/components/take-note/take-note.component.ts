import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  popup: boolean = false;
  IsArchive: boolean = false;
  IsPin: boolean = false;
  IsBin: boolean = false;
  isNoteCretaed: boolean = false;

  @Output() messageEvent = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder, private notesService: NotesService) { }

  ngOnInit(): void
  {
    this.noteForm = this.formBuilder.group({
      title: ['', [Validators.maxLength(200), Validators.minLength(1)]],
      body: ['', [Validators.maxLength(400)]]
    });
  }

  close()
  {
    if (this.isNoteCretaed == true)
    {
      if (this.noteForm.value.title != "" && this.noteForm.value.body != "")
      {
        let reqData = {
          // Title: this.noteForm.get('title')?.value,
          // WrittenNote: this.noteForm.get('body')?.value,
          Title: this.noteForm.value.title,
          WrittenNote: this.noteForm.value.body,
          Color: "",
          IsArchive: this.IsArchive,
          IsPin: this.IsPin,
          IsBin: this.IsBin,
        }
        this.noteForm.controls['title'].setValue('');
        this.noteForm.controls['body'].setValue('');
        console.log(reqData);
        this.notesService.createNote(reqData).subscribe(
          response =>
          {
            console.log(response);
            this.messageEvent.emit();
            this.popup = !this.popup;
          },
          error => 
          {
            console.log(error)
          });
      }
    }
    else
    {
      this.popup = !this.popup;
    }
  }
}
