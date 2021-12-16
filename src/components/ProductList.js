import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import { ItemConsumer } from '../context'
import Category from '../components/Cart/Category'

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='py-5'>
          {/* <h2>hello world</h2> */}

          <div className='container'>
            {/* <Category /> */}
            <Title name='our' title='Items' />
            <div className='row'>
              <ItemConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return <Product key={product.id} product={product} />
                  })
                }}
              </ItemConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
      //
    )
  }
}
