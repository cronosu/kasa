
import './Cards.scss'
import { useEffect, useState } from 'react';

import logements from '../../public/logements.json';
import CardId from "./CardId"


function Card() {
  const [donnees, setDonnees] = useState<any[]>([]);

  useEffect(() => {
    setDonnees(logements);
  }, []);



  return (
    <div>
      {/*console.log(donnees)*/}
      {donnees.length > 0 ? (
        <div className='container-card'
        >
          {donnees.map(logement=> (
            <CardId
              to={logement.id}
              key={logement.id + logement.title}
              alt={logement.title}
              src={logement.cover}
              title={logement.title}
            />
          ))}


        </div>
      ) : (
        <p>Chargement en cours...</p>
      )}
    </div>
  );
}

export default Card
