import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[];


  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.findAll().subscribe(data => {
      this.movies = data;
    });
  }

}
