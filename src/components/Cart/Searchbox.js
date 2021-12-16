import React from 'react'

const Searchbox = () => {
  return (
    <div>
      <section className='search-bar mt-2'>
        <div className='row'>
          <div className='col-lg-10 mx-auto'>
            <form>
              <div>
                <div className='input-group'>
                  <input
                    type='search'
                    placeholder='I am looking for...'
                    className='form-control'
                  />
                  <div className='input-group-append'>
                    {/* Example single danger button  */}
                    <div class='btn-group search-but'>
                      <button
                        type='button'
                        class='btn btn-outline-secondary dropdown-toggle'
                        data-bs-toggle='dropdown'
                        aria-expanded='false'
                      >
                        <i class='fas fa-mobile-alt mr-2'></i>Computers &
                        Lpatops
                      </button>
                      <ul class='dropdown-menu'>
                        <li>
                          <a class='dropdown-item' href='#'>
                            <i class='fas fa-mobile-alt mr-2'></i>Phones &
                            Tablets
                          </a>
                        </li>
                        <li>
                          <a class='dropdown-item' href='#'>
                            <i class='fas fa-tv mr-2'></i>Electronics
                          </a>
                        </li>
                        <li>
                          <a class='dropdown-item' href='#'>
                            <i class='fas fa-male mr-2'></i>Men Clothing
                          </a>
                        </li>
                        <li>
                          <a class='dropdown-item' href='#'>
                            <i class='fas fa-ring mr-2'></i>Jewelry
                          </a>
                        </li>
                        <li>
                          <a class='dropdown-item' href='#'>
                            <i class='fas fa-female mr-2'></i>Women Clothing
                          </a>
                        </li>
                        <li>
                          <a class='dropdown-item' href='#'>
                            <i class='fas fa-keyboard mr-2'></i>Computers &
                            Accessories
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className='input-group-append'>
                      <button className='btn btn-link'>
                        <i class='fas fa-search'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Searchbox
