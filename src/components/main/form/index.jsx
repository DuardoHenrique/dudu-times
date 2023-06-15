import { forwardRef, useState } from "react"
import { FormStyled, Input, InputContainer } from "./styles"

export const Form = forwardRef((props, ref) => {

  const [inputs, setInputs] = useState({
    search: '',
  })

  const handleInputChange = (e) => {
    setInputs({
      search: e.target.value
    })
  }

  const handleResetInput = () => {
    setInputs({
      search: ''
    })
  }

  const submit = (e) => {
    e.preventDefault()
  }

  return (
    <FormStyled onSubmit={submit} ref={ref} >
      <InputContainer>
        <Input
          value={inputs.search}
          onChange={handleInputChange}
          type="text"
        />  
        <Input 
          type="reset"
          onClick={handleResetInput}
          $displayNone={inputs.search.length > 0 ? false : true}

        />
      </InputContainer>

      <button disabled={inputs.search.length > 0 ? false : true} >Pesquisar</button>
    </FormStyled>
  )
})