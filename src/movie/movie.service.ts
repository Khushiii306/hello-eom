import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';




@Injectable()
export class MovieService {
  private movies: Movie[] = [];
  private idm = 1;

//push data

  create(createMovieDto: CreateMovieDto) {
    let movie = {
      id: this.idm++,
      ...createMovieDto
    };
    this.movies.push(movie);
    return movie;
  }


//get data

  findAll(): Movie[] {
    return this.movies;
  }


 //update data 

  findOne(id: number) {
    return this.movies.find((movies) => movies.id === id)
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {

    let objIndex = this.movies.findIndex((obj => obj.id == id))
    console.log("Before update: ", objIndex)
    if (objIndex == -1)
      return "Movie not found";
    //Log object to Console.
    console.log("Before update: ", objIndex[objIndex])

    //Update object's name property.
    this.movies[objIndex].name = updateMovieDto.name;
    this.movies[objIndex].title = updateMovieDto.title;
    this.movies[objIndex].heading = updateMovieDto.heading;

    return this.movies[objIndex];
  }




//delete data
    remove(id: number) {
      const deldata = this.movies.find((del) => del.id === id);
  
      if (!deldata) {
        return "Movie not found";
      } else {
        this.movies.splice(
        this.movies.findIndex((a) => a.id === id),1,);
      }
    }

  }
