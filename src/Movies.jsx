import movies from './movies.json'
import MovieCard from './MovieCard';
import styles from './Movies.module.css'

export default function Movies() {
  return (
    <ul className={styles.moviesGrid}>
      {
        movies.map((movie)=>
          <MovieCard key={movie.id} movie={movie} />
        )  
      }
    </ul>
  );
}
 