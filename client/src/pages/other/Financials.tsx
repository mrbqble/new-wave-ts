import Link from '../shared/Link'
import styled from 'styled-components'
import data from '../shared/variables.json'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px 20px;
  align-items: center;
`

const Title = styled.p`
  font-size: 50px;
  font-weight: 500;
`

const Subtitle = styled.p`
  font-size: 22px;
  width: 50em;
  text-align: center;
`

const Content = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
`

const Year = styled.p`
  color: #D0D5FF;
  font-size: 150px;
  font-weight: 700;
  text-transform: uppercase;
`

const Links = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
`

const Document = styled(Link)`
  font-size: 20px;
  text-transform: none;
  text-decoration: underline;
`

function Financials() {

  const { years } = data.financials

  return (
    <MainContainer>
      <Title>Financials</Title>
      <Subtitle>We are totally for being rational everywhere and in everything. We know how important it's to you that your donation is being used rationally. It's nessesary for us, too! That's the reason why we keep our work accountable and transparent as much, as it possible!</Subtitle>
      {years.map((item, index) => 
        <Content key={index}>
          <Year>{item.year}</Year>
          <Links>
            <Document>{item.year} Annual Report</Document>
            <Document>{item.year} Financial Usage</Document>
          </Links>
        </Content>
      )}
      <Content>
          <Year>other</Year>
          <Document>Kazakhstan NCO Certificate</Document>
        </Content>
    </MainContainer>
  )
}

export default Financials