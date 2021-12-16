import React from 'react'
import Cart1 from '../images/cart1.jpg'
import './StyleCat.css'

const Category = () => {
  return (
    <div>
      <section className='p-5'>
        <div className='container'>
          <h2 className='text-center'>Shop By Category</h2>
          <div className='row'>
            <div className='col-sm-4'>
              <div class='card' style={{ width: '18rem' }}>
                <div className='inner'>
                  <img src={Cart1} class='card-img-top' alt='...' />
                </div>
                <div class='card-body'>
                  <h5 class='card-title'>Computers & Laptops</h5>
                  <a href='#' class='btn btn-primary'>
                    More
                  </a>
                </div>
              </div>
            </div>
            <div className='col-sm-4'>
              <div class='card' style={{ width: '18rem' }}>
                <div className='inner'>
                  <img src={Cart1} class='card-img-top' alt='...' />
                </div>
                <div class='card-body'>
                  <h5 class='card-title'>Electronics</h5>
                  <a href='#' class='btn btn-primary'>
                    More
                  </a>
                </div>
              </div>
            </div>
            <div className='col-sm-4'>
              <div class='card' style={{ width: '18rem' }}>
                <div className='inner'>
                  <img src={Cart1} class='card-img-top' alt='...' />
                </div>
                <div class='card-body'>
                  <h5 class='card-title'>Men Clothing</h5>
                  <a href='#' class='btn btn-primary'>
                    More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='row mt-5'>
            <div className='col-sm-4'>
              <div class='card' style={{ width: '18rem' }}>
                <div className='inner'>
                  <img src={Cart1} class='card-img-top' alt='...' />
                </div>
                <div class='card-body'>
                  <h5 class='card-title'>Jewelry</h5>
                  <a href='#' class='btn btn-primary'>
                    More
                  </a>
                </div>
              </div>
            </div>
            <div className='col-sm-4'>
              <div class='card' style={{ width: '18rem' }}>
                <div className='inner'>
                  <img src={Cart1} class='card-img-top' alt='...' />
                </div>
                <div class='card-body'>
                  <h5 class='card-title'>Women Clothing</h5>
                  <a href='#' class='btn btn-primary'>
                    More
                  </a>
                </div>
              </div>
            </div>
            <div className='col-sm-4'>
              <div class='card' style={{ width: '18rem' }}>
                <div className='inner'>
                  <img src={Cart1} class='card-img-top' alt='...' />
                </div>
                <div class='card-body'>
                  <h5 class='card-title'>Phones & Tablets</h5>
                  <a href='#' class='btn btn-primary'>
                    More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='row mt-5'>
            <div className='col-sm-4'>
              <div class='card' style={{ width: '18rem' }}>
                <div className='inner'>
                  <img src={Cart1} class='card-img-top' alt='...' />
                </div>
                <div class='card-body'>
                  <h5 class='card-title'>Computers & Accessories</h5>
                  <a href='#' class='btn btn-primary'>
                    More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Category
