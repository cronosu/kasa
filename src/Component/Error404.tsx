import './Error404.scss'
import { Link } from 'react-router-dom';

function Error404() {
  return (
    <div className='container-error'>
      <h1 className='titre-error'>404</h1>
      <p className='p-error' >Oups! La page que vous demandez n'existe pas.</p>
      <Link className='titre-error-btn' to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default Error404
