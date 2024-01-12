import React from 'react'
import Carousel from './carousel'
import Featured from './featured'
import Category from './category'
import Products from './products'
import Vendor from './Vendor'

export default function body() {
  return (
   <>
    <Carousel/>
    <Featured/>
    <Category/>
    <Products/>
    <Vendor/>
    </>
  )
}
