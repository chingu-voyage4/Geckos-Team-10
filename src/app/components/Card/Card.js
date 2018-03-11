import React from 'react'; 

const Card = ({ 
    cardWrap, 
    imgWrap, 
    src, 
    alt, 
    textWrap, 
    title, 
    text 
}) => (
    <div className={cardWrap}>
       <div className={imgWrap}>
           <img src={src} alt={alt} />
        </div>
       <div className={textWrap}>
           <h3>{title}</h3>
           <p>{text}</p>
       </div>        
    </div>
)

export default Card; 