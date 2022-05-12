import React from 'react';
import '../stylesheets/Testimonial.css';

function Testimonial(props){
    return(
        <div className='testimonial-container'>
            <img className='testimonial-img' 
                 src={require(`../images/testimonio-${props.img}.png`)}
                 alt={`Foto de ${props.img[0].toUpperCase() + props.img.substring(1)}`} />
            <div className='testimonial-text-container'>
                <p className='testimonial-name'>
                    <strong>{props.name}</strong> in {props.country}
                </p>
                <p className='testimonial-charge'>
                    {props.charge} at <strong>{props.company}</strong>
                </p>
                <p className='testimonial-text'>"
                    {props.testimonial}"
                </p>
            </div>
        </div>
    );
}

export default Testimonial;