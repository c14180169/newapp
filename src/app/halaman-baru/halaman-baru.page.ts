import { Component, OnInit } from '@angular/core';
import { GlobalNoteService } from '../global-note.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-halaman-baru',
  templateUrl: './halaman-baru.page.html',
  styleUrls: ['./halaman-baru.page.scss'],
})
export class HalamanBaruPage implements OnInit {

  namaNote : String;
  isiNote : String;
  tglNote : Date;

  constructor(public globalVar : GlobalNoteService, private router : Router) { }

  ngOnInit() {
  }

  addNote(){
    this.globalVar.addData(this.namaNote, this.isiNote, this.tglNote);
    this.router.navigate(['/home']);
  }
}
