import { useEffect, useState } from 'react';
import logements from '../../public/logements.json';
import { useLocation } from 'react-router-dom';
import Etoiles from './Etoiles';
import CardComponent from './Collapse';

function LogementID() {
  const [donnees, setDonnees] = useState(logements);
  const [indexOfLogement, setIndexOfLogement] = useState(0);
  const [rating, setRating] = useState(0);

  const location = useLocation();

  useEffect(() => {
    setDonnees(logements);
    const index = donnees.findIndex(logement => ("/" + logement.id === location.pathname))
    setIndexOfLogement(index);

  }, [location.pathname, donnees]);

  useEffect(() => {
    const NumberRating = Number(donnees[indexOfLogement].rating);
    setRating(NumberRating);
  }, [rating]);

  return (
    <div>
      <div className='container-info'>
        <div>
          <h1 className='logement-title'>{donnees[indexOfLogement].title}</h1>
          <h2 className='logement-location'>{donnees[indexOfLogement].location}</h2>
        </div>
        <div className='container-host-rating'>
          <div className='container-host'>
            <h2 className='host-name'>{donnees[indexOfLogement].host.name}</h2>
            <img className='host-img' src={donnees[indexOfLogement].host.picture}></img>
          </div>
          <div className='rating'>
            <Etoiles rating={rating} />
          </div>
        </div>
      </div>
      <ul className='list-tag'>
        {donnees[indexOfLogement].tags.map((e, index) => (
          <li className='tag' key={index}>{e}</li>
        ))}
      </ul>

      <div className='container-descrition-equipements'>
        <CardComponent
          style={18}
          titre="Description"
          content={donnees[indexOfLogement].description}
        />
        <CardComponent
          style={18}
          titre="Équipements"
          content={
            donnees[indexOfLogement].equipments
              .map((e, index) => (
                <li className='tag' key={index}>{e}</li>
              ))}
        />
      </div>
    </div>
  );
}

export default LogementID
