import PropTypes from 'prop-types';
import { Movie } from './Movie.jsx';

export const Movieslist = (props) => {
    const { movies } = props;
    return ( 
        <div className="card-columns">
        {movies.map(movie => {
            return (
                <div key={movie.imdbID} className='card'>
                    <Movie id={movie.imdbID} title={movie.Title} year={movie.Year} poster={movie.Poster} />
                </div>
            )
            })
        }
        </div>
     );
}
 
Movieslist.propTypes = {
    movies: PropTypes.array
};

export default Movieslist;