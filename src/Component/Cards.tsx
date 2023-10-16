import { useEffect, useState } from 'react';
import logements from '../../public/logements.json';
import CardComponent from "../Component/CardComponent"
function Cards() {
  const [donnees, setDonnees] = useState<any[]>([]);

  useEffect(() => {
    setDonnees(logements);
  }, []);

  return (
    <div>
      {donnees.length > 0 ? (
        <div className='container-card'
        >
          {donnees.map(logement => (
            <CardComponent
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
export default Cards
