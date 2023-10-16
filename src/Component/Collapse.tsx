import { useState, useRef } from 'react';
import flecheUp from "/src/assets/VectorUp.png";

type CardComponentProps = {
  titre?: string;
  content?: string | JSX.Element[];
  style?: number
};

function CardComponent(props: CardComponentProps) {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };

  const contentRef = useRef<HTMLParagraphElement | null>(null);




  return (

    <div className='contentainer-card-apropos'>

      <div  
          style={{ fontSize: props.style + "px" }}
        className='card-titre'>{props.titre}
        <img
          className='fleche-up'
          style={open ? {
            transform: 'rotate(-180deg)'
          } :
            {}
          }
          onClick={toggle} src={flecheUp}>
        </img>
      </div>
      <div

        className="toggle">
        <p
          ref={contentRef}
          style={open ? {
            height: contentRef.current ? contentRef.current.scrollHeight + "px" : "auto",
            opacity: 1,
            fontSize: props.style + "px" 
          } : {
            height: "0px",
            opacity: 0,
            fontSize: props.style + "px" 
          }} >{props.content}
        </p>
      </div>
    </div>
  );

}

export default CardComponent
