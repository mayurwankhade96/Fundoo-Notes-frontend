import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { NotesService } from 'src/app/services/notes.service';
import { CollaboratorComponent } from '../collaborator/collaborator.component';
import { GetArchiveComponent } from '../get-archive/get-archive.component';
import { GetTrashComponent } from '../get-trash/get-trash.component';
import { NotesComponent } from '../notes/notes.component';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit
{
  @Input() note: any;
  isNotesComponent: boolean = false;
  isArchiveComponent: boolean = false;
  isTrashComponent: boolean = false;
  @Output() onChangeColorEvent = new EventEmitter<any>();

  constructor(private noteService: NotesService,
    private route: ActivatedRoute,
    private dataService: DataService,
    public dialog: MatDialog) { }

  ngOnInit(): void
  {
    let componentName = this.route.snapshot.component;
    if (componentName == NotesComponent)
    {
      this.isNotesComponent = true;
    }
    if (componentName == GetArchiveComponent)
    {
      this.isArchiveComponent = true;
    }
    if (componentName == GetTrashComponent)
    {
      this.isTrashComponent = true;
    }
  }

  trashNote()
  {
    let reqData = {
      NoteId: this.note.noteId,
    }
    this.noteService.trashNote(reqData).subscribe((response: any) =>
    {
      console.log(response);
      this.dataService.sendMessage(response);
    })
  }

  archive()
  {
    let reqData = {
      NoteId: this.note.noteId,
    }
    console.log(reqData);
    this.noteService.archiveNote(reqData).subscribe((response: any) =>
    {
      console.log(response);
      this.dataService.sendMessage(response);
    })
  }

  delete()
  {
    this.noteService.deleteNote(this.note.noteId).subscribe(response =>
    {
      console.log(response);
      this.dataService.sendMessage(response);
    });
  }

  addColor(id: any, color: string)
  {
    console.log(id, color);
    if (id == undefined)
    {
      this.onChangeColorEvent.emit(color);
    }
    else
    {
      let reqData = {
        NoteId: id,
        color: color
      }

      this.noteService.updateColor(reqData).subscribe(response =>
      {
        console.log(response);
        this.dataService.sendMessage(response);
      })
    }
  }

  openDialog()
  {
    let diaLogRef = this.dialog.open(CollaboratorComponent, {
      width: "700px",
      maxWidth: "auto",
    });
    diaLogRef.afterClosed().subscribe()
  }
}
