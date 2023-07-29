import styled from 'styled-components';
import CreatableSelect from 'react-select/creatable';

const MainContainer = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 2.2rem;
  font-weight: 600;
  display: flex;
  gap: 1rem;
`;

export interface Option {
  value: string;
  label: string;
}

interface Props {
  title: string;
  data: Option[];
  onChange: (value: string[]) => void;
}

function CreatableMultiSelect({ title, data, onChange }: Props) {
  return (
    <MainContainer>
      <Title>{title}:</Title>
      <CreatableSelect
        isMulti
        options={data}
        onChange={(values) =>
          onChange(
            values.map((item) => {
              return item.value;
            })
          )
        }
        styles={{
          valueContainer: (baseStyles) => ({
            ...baseStyles,
            padding: '1.1rem 1.5rem',
            gap: 2,
          }),
          control: (baseStyles) => ({
            ...baseStyles,
            borderRadius: '0rem',
            border: '.1rem solid gray',
            fontSize: '18px',
          }),
          multiValue: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: '#D0D5FF',
            color: 'black',
            margin: '0rem',
          }),
          multiValueLabel: (baseStyles) => ({
            ...baseStyles,
            fontSize: '18px',
            padding: '.3rem .5rem',
            color: 'black',
          }),
          multiValueRemove: (baseStyles) => ({
            ...baseStyles,
            padding: '.5rem',
            color: 'black',
          }),
          input: (baseStyles) => ({
            ...baseStyles,
            fontSize: '18px',
            color: 'black',
          }),
          dropdownIndicator: (baseStyles, state) => ({
            ...baseStyles,
            padding: '.5rem 1.5rem',
            color: '#0013BC',
            transform: state.isFocused ? 'rotate(180deg)' : 'none',
            transition: '0.5s',
            '&:hover': {
              color: '#0013BC',
            },
          }),
          indicatorSeparator: (baseStyles, state) => ({
            ...baseStyles,
            display: state.isMulti ? 'flex' : 'none',
          }),
          option: (baseStyles) => ({
            ...baseStyles,
            fontSize: '18px',
          }),
          noOptionsMessage: (baseStyles) => ({
            ...baseStyles,
            fontSize: '18px',
          }),
        }}
      />
    </MainContainer>
  );
}

export default CreatableMultiSelect;
