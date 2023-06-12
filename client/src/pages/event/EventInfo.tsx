import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

const MainContainer = styled.div`
  gap: 40px;
  display: flex;
  padding: 50px 20px;
  align-items: center;
  flex-direction: column;
`

function EventInfo() {

  const { event } = useLocation().state

  return (
    <MainContainer>

    </MainContainer>
  )
}

export default EventInfo