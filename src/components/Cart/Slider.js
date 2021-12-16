import React from 'react'
// import landing from '../images/cyber.jpg'
import landing from '../images/landing-c.jpeg'
import './StyleCat.css'

const Slider = () => {
  return (
    <div>
      <section id='home' className='home overflow-hidden'>
        {' '}
        <div
          id='carouselExampleIndicators'
          class='carousel slide'
          data-bs-ride='carousel'
        >
          <div class='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='0'
              class='active'
              aria-current='true'
              aria-label='Slide 1'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='1'
              aria-label='Slide 2'
            ></button>
          </div>
          <div class='carousel-inner'>
            <div class='carousel-item active'>
              <div className='home-banner home-banner-1'>
                <div className='home-banner-text'>
                  <h1>Women</h1>
                  <h2>52% Discount For This Season</h2>
                  <a href='#' className='btn btn-danger text-uppercase mt-4'>
                    Our Products
                  </a>
                </div>
              </div>
            </div>
            <div class='carousel-item'>
              <div className='home-banner home-banner-1'>
                <div className='home-banner-text'>
                  <h1>E-Shop</h1>
                  <h2>With Working Cart & Paypal</h2>
                  <a href='#' className='btn btn-danger text-uppercase mt-4'>
                    Our Products
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button
            class='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide='prev'
          >
            <span class='carousel-control-prev-icon' aria-hidden='true'></span>
            <span class='visually-hidden'></span>
          </button>
          <button
            class='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide='next'
          >
            <span class='carousel-control-next-icon' aria-hidden='true'></span>
            <span class='visually-hidden'></span>
          </button>
        </div>
      </section>
    </div>
  )
}

export default Slider
