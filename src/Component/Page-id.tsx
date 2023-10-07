import './Page-id.scss'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LogementID from "./LogementID.tsx"
import Error404 from './Error404.tsx';

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
      {elementTrouve ? (<>
        <LogementID />
      </>
      ) : (<>
        <Error404 />
      </>
      )}
    </div>
  );
}

export default PageID
