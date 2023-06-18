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
    <FormStyled onSubmit={submit}  >
    
      <InputContainer>
        <Input
          ref={ref}
          type="text"
          value={inputs.search}
          placeholder={props.placeholder}
          onChange={handleInputChange}
        />
        <Input
          type="reset"
          onClick={handleResetInput}
          $displayNone={inputs.search.length > 0 ? false : true}
          value='Limpar'
        />
      </InputContainer>

      <button disabled={inputs.search.length > 0 ? false : true} onClick={props.onclick} >Pesquisar</button>
    </FormStyled>
  )
})