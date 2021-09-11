import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService
{
  token: any;
  backendUrl = environment.backendUrl;
  constructor(private http: HttpClient) { }

  Post(url: any, data: any, token: any, headers: boolean)
  {
    return this.http.post(this.backendUrl + url, data);
  }

  Get(url: any, data: any, token: any, headers: boolean)
  {
    return this.http.get(this.backendUrl + url);
  }


  Put(url: any, data: any, token: any, headers: boolean)
  {
    return this.http.put(this.backendUrl + url, data);
  }


  TakeNote(url: any, data: any)
  {
    this.token = localStorage.getItem('FundooJwt');
    var headerObject = new HttpHeaders().set("Authorization", "Bearer " + this.token);
    let Options = {
      headers: headerObject,
      'Content-Type': 'application/json'
    }
    return this.http.post(this.backendUrl + url, data, Options);
  }

  getNotes(url: any)
  {
    this.token = localStorage.getItem('FundooJwt');
    var headerObject = new HttpHeaders().set("Authorization", "Bearer " + this.token);
    let Options = {
      headers: headerObject,
      'Content-Type': 'application/json'
    }
    return this.http.get(this.backendUrl + url, Options);
  }

  getArchiveNotes(url: any)
  {
    this.token = localStorage.getItem('FundooJwt');
    var headerObject = new HttpHeaders().set("Authorization", "Bearer " + this.token);
    let Options = {
      headers: headerObject,
      'Content-Type': 'application/json'
    }
    return this.http.get(this.backendUrl + url, Options);
  }

  gettrashNotes(url: any)
  {
    this.token = localStorage.getItem('FundooJwt');
    var headerObject = new HttpHeaders().set("Authorization", "Bearer " + this.token);
    let Options = {
      headers: headerObject,
      'Content-Type': 'application/json'
    }
    return this.http.get(this.backendUrl + url, Options);
  }

  updateNote(id: any)
  {
    console.log(id);
    const data = {
      title: id.Title,
      writtenNote: id.writtenNote
    }
    this.token = localStorage.getItem('FundooJwt');
    var headerObject = new HttpHeaders().set("Authorization", "Bearer " + this.token);
    let Options = {
      headers: headerObject,
      'Content-Type': 'application/json'
    }
    return this.http.put(this.backendUrl + 'Notes/' + id.NoteId + '/update', data, Options);
  }

  trashNote(id: any)
  {
    console.log(id);
    this.token = localStorage.getItem('FundooJwt');
    var headerObject = new HttpHeaders().set("Authorization", "Bearer " + this.token);
    let Options = {
      headers: headerObject,
      'Content-Type': 'application/json'
    }
    return this.http.put(this.backendUrl + 'Notes/' + id.NoteId + '/trash-restore', null, Options);
  }

  deleteNote(id: any)
  {
    console.log(id);
    this.token = localStorage.getItem('FundooJwt');
    var headerObject = new HttpHeaders().set("Authorization", "Bearer " + this.token);
    let Options = {
      headers: headerObject,
      'Content-Type': 'application/json'
    }
    return this.http.delete(this.backendUrl + 'Notes/' + id, Options);
  }

  archiveNote(id: any)
  {
    console.log(id);
    this.token = localStorage.getItem('FundooJwt');
    var headerObject = new HttpHeaders().set("Authorization", "Bearer " + this.token);
    let Options = {
      headers: headerObject,
      'Content-Type': 'application/json'
    }
    return this.http.put(this.backendUrl + 'Notes/' + id.NoteId + '/archive-unarchive', null, Options);
  }

  addColor(data: any)
  {
    const ID = data.noteId;
    const COLOR = data.color;

    this.token = localStorage.getItem('FundooJwt');
    var headerObject = new HttpHeaders().set("Authorization", "Bearer " + this.token);
    let Options = {
      headers: headerObject,
      'Content-Type': 'application/json'
    }

    return this.http.put(this.backendUrl + `Notes/color?NoteId=${ID.NoteId}&color=${COLOR.replace('#', '')}`, data, Options);
  }

  createLabel(data: any)
  {
    this.token = localStorage.getItem('FundooJwt');
    var headerObject = new HttpHeaders().set("Authorization", "Bearer " + this.token);
    let Options = {
      headers: headerObject,
      'Content-Type': 'application/json'
    }
    return this.http.post(this.backendUrl + 'Labels', data, Options);
  }

  getLabels()
  {
    this.token = localStorage.getItem('FundooJwt');
    var headerObject = new HttpHeaders().set("Authorization", "Bearer " + this.token);
    let Options = {
      headers: headerObject,
      'Content-Type': 'application/json'
    }
    return this.http.get(this.backendUrl + 'Labels', Options);
  }

  deleteLabel(id: any)
  {
    console.log(id);
    this.token = localStorage.getItem('FundooJwt');
    var headerObject = new HttpHeaders().set("Authorization", "Bearer " + this.token);
    let Options = {
      headers: headerObject,
      'Content-Type': 'application/json'
    }
    return this.http.delete(this.backendUrl + `Labels?labelId=${id.labelId}`, Options);
  }

  editLabel(id: any)
  {
    console.log(id);
    this.token = localStorage.getItem('FundooJwt');
    var headerObject = new HttpHeaders().set("Authorization", "Bearer " + this.token);
    let Options = {
      headers: headerObject,
      'Content-Type': 'application/json'
    }
    return this.http.put(this.backendUrl + 'Labels/' + id.labelId + '/update', id, Options);
  }

  addCollaborator(data: any)
  {
    this.token = localStorage.getItem('FundooJwt');
    var headerObject = new HttpHeaders().set("Authorization", "Bearer " + this.token);
    let Options = {
      headers: headerObject,
      'Content-Type': 'application/json'
    }
    return this.http.post(this.backendUrl + 'Notes/collaborator', data, Options);
  }
}

