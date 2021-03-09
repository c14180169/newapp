import { Component } from '@angular/core';
import { GlobalNoteService } from '../global-note.service';
import { Note } from '../note.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listNotes : Note[] = [];

  constructor(public globalVar : GlobalNoteService) {}

  ionViewWillEnter(){
    this.listNotes = this.globalVar.getNotes();
  }

  addFav(index){
    this.listNotes[index-1].favStatus = true;
  }

  removeFav(index){
    this.listNotes[index-1].favStatus = false;
  }

}
