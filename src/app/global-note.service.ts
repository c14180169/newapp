import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class GlobalNoteService {

  public listNotes : Note[] = [];

  constructor() { }

  public getNotes(){
    return this.listNotes;
  }

  public addData(judulBaru : String, isiBaru : String, tglBaru : Date){
    var temp : Note = {
      idNote : 0,
      judulNote : "",
      isiNote : "",
      tglNote : null,
      favStatus : false
    };

    temp.idNote = (this.listNotes.length + 1);
    temp.judulNote = judulBaru;
    temp.isiNote = isiBaru;
    temp.tglNote = tglBaru;

    this.listNotes.push(temp);
    console.log("Success");
  }
}
