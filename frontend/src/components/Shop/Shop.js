import React from 'react'
import Slidebar from './Slidebar'
import Product from './Product'

export default function Shop() {
  return (
    <>
        <div class="container-fluid">
        <div class="row px-xl-5">
    <Slidebar/>
    <Product/>
    </div>
    </div>
    </>
  )
}
