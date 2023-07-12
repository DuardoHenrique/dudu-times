import { useState } from "react"
import { Navigate } from "react-router-dom"
import { RxMagnifyingGlass } from "react-icons/rx"

import { ContainerMain } from "./styles"
import { CardLeft } from "../cards/card-left"
import { CardRight } from "../cards/card-right"
import { IRedirect } from "../cards/styles-cards"

export const Container = () => {
  const [direct, setDirect] = useState(false);

  const handleClick = () => {
    setDirect(true)
  }

  return (
    <>

      {direct ? <Navigate to={'search'} /> : null}


      <IRedirect onClick={handleClick}><RxMagnifyingGlass /></IRedirect>


      <ContainerMain >

        <CardLeft />

        <CardRight />

      </ContainerMain>
    </>
  )
}