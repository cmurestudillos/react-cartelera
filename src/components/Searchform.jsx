import { useState } from 'react';
import PropTypes from 'prop-types';
import OMDBKey from '../api/apikey';

export const Searchform = (props) => {
    const [inputMovie, setInputMovie] = useState('')
    
      const handleChange = (e) => {
        setInputMovie({ inputMovie: e.target.value })
      }
    
      const handleSubmit = (e) => {
        e.preventDefault()
        const { movie } = inputMovie
    
        fetch(`http://www.omdbapi.com/?apikey=${OMDBKey.apiKey}&s=${movie}`)
          .then(res => res.json())
          .then(results => {
            const { Search = [], totalResults = "0" } = results
            console.log({ Search, totalResults })
            props.onResults(Search)
          })
    }

    return ( 
        <div className="float-right mt-3">
            <form onSubmit={handleSubmit} className="form-inline text-white">
            <div className="md-form my-0">
                <div className="control">
                <input className="form-control mr-sm-2 text-white" onChange={handleChange} type="text" placeholder="Busca la pelicula..." />
                </div>
            </div>
            </form>
        </div>        
     );
}
 
Searchform.propTypes = {
  onResults: PropTypes.func.isRequired,
};

export default Searchform;