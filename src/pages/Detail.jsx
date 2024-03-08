import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Botonvolver } from '../components/Botonvolver.jsx';
import OMDBKey from './../api/apikey';

export const Detail = (props) => {
    const [movie, setMovie] = useState({})

    const fetchMovie = ({ id }) => {
      fetch(`http://www.omdbapi.com/?apikey=${OMDBKey.apiKey}&i=${id}`)
        .then(res => res.json())
        .then(movie => {
          setMovie({ movie })
        })
    }
  
    useEffect(() => {
        const { movieId } = props.params
        fetchMovie({ id: movieId })
    }, [movie])

    const { Title, Poster, Actors, Metascore } = movie;

    return ( 
        <div className="detalle">
        <h1>{Title}</h1>
        <img src={Poster} alt={Title} className="shadow p-3 mb-5 bg-white rounded" />
        <div>
          <p className="badge badge-pill blue-gradient">Puntuacion: {Metascore / 10}</p>
          <p><strong>Actores: </strong>{Actors}</p>
          <Botonvolver />
        </div>
      </div>        
     );
}
 

Detail.propTypes = {
    params: PropTypes.object,
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string
};

export default Detail;