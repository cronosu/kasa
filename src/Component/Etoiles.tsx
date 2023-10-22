import etoileActive from "/src/assets/star-active.png";

function Etoiles({ rating }: { rating: number }) {
  const etoiles = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      etoiles.push(<img className="etoile" src={etoileActive} key={i}></img>);
    } else {
      etoiles.push(<img className="etoile etoileInative" src={etoileActive} key={i}></img>);
    }
  }

  return <div> {etoiles} </div>
}

export default Etoiles