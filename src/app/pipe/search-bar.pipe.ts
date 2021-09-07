import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBar'
})
export class SearchBarPipe implements PipeTransform
{

  transform(value: any = [], wordFromNote: string)
  {
    if (wordFromNote == null)
    {
      return value;
    }
    const allNotes = [];
    for (const note of value)
    {
      if (note.title.includes(wordFromNote) || note.writtenNote.includes(wordFromNote))
      {
        allNotes.push(note);
      }
    }
    return allNotes;
  }
}
