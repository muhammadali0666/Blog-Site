import React from 'react'
import {Header} from "../../Components/Header/header"
import {Card} from "../../Components/Cards/cards"
import {LeftCol} from "../../Components/LeftCol/leftCol"
import {Footer} from "../../Components/Footer/footer"
import "./all.css"

export const All = () => {
  return (
   <>
    <Header/>
    <div className="box d-flex aliginitems-center">
      <div className='col-4'>
        <LeftCol/>
      </div>
      <div className='col-8'>
        <h3 className="paragraph">
        Recent Posts
        </h3>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Footer/>
      </div>
    </div>
   </>
  )
}
