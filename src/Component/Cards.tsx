import logements from '../../src/logements.json';
import CardComponent from "../Component/CardComponent"
function Cards() {

  return (
    <div>
      {logements.length > 0 ? (
        <div className='container-card'>
          {logements.map(logement => (
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
