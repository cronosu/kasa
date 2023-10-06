
import './Card.scss'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Card() {
  const [donnees, setDonnees] = useState<any[]>([]);

  useEffect(() => {

    fetch('/logements.json')
      .then(response => response.json())
      .then(data => {
        setDonnees(data);


      })
      .catch(error => {
        console.error('Erreur lors de la requête :', error);
      });
  }, []);




  return (
    <div>
      {donnees.length > 0 ? (
        <div className='container-card'
        >
          {donnees.map(logement => (
            <Link to={logement.id} className='cards'
              key={logement.id + logement.title}
            >
              <img alt={logement.title} src={logement.cover} className='card' />
              <h2 className='title'>{logement.title}</h2>
            </Link>
          ))}
        </div>
      ) : (
        <p>Chargement en cours...</p>
      )}
    </div>
  );
}

export default Card
