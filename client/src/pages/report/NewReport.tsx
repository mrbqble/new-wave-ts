import React, { useState } from 'react'
import styled from 'styled-components'
import TextArea from '../shared/TextArea'
import Input from '../shared/Input'
import { useLocation } from 'react-router-dom'
import { stat } from 'fs'
import Button, { ButtonMode } from '../shared/Button'

const MainContainer = styled.div`
  gap: 4rem;
  display: flex;
  padding: 5rem 2rem;
  align-items: center;
  flex-direction: column;
`

const Title = styled.p`
  font-size: 5rem;
  font-weight: 500;
`

const Form = styled.div`
  gap: 4rem;
  display: flex;
  padding: 3rem 4rem;
  flex-direction: column;
  background-color: rgba(208, 213, 255, 0.5);
`

const Fields = styled.div`
  display: grid;
  gap: 4rem 8rem;
  grid-template-columns: 40.2rem 40.2rem;
`

const Field = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1rem;
`

const Duration = styled(Field)`
  flex: initial;
`

const TimeFields = styled(Field)`
  justify-content: space-between;
`

const FieldTitle = styled.div`
  font-size: 2.2rem;
  font-weight: 600;
  display: flex;
  gap: 1rem;
`

const DurationText = styled(FieldTitle)`
  color: #0013BC;
`

function NewReport() {

  const [duration, setDuration] = useState<number>(0)
  const { state } = useLocation()

  const renderReportFields = () => {
    switch (state?.type) {
      case 'Clean up': {
        return <>
          <Input
            type='number'
            title='Total bags collected'
            value={0}
            onChange={(val) => console.log(val)}
          />
          <Input
            type='number'
            title='Cleaned area (m^2)'
            value={0}
            onChange={(val) => console.log(val)}
          />
        </>
      }
      case 'Collections': {
        return <>
          <Input
            type='number'
            title='Plastic collected'
            value={0}
            onChange={(val) => console.log(val)}
          />
          <Input
            type='number'
            title='Paper collected'
            value={0}
            onChange={(val) => console.log(val)}
          />
          <Input
            type='number'
            title='Glass collected'
            value={0}
            onChange={(val) => console.log(val)}
          />
          <Input
            type='number'
            title='Metal collected'
            value={0}
            onChange={(val) => console.log(val)}
          />
        </>
      }
      case 'Tree planting': {
        return <Input
          type='number'
          title='Planted number'
          value={0}
          onChange={(val) => console.log(val)}
        />
      }
    }
  }

  return (
    <MainContainer>
      <Title>Make a report</Title>
      <Form>
        <Fields>
          <TextArea
            title='Description'
            value=''
            placeholder='Enter the description of report'
            onChange={(val) => console.log(val)}
          />
          <TimeFields>
            <Input
              type='time'
              title='Actual time started'
              value=''
              onChange={(val) => console.log(val)}
            />
            <Input
              type='time'
              title='Actual time ended'
              value=''
              onChange={(val) => console.log(val)}
            />
            <Duration>
              <FieldTitle>Actual duration:</FieldTitle>
                <DurationText>
                  {Math.floor(duration / 60) > 0 && Math.floor(duration / 60) + ' hours'} {duration ? duration % 60 : 0} minutes
                </DurationText>
            </Duration>
          </TimeFields>
          {renderReportFields()}
        </Fields>
        <Button mode={ButtonMode.PRIMARY}>submit</Button>
      </Form>
    </MainContainer>
  )
}

export default NewReport