
import './Banner.scss'
import fond2 from '../assets/fond2.png'
import fond1 from '../assets/fond1.png'
type CardComponentProps = {
  backgroundImage?: "fond1";
  content?: string;
};


function Banner(props: CardComponentProps) {
  return (
    <div className='container-banner'
    >
      <div
        style={
          props.backgroundImage
            ? { backgroundImage: `url(${fond1})` }
            : { backgroundImage: `url(${fond2})` }
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