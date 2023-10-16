import { Link } from "react-router-dom"
type CardComponentProps = {
    to:string;
    alt:string;
    src:string;
    title:string;
  
};
function CardComponent(props: CardComponentProps) {
    return (
        <Link to={props.to} className='cards'>
            <img alt={props.alt} src={props.src} className='card' />
            <h2 className='title'>{props.title}</h2>
        </Link>

    );
}
export default CardComponent

