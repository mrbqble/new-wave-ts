import styled from 'styled-components'

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Title = styled.p`
    font-size: 22px;
    font-weight: 600;
    display: flex;
    gap: 10px;
`

const Must = styled(Title)`
    color: red;
`

const Selection = styled.select`
    width: 402px;
    font-size: 18px;
    padding: 15px 20px;
    border-radius: 0px;
    border: 1px solid grey;
    -webkit-appearance: none;
    background-image: url('data:image/svg+xml,<svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 1.5L11.8795 11.5L2 1.5" stroke="%230013BC" stroke-width="4"/></svg>');
    background-position: bottom 45% left 95%;
    background-size: 16px 10px;
    background-repeat: no-repeat;

    &:focus {
        background-image: url('data:image/svg+xml,<svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 13L12.1205 3L22 13" stroke="%230013BC" stroke-width="4"/></svg>');
    }
`

const Field = styled.input`
    width: 17em;
    font-size: 18px;
    padding: 14px 20px;
    border-radius: 0px;
    border: 1px solid grey;
    position: absolute;
    margin-left: -400px;
    margin-top: 2px;
    border: none;
    z-index: 10;
`

interface Props {
    title?: string
    value?: string
    data?: string[]
    notListed?: boolean
    onChange: (value: string) => void
}

function Select({
    data,
    title,
    value,
    onChange,
    notListed
}: Props) {

    const renderItem = (item: string) => {
        return item.length > 35 ? item.toString().slice(0, 35) + "..." : item
    }

    return (
        <MainContainer>
            <Title>
                {title}
                <Must>*</Must>
            </Title>
            <div>
                <Selection
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
                        autoFocus
                        onChange={(e) => onChange(e.target.value)}
                        value={value}
                    />
                }
            </div>
        </MainContainer>
    )
}

export default Select