
import './LogementID.scss'
import { useEffect, useState } from 'react';
import logements from '../../public/logements.json';
import { useLocation } from 'react-router-dom';
import fleche from "/src/assets/Vector.png";
import flecheUp from "/src/assets/VectorUp.png";
import Etoiles from  './utils/Etoiles';



function LogementID() {
  const [donnees, setDonnees] = useState(logements);
  const [indexOfLogement, setIndexOfLogement] = useState(0);
  const [rating, setRating] = useState(0);
  let [indexCarouselle, setindexCarouselle] = useState(0);

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


  function previous() {
    setindexCarouselle(indexCarouselle - 1)
    if (indexCarouselle == 0) {
      setindexCarouselle(indexCarouselle = donnees[indexOfLogement].pictures.length - 1)
    }
  }

  function next() {
    setindexCarouselle(indexCarouselle + 1)
    if (indexCarouselle + 1 >= donnees[indexOfLogement].pictures.length) {
      setindexCarouselle(indexCarouselle = 0)
    }
  }
 


  return (
    <>
      <div className="carrouselle">{
        donnees[indexOfLogement].pictures.length > 1 ? <img onClick={previous} className='fleche fleche-gauche' src={fleche} ></img>
          : null
      }
        {
          donnees[indexOfLogement].pictures.length > 1 ? <img onClick={next} className='fleche fleche-droite' src={fleche} ></img>
            : null
        }
        <img className="carouselle-img" src={donnees[indexOfLogement].pictures[indexCarouselle]}></img>
        {
          donnees[indexOfLogement].pictures.length != 1 ? <p className='compteur'>{indexCarouselle + 1}/{donnees[indexOfLogement].pictures.length}</p>
            : null
        }


      </div>
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
        <div className='descrition'>Description
          <img className='fleche-up' src={flecheUp} ></img>
        </div>
        <div className='equipements'>Équipements
          <img className='fleche-up' src={flecheUp} ></img>
        </div>
      </div>
    </>
  );
}

export default LogementID
