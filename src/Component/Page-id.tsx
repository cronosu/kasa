import './Page-id.scss'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LogementID from "./LogementID.tsx"
import Error404 from './Error404.tsx';
import  logements  from '../../public/logements.json';

function PageID() {
  const [donnees, setDonnees] = useState<any[]>([]);
  let location = useLocation();

 
  useEffect(() => {
    setDonnees(logements);
    console.log(donnees);   
  }, []);   
  
  const elementTrouve = donnees.find(e => "/" + e.id === location.pathname);



  return (
    <div> 
      {
        elementTrouve ? (<>
          <LogementID />  </>
        ) : (<>
        <Error404 />
        </>
        )}
    </div>
  );
}

export default PageID