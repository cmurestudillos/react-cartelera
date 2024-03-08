import { useState } from 'react';
import { Searchform } from '../components/Searchform.jsx';
import { Movieslist } from '../components/Movieslist.jsx';

export const Home = () => {
    const [state, setState] = useState({ usedSearch: false, results: [] });

    const handleResults = (results) => {
        setState({ results, usedSearch: true });
    };

    const renderResults = () => {
        return state.results.length === 0 ? (
            <div className="alert alert-warning" role="alert">
                <i className="fas fa-exclamation-triangle fa-2x"></i><strong> - No se han encontrado resultados. </strong>
            </div>
        ) : (
            <Movieslist movies={state.results} />
        );
    };

    return (
        <div className="container">
            <div className="fixed-top">
                <Searchform onResults={handleResults} />
            </div>
            {state.usedSearch ? renderResults() : (
                <div className="alert alert-primary" role="alert">
                    <i className="fas fa-info fa-2x"></i><strong> - Utiliza el buscador para encontrar tu pelicula. </strong>
                </div>
            )}
        </div>
    );
};

export default Home;
