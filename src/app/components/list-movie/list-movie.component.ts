import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MovieModel } from 'src/app/models/movie-model';
import { MovieService } from 'src/app/services/movie.service';
import { AddEditMovieComponent } from '../add-edit-movie/add-edit-movie.component';
import { MatTableDataSource } from '@angular/material/table';
import { DeleteMovieComponent } from '../delete-movie/delete-movie.component';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss']
})
export class ListMovieComponent implements OnInit {

  movies: MovieModel[] = [];
  dataSource!: any;
  constructor(private route: ActivatedRoute, private movieService: MovieService, public dialog: MatDialog) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe(movie => {
      this.movies = movie.Search;
      this.dataSource = this.dataSource = new MatTableDataSource<MovieModel>(this.movies);
    });

  }

  editar(model: MovieModel) {
    debugger;
    const index = this.movies.indexOf(model);
    const dialogRef = this.dialog.open(AddEditMovieComponent, {
      width: '640px', disableClose: true, data: model
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.data != null) {
        this.movies[index] = result.data;
        this.dataSource = this.dataSource = new MatTableDataSource<MovieModel>(this.movies);
      }
    });

  }

  agregar() {
    const dialogRef = this.dialog.open(AddEditMovieComponent, {
      width: '640px', disableClose: true, data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.data != null) {
        this.movies.push(result.data);
        this.dataSource = this.dataSource = new MatTableDataSource<MovieModel>(this.movies);
      }

    });
  }

  eliminar(model: MovieModel) {
    const index = this.movies.indexOf(model);
    const dialogRef = this.dialog.open(DeleteMovieComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        this.movies.splice(index, 1);
        this.dataSource = this.dataSource = new MatTableDataSource<MovieModel>(this.movies);
      }
    });

  }
}
