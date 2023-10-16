
import { useEffect, useState } from 'react';
import logements from '../../src/logements.json';
import { useLocation } from 'react-router-dom';
import fleche from "/src/assets/Vector.png";



function Carrouselle() {
  const [donnees, setDonnees] = useState(logements);
  const [indexOfLogement, setIndexOfLogement] = useState(0);
  let [indexCarouselle, setindexCarouselle] = useState(0);

  const location = useLocation();

  useEffect(() => {
    setDonnees(logements);
    const index = donnees.findIndex(logement => ("/" + logement.id === location.pathname))
    setIndexOfLogement(index);

  }, [location.pathname, donnees]);


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
    
    </>
  );
}

export default Carrouselle
