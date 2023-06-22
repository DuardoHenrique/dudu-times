import { useRef, useState } from "react";
import { Form } from "../../main/form"
import { CardFilms } from "../card"

export const ContainerFilms = () => {
  const formRef = useRef(null);
  const [subject, setSubject] = useState('')

  const handleClickInput = () => {
    setSubject(formRef.current.value)
  }

  return (
    <>
         <Form
          ref={formRef}
          onclick={handleClickInput}
          placeholder={'Ex: Batman'}
        />

        <CardFilms subject={subject} />
    </>
  )
}