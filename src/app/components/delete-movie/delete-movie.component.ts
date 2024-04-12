import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {

  blEliminar: boolean = false;
  constructor(public dialogRef: MatDialogRef<DeleteMovieComponent>) { }

  ngOnInit() {
  }

}
