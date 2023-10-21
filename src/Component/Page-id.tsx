import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LogementID from "./LogementID.tsx"
import Error404 from './Error404.tsx';
import logements from '../../src/logements.json';
import Carrouselle from './Carouselle.tsx';

function PageID() {

  const [donnees, setDonnees] = useState<any[]>([]);
  let location = useLocation();
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setDonnees(logements);
  }, []);

  const elementTrouve = donnees.find(e => "/" + e.id === location.pathname);

  useEffect(() => {

    if (!elementTrouve) {
      const timeout = setTimeout(() => {
        setShowError(true);
      }, 150);

      return () => clearTimeout(timeout);
    }
  }, [elementTrouve]);

  return (
    <>
      {elementTrouve ? (<>
        <Carrouselle />
        <LogementID />
      </>
      ) : null}
      {showError && <Error404 />}
    </>
  );
}

export default PageID