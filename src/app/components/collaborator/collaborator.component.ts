import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit
{

  constructor(private noteService: NotesService) { }

  ngOnInit(): void
  {
  }

  addCollaborator(id: any, collaborator: string)
  {
    let reqData = {
      NoteId: id,
      collaborator: collaborator
    }
    this.noteService.addCollaborator(reqData).subscribe(response =>
    {
      console.log(response);
    })
  }
}
