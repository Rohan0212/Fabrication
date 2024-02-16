import React from 'react'
import safetydoor from './images/safetydoor.jpg'
import shed from './images/shed.jpg'
import welder from './images/welder.jpg'
import './Services.css'

const ServiceCard = ({image, title, information}) => {
  return (
    <div className='service-card'>
      <img src={image} alt={title} className='card-image' />
      <h3 className='card-title'>{title}</h3>
      <p className='card-info'>{information}</p>
    </div>
  );
};
const Services = () => {
  return (
    <div className='services'>
      <div className='service-header'>
        <h2>Services</h2>
        <span className='line'></span>
      </div>
      <div className='cards-container'>
      <ServiceCard
          image={safetydoor}
          title='Safety Door'
          information='We provide safety door for our clients based on their requirements and specifications.'
        />
        <ServiceCard
          image={shed}
          title='Shed'
          information='We provide Sheds of all sizes and materials for our clients based on their requirements and specifications.'
        />
        <ServiceCard
          image={welder}
          title='Welding'
          information='We provide all types of welding services for our clients based on their requirements and specifications.'
        />
      </div>
        
    </div>
  )
}

export default Services