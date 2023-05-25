import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  display: flex;
  gap: 10px;
`

const Field = styled.textarea`
  width: 20em;
  font-size: 18px;
  padding: 15px 20px;
  border-radius: 0px;
  border: 1px solid grey;
  cursor: text;
  resize: none;
`

const Must = styled(Title)`
  color: red;
`

interface Props {
  title: string
  value: string
  placeholder: string
  onChange: (value: string) => void
  must?: boolean
}

function TextArea({ title, value, placeholder, onChange, must = true }: Props) {
  return (
    <MainContainer>
      <Title>
        {title}:
        {must && <Must>*</Must>}
      </Title>
      <Field
        rows={10}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </MainContainer>
  )
}

export default TextArea