import { Botonvolver } from '../components/Botonvolver.jsx';

export const Notfound = () => {
  return (
    <div className="notFound">
      <h1 className='title'>404!</h1>
      <h2 className='subtitle'>No existe la página</h2>
      <Botonvolver />
    </div>
  );
}

export default Notfound;