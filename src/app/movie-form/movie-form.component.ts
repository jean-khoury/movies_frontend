import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../service/movie.service';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent {
  movie: Movie;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private movieService: MovieService) {
    this.movie = new Movie();
  }

  onSubmit() {
    this.movieService.save(this.movie).subscribe(result => this.gotoMovieList());
  }

  gotoMovieList() {
    this.router.navigate(['/movies']);
  }

}
