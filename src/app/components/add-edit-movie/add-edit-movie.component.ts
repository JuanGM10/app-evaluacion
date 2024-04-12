import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MovieModel } from 'src/app/models/movie-model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-add-edit-movie',
  templateUrl: './add-edit-movie.component.html',
  styleUrls: ['./add-edit-movie.component.scss']
})
export class AddEditMovieComponent implements OnInit {
  public breakpoint!: number;
  movieForm!: FormGroup;
  movie!: MovieModel;

  constructor(private formBuilder: FormBuilder, 
    
    public dialogRef: MatDialogRef<AddEditMovieComponent>,
    public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: MovieModel) {
    this.movie = data;
  }

  ngOnInit() {

    this.movieForm = this.formBuilder.group({
      Title: [this.movie.Title, Validators.required],
      Year: [this.movie.Year, Validators.required],
      imdbID: [this.movie.imdbID, Validators.required],
      Type: [this.movie.Type, Validators.required],
      Poster: [this.movie.Poster, Validators.required]
    });
    this.breakpoint = window.innerWidth <= 600 ? 1 : 2;
  }

  onSubmit() {
    debugger;
    if (this.movieForm.invalid) {
      return;
    }
    this.movie = this.movieForm.value;

    this.dialogRef.close({data: this.movie});
  }

  cerrar() {
  
    this.dialogRef.close({data: null});
  }

  public onResize(event: any): void {
    this.breakpoint = event.target.innerWidth <= 600 ? 1 : 2;
  }
}
