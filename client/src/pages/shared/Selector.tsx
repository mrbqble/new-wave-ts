import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Title = styled.div`
  font-size: 2.2rem;
  font-weight: 600;
  display: flex;
  gap: 1rem;
`

const Must = styled(Title)`
  color: red;
`

interface SelectProps {
  width?: number
}

const Selection = styled.select<SelectProps>`
  width: ${({ width }) => width ? width/10 + 'rem' : 'max(20em, 100%)'};
  font-size: 1.8rem;
  padding: 1.5rem 2rem;
  border-radius: 0rem;
  border: .1rem solid grey;
  -webkit-appearance: none;
  background-image: url('data:image/svg+xml,<svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 1.5L11.8795 11.5L2 1.5" stroke="%230013BC" stroke-width="4"/></svg>');
  background-position: bottom 45% right 1.5rem;
  background-size: 1.6rem 1rem;
  background-repeat: no-repeat;

  &:focus {
    background-image: url('data:image/svg+xml,<svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 13L12.1205 3L22 13" stroke="%230013BC" stroke-width="4"/></svg>');
  }
`

const Field = styled.input`
  width: 80%;
  font-size: 1.8rem;
  padding: 1.4rem 2rem;
  border-radius: 0rem;
  position: absolute;
  top: 0;
  left: 0;
  outline: none;
  margin-top: .2rem;
  margin-bottom: .2rem;
  margin-left: .2rem;
  height: calc(100% - .4rem);
  border: none;
  border-right: none;
  z-index: 10;
`

interface Props {
  width?: number
  title: string
  value: string
  data: string[]
  notListed?: boolean
  onChange: (value: string) => void
}

function Selector({
  data,
  title,
  value,
  onChange,
  notListed,
  width
}: Props) {

  const renderItem = (item: string) => {
    return item.length > 35 ? item.toString().slice(0, 35) + "..." : item
  }

  return (
    <MainContainer>
      {title.length > 0 && <Title>
        {title}:
        <Must>*</Must>
      </Title>}
      <div style={{position: "relative"}}>
        <Selection
          width={width}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {data?.map((item, index) => 
            <option
              key={index}
              value={item}
            >
              {renderItem(item)}
            </option>
          )}
          {notListed && <option value="">Not listed</option>}
        </Selection>
        {notListed && !data?.find(item => item === value) &&
          <Field
            placeholder={`Enter your ${title?.toLowerCase()}`}
            onChange={(e) => onChange(e.target.value)}
            value={value}
          />
        }
      </div>
    </MainContainer>
  )
}

export default Selector