import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.div`
  font-size: 2.2rem;
  font-weight: 600;
  display: flex;
  gap: 1rem;
`;

const Field = styled.textarea`
  width: 22.334em;
  font-size: 1.8rem;
  padding: 1.5rem 2rem;
  border-radius: 0rem;
  border: 0.1rem solid grey;
  cursor: text;
  resize: none;
`;

const Must = styled(Title)`
  color: red;
`;

interface Props {
  title: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  must?: boolean;
}

function TextArea({ title, value, placeholder, onChange, must = true }: Props) {
  return (
    <MainContainer>
      <Title>
        {title}:{must && <Must>*</Must>}
      </Title>
      <Field
        rows={10}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </MainContainer>
  );
}

export default TextArea;
