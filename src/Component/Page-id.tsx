import './Page-id.scss'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


function PageID() {
  const [donnees, setDonnees] = useState<any[]>([]);
  let location = useLocation();

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

  const elementTrouve = donnees.find(e => "/" + e.id === location.pathname);

  return (
    <div>
      {elementTrouve ? (
    <Link className='nav-link-btn' to="/">OK</Link> 
      ) : (
        <p>pas ok</p>
      )}
    </div>
  );
}

export default PageID
