import { useRef, useState } from "react"

import { ContainerMain } from "./styles"
import { CardCenter } from "../cards/card-center"
import { CardLeft } from "../cards/card-left"
import { CardRight } from "../cards/card-right"
import { Form } from "../form"

export const Container = () => {
  const [subject, setSubject] = useState('')

  const formRef = useRef(null);

  const handleClickInput = () => {
    setSubject(formRef.current.value)
  }

  return (
    <>


        <Form
          ref={formRef}
          onclick={handleClickInput}
          placeholder={'Ex: Brasil'}
        />
 


      <ContainerMain >

        <CardLeft />

        <CardCenter subject={subject} />

        <CardRight />

      </ContainerMain>
    </>
  )
}