import fond1 from '../assets/fond1.jpg'
import fond2 from '../assets/fond2.jpg'

type CardComponentProps = {
  backgroundImage?: "fond1";
  content?: string;
};

function Banner(props: CardComponentProps) {
  return (
    <div className='container-banner'>
      <div
        style={
          props.backgroundImage
            ? { backgroundImage: `url(${fond1})` }
            : { backgroundImage: `url(${fond2})` }
        } className='banner'>

        {props.content
        ? <p className='banner-content'>{props.content}</p>
            : null}
      </div>
    </div>
  );
}

export default Banner