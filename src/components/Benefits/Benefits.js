import Slider from 'react-slick'

import { BENEFITS } from '../../data/benefits'
import { SETTINGS } from './../../@common/constants'

import './Benefits.scss'

export const Benefits = () => {
  return (
    <div className="benefits" id="benefits">
      <div className="container">
        <div className="title">
          <h2>
            Entre los <span> beneficios </span> <p>que</p> <b>ofrecemos</b> se
            encuentran
          </h2>
        </div>
        <div className="carousel">
          <Slider {...SETTINGS}>
            {BENEFITS.benefits.map(item => (
              <div key={item.id} className="box-img">
                <div className="content-icon">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="benefit-title">
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}
