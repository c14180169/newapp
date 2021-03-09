import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalNoteService } from '../global-note.service';
import { Note } from '../note.model';

@Component({
  selector: 'app-halaman-fav',
  templateUrl: './halaman-fav.page.html',
  styleUrls: ['./halaman-fav.page.scss'],
})
export class HalamanFavPage implements OnInit {

  listNotes : Note[];
  constructor(public globalVar : GlobalNoteService, private router : Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.listNotes = this.globalVar.getNotes();
  }

  removeFav(index){
    this.listNotes[index-1].favStatus = false;
  }

}
