import { Link } from "react-router-dom"
import './CardId.scss'

type CardIdComponentProps = {
    to:string;
    alt:string;
    src:string;
    title:string;
};


function CardId(props: CardIdComponentProps) {
    return (
    
        <Link to={props.to} className='cards'>
            <img alt={props.alt} src={props.src} className='card' />
            <h2 className='title'>{props.title}</h2>
        </Link>

    );
}




export default CardId

