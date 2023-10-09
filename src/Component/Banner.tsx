
import './Banner.scss'
import fond from '../assets/fond2.png'
type CardComponentProps = {
  backgroundImage?: string;
  content?: string;
};


function Banner(props: CardComponentProps) {
  return (
    <div className='container-banner'
    >
      <div
        style={
          props.backgroundImage
            ? { backgroundImage: `url(${props.backgroundImage})` }
            : { backgroundImage: `url(${fond})` }
        } className='banner'>

        {props.content
        ? <p className='banner-content'>{props.content}</p>
            : <p className='banner-content'>{props.content}</p>
 }
      </div>
    </div>
  );
}

export default Banner