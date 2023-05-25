import React from 'react'
import styled from 'styled-components'
import CreatableSelect from 'react-select/creatable'

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
  onChange: (value: string[]) => void
}

function CreatableMultiSelect({
  title,
  data,
  onChange
}: Props) {
  return (
    <MainContainer>
      <Title>{title}:</Title>
      <CreatableSelect
        isMulti
        options={data}
        onChange={(values) => onChange(values.map(item => {return item.value}))}
        styles={{
          valueContainer: (baseStyles) => ({
            ...baseStyles,
            padding: '11px 15px',
            gap: 2
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
            margin: '0px'
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

export default CreatableMultiSelect