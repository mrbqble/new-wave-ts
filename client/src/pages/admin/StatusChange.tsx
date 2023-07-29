import Input from '../shared/Input';
import styled from 'styled-components';
import Selector from '../shared/Selector';
import { useEffect, useState } from 'react';
import data from '../shared/variables.json';
import Button, { ButtonMode } from '../shared/Button';
import { useLazyQuery, useMutation } from '@apollo/client';
import { CHANGE_STATUS, GET_VOLUNTEERS } from '../../apollo/actions';

const MainContainer = styled.div`
  gap: 2rem;
  display: flex;
  padding: 5rem 2rem;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 5rem;
  font-weight: 500;
`;

const Form = styled.div`
  gap: 3rem;
  padding: 3rem 4rem;
  min-width: 40em;
  display: flex;
  flex-direction: column;
  background-color: rgba(208, 213, 255, 0.5);
`;

const Table = styled.table`
  border-collapse: collapse;
`;

const Row = styled.tr`
  text-align: left;
  border-bottom: 0.1rem solid black;
`;

const Header = styled.th`
  color: #0013bc;
  padding: 2rem 4rem;
  font-size: 1.8rem;
`;

const Cell = styled.td`
  padding: 2rem 4rem;
  font-size: 1.8rem;
`;

interface Volunteer {
  _id: string;
  name: string;
  type: string;
}

interface Changed {
  _id: string;
  type: string;
}

function StatusChange() {
  const { statuses } = data;
  const [search, setSearch] = useState<string>('');
  const [changeStatus] = useMutation(CHANGE_STATUS);
  const [getVolunteers] = useLazyQuery(GET_VOLUNTEERS);
  const [changed, setChanged] = useState<Changed[]>([]);
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);

  useEffect(() => {
    getVolunteers()
      .then((res) => setVolunteers(res.data.users))
      .catch(() => alert('apollo server error'));
  }, []);

  const onChange = (value: string, id: string) => {
    const newVolunteers = JSON.parse(JSON.stringify(volunteers));
    const item = newVolunteers.find((item: Volunteer) => item._id === id);
    item.type = value;
    setVolunteers(newVolunteers);
    const newChanged = JSON.parse(JSON.stringify(changed));
    const tmp = newChanged.find((item: Volunteer) => item._id === id);
    if (tmp) {
      tmp.type = value;
      setChanged(newChanged);
    } else {
      setChanged([...changed, { _id: id, type: value }]);
    }
  };

  const onPress = () => {
    changeStatus({ variables: { input: changed } }).catch(() =>
      alert('apollo server error')
    );
  };

  const arraySF = volunteers.filter(
    (item) =>
      item.name
        .split(' ')
        .filter(
          (item) =>
            item.substring(0, search.length).toLowerCase() ===
            search.toLowerCase()
        ).length > 0
  );

  return (
    <MainContainer>
      <Title>Statuses of volunteers</Title>
      <Input
        title=""
        must={false}
        value={search}
        onChange={setSearch}
        placeholder="Search for the volunteer"
      />
      <Form>
        <Table>
          <Row>
            <Header>№</Header>
            <Header>Name</Header>
            <Header>Status</Header>
          </Row>
          {arraySF.map((item, index) => (
            <Row key={index}>
              <Cell>{index + 1}</Cell>
              <Cell>{item.name}</Cell>
              <Cell>
                <Selector
                  title=""
                  width={180}
                  data={statuses}
                  value={item.type}
                  onChange={(value) => onChange(value, item._id)}
                />
              </Cell>
            </Row>
          ))}
        </Table>
        <Button onClick={onPress} mode={ButtonMode.PRIMARY}>
          save
        </Button>
      </Form>
    </MainContainer>
  );
}

export default StatusChange;
