import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import noimage from '../assets/img/no_image.png';

export const Movie = (props) => {
        const { id, poster, title, year } = props;

        return ( 
                <Link to={`/detail/${id}`}>
                <div>
                    <img alt={title} src={poster === 'N/A' ? noimage : poster} className="card-img-top" ></img>
                    <div className="card-body">
                        <h4 className="card-title"><strong>{title}</strong></h4>
                        <h5 className="card-text"><strong>{year}</strong></h5>
                    </div>        
                </div>
            </Link>
         );
}
 
Movie.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string
};

export default Movie;