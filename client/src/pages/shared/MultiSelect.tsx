import React from 'react'
import styled from 'styled-components'
import Select from 'react-select'

const MainContainer = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  display: flex;
  gap: 10px;
`

export interface Option {
  value: string
  label: string
}

interface Props {
  title: string
  data: Option[]
  onChange: (value: Option[]) => void
}

function MultiSelect({
  title,
  data,
  onChange
}: Props) {
  return (
    <MainContainer>
      <Title>{title}:</Title>
      <Select
        isMulti
        options={data}
        onChange={(values) => onChange(values.map(item => {return { value: item.value, label: item.label }}))}
        styles={{
          valueContainer: (baseStyles) => ({
            ...baseStyles,
            padding: '11px 15px',
          }),
          control: (baseStyles) => ({
            ...baseStyles,
            borderRadius: '0px',
            border: '1px solid gray'
          }),
          multiValue: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: '#D0D5FF',
            color: 'black',
            margin: '0px',
            gap: '10px'
          }),
          multiValueLabel: (baseStyles) => ({
            ...baseStyles,
            fontSize: '18px',
            padding: '3px 5px',
            color: 'black'
          }),
          multiValueRemove: (baseStyles) => ({
            ...baseStyles,
            padding: '5px',
            color: 'black'
          }),
          input: (baseStyles) => ({
            ...baseStyles,
            fontSize: '18px',
            color: 'black'
          }),
          dropdownIndicator: (baseStyles, state) => ({
            ...baseStyles,
            padding: '5px 15px',
            color: '#0013BC',
            transform: state.isFocused ? 'rotate(180deg)' : 'none',
            transition: '0.5s',
            '&:hover': {
              color: '#0013BC'
            }
          }),
          indicatorSeparator: (baseStyles, state) => ({
            ...baseStyles,
            display: state.isMulti ? 'flex' : 'none',
          }),
        }}
      />
    </MainContainer>
  )
}

export default MultiSelect