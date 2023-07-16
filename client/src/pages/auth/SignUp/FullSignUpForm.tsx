import Input from '../../shared/Input';
import styled from 'styled-components';
import Modal from '../../shared/Modal';
import Selector from '../../shared/Selector';
import 'react-phone-input-2/lib/style.css';
import { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import json from '../../shared/variables.json';
import countryList from 'react-select-country-list';
import { useContext } from '../../../context/Context';
import { useMutation, useQuery } from '@apollo/client';
import Button, { ButtonMode } from '../../shared/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  GET_EDUCATION,
  NEW_CITY,
  NEW_COLLEGE,
  NEW_COUNTRY,
  NEW_SCHOOL,
  NEW_UNIVERSITY,
  NEW_USER,
  EDIT_USER,
} from '../../../apollo/actions';

const MainContainer = styled.div`
  gap: 3rem;
  display: flex;
  padding: 5rem 2rem;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 5rem;
  font-weight: 500;
`;

const Subtitle = styled.p`
  font-size: 2.2rem;
  text-align: center;
`;

const Fields = styled.div`
  display: grid;
  gap: 4rem 8rem;
  grid-template-columns: 40.2rem 40.2rem;
`;

const Form = styled.div`
  gap: 4rem;
  display: flex;
  padding: 3rem 4rem;
  flex-direction: column;
  background-color: rgba(208, 213, 255, 0.5);
`;

const FieldBox = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

const FieldTitle = styled.div`
  font-size: 2.2rem;
  font-weight: 600;
  display: flex;
  gap: 1rem;
`;

const Must = styled(FieldTitle)`
  color: red;
`;

const phoneInput = {
  height: '5.5rem',
  width: 'max(20em, 100%)',
  fontSize: '1.8rem',
  borderRadius: '0rem',
  border: '.1rem solid grey',
};

interface Location {
  city: string;
  country: string;
}

interface Affiliation {
  type: string;
  name: string;
  studyYear: Number;
  degree: string;
  location: Location;
}

interface User {
  email: string;
  gender: string;
  country: string;
  password: string;
  firstName: string;
  instagram: string;
  secondName: string;
  location: Location;
  dateOfBirth: string;
  phoneNumber: string;
  __typename?: string;
  affiliation: Affiliation;
}

interface City {
  name: string;
  schools: string[];
}

interface Country {
  name: string;
  cities: City[];
  colleges: string[];
}

function FullSignUpForm() {
  const navigate = useNavigate();
  const currentUser = useContext().user;
  const [newUser] = useMutation(NEW_USER);
  const [newCity] = useMutation(NEW_CITY);
  const [editUser] = useMutation(EDIT_USER);
  const [newSchool] = useMutation(NEW_SCHOOL);
  const countries = countryList().getLabels();
  const [newCountry] = useMutation(NEW_COUNTRY);
  const [newCollege] = useMutation(NEW_COLLEGE);
  const [cities, setCities] = useState<City[]>([]);
  const [schools, setSchools] = useState<string[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [newUniversity] = useMutation(NEW_UNIVERSITY);
  const [colleges, setColleges] = useState<string[]>([]);
  const { email, password, edit } = useLocation().state;
  const [education, setEducation] = useState<Country[]>([]);
  const { loading, error, data } = useQuery(GET_EDUCATION);
  const [universities, setUniversities] = useState<string[]>([]);
  const { affiliations, courses, degrees, grades, gender } = json.signUp;
  const [user, setUser] = useState<User>(
    edit
      ? currentUser
      : {
          email: email,
          firstName: '',
          secondName: '',
          gender: 'Male',
          instagram: '@',
          phoneNumber: '+',
          password: password,
          dateOfBirth: '2022-02-22',
          affiliation: {
            type: affiliations[0],
            name: schools[0],
            studyYear: grades[0],
            degree: degrees[0],
            location: {
              city: cities[0],
              country: 'Kazakhstan',
            },
          },
          location: {
            city: cities[0],
            country: 'Kazakhstan',
          },
        }
  );

  const NameInput = (value: string) => {
    return value
      .toLowerCase()
      .replace(/[^a-zA-Z\s]/g, '')
      .replace(/(?<!\p{Lowercase})\p{Lowercase}/gu, (ch) => ch.toUpperCase());
  };

  const setFirstName = (value: string) => {
    setUser({ ...user, firstName: NameInput(value) });
  };

  const setSecondName = (value: string) => {
    setUser({ ...user, secondName: NameInput(value) });
  };

  const setDateOfBirth = (value: string) => {
    setUser({ ...user, dateOfBirth: value });
  };

  const setPhoneNumber = (value: string) => {
    setUser({ ...user, phoneNumber: value });
  };

  const setCountry = (value: string) => {
    setUser({ ...user, country: value });
  };

  const setCity = (value: string) => {
    setUser({ ...user, location: { ...user.location, city: value } });
  };

  const setGender = (value: string) => {
    setUser({ ...user, gender: value });
  };

  const setAffiliation = (value: string) => {
    if (value === 'School') {
      setUser({
        ...user,
        affiliation: {
          ...user.affiliation,
          type: value,
          name: schools.length ? schools[0] : '',
          studyYear: parseInt(grades[0]),
          location: user.location,
        },
      });
    } else if (value === 'College') {
      setUser({
        ...user,
        affiliation: {
          ...user.affiliation,
          type: value,
          name: colleges.length ? colleges[0] : '',
          studyYear: parseInt(courses[0]),
          location: user.location,
        },
      });
    } else {
      setUser({
        ...user,
        affiliation: {
          ...user.affiliation,
          type: value,
          name: universities.length ? universities[0] : '',
          studyYear: parseInt(courses[0]),
          location: user.location,
        },
      });
    }
  };

  const setSchool = (value: string) => {
    setUser({ ...user, affiliation: { ...user.affiliation, name: value } });
  };

  const setGrade = (value: string) => {
    setUser({
      ...user,
      affiliation: { ...user.affiliation, studyYear: parseInt(value) },
    });
  };

  const setDegree = (value: string) => {
    setUser({ ...user, affiliation: { ...user.affiliation, degree: value } });
  };

  const setInstagram = (value: string) => {
    setUser({ ...user, instagram: value ? value : '@' });
  };

  const setEmail = (value: string) => {
    setUser({ ...user, email: value });
  };

  useEffect(() => {
    if (!loading && !error && data) {
      const { allCountries, allUniversities } = data;
      setEducation(allCountries);
      setUniversities(allUniversities);
    } else if (!loading && error) {
      alert('apollo server error');
    }
  }, [loading, error, data]);

  useEffect(() => {
    const tmpCountry = education?.find((item) => item.name === user?.country);
    const tmpCities = tmpCountry?.cities;
    const tmpColleges = tmpCountry?.colleges;
    setCities(tmpCities ? tmpCities : []);
    setColleges(tmpColleges ? tmpColleges : []);
  }, [user?.country, education]);

  useEffect(() => {
    if (cities?.length) {
      if (!cities.find((item) => item?.name === user?.location.city)) {
        setCity(cities[0].name);
      }
    }
  }, [cities]);

  useEffect(() => {
    const tmpSchools = cities?.find(
      (item) => item?.name === user?.location.city
    )?.schools;
    setSchools(tmpSchools?.length ? tmpSchools : []);
  }, [user?.location.city, cities]);

  useEffect(() => {
    if (user?.affiliation.type === 'School') {
      if (schools?.length) {
        if (!schools.find((item) => item === user?.affiliation.name)) {
          setSchool(schools[0]);
        }
      }
    }
  }, [schools]);

  useEffect(() => {
    if (user?.affiliation.type === 'College') {
      if (colleges?.length) {
        if (!colleges.find((item) => item === user?.affiliation.name)) {
          setSchool(colleges[0]);
        }
      }
    }
  }, [colleges]);

  useEffect(() => {
    if (user?.affiliation.type === 'University') {
      if (universities?.length) {
        if (!universities.find((item) => item === user?.affiliation.name)) {
          setSchool(universities[0]);
        }
      }
    }
  }, [universities]);

  const renderAffiliation = () => {
    const schoolData =
      user?.affiliation.type === 'School'
        ? schools
        : user?.affiliation.type === 'College'
        ? colleges
        : universities;

    if (
      user?.affiliation.type !== 'Work' &&
      user?.affiliation.type !== 'Unemployed'
    )
      return (
        <>
          <Selector
            notListed
            data={schoolData}
            value={user.affiliation.name}
            onChange={setSchool}
            title={user.affiliation.type}
          />
          <Selector
            title={user.affiliation.type === 'School' ? 'Grade' : 'Course'}
            value={user.affiliation.studyYear.toString()}
            data={user.affiliation.type === 'School' ? grades : courses}
            onChange={setGrade}
          />
          {user.affiliation.type === 'University' && (
            <Selector
              title="Degree"
              value={user.affiliation.degree}
              data={degrees}
              onChange={setDegree}
            />
          )}
        </>
      );
  };

  const onPress = () => {
    if (edit) {
      delete user.__typename;
      editUser({ variables: { input: user } })
        .then(() => setModal(true))
        .catch(() => alert('apollo server error'));
    } else {
      newUser({ variables: { input: user } })
        .then(() => setModal(true))
        .catch((err) => {
          console.log(err);
          alert('apollo server error');
        });
    }
  };

  const onModalPress = () => {
    setModal(false);
    if (edit) {
      navigate('/profile');
    } else {
      navigate('/');
    }
  };

  return (
    <MainContainer>
      <Modal
        title={edit ? 'Done!' : 'Congratulations!'}
        subtitle={
          edit
            ? 'Your account details were updated successfully'
            : 'Now you are a volunteer of New Wave Club! Go check your inbox! You will get an email with a link to our chat where we communicate and work.'
        }
        buttonTitle={edit ? 'Okay' : 'Hurrah!'}
        isVisible={modal}
        onPress={onModalPress}
      />
      <Title>Fill the form below</Title>
      <Subtitle>
        Please, make sure that the data is accurate.
        <br />
        It is important for the issuance of your certificate.
      </Subtitle>
      <Form>
        <Fields>
          <Input
            title="First name"
            value={user.firstName}
            onChange={setFirstName}
            placeholder="Enter your first name"
          />
          <Input
            title="Second name"
            value={user.secondName}
            onChange={setSecondName}
            placeholder="Enter your second name"
          />
          <Input
            type="date"
            title="Date of birth"
            value={user.dateOfBirth}
            onChange={setDateOfBirth}
          />
          <FieldBox>
            <FieldTitle>
              Phone number
              <Must>*</Must>
            </FieldTitle>
            <PhoneInput
              country="kz"
              inputStyle={phoneInput}
              value={user.phoneNumber}
              onChange={(p) => setPhoneNumber(p)}
            />
          </FieldBox>
          <Selector
            title="Country"
            data={countries}
            value={user.location.country}
            onChange={setCountry}
          />
          <Selector
            notListed
            title="City"
            value={user.location.city}
            onChange={setCity}
            data={cities?.map((item) => {
              return item?.name;
            })}
          />
          <Selector
            title="Gender"
            data={gender}
            value={user.gender}
            onChange={setGender}
          />
          <Selector
            title="Affiliation"
            data={affiliations}
            value={user.affiliation.type}
            onChange={setAffiliation}
          />
          {renderAffiliation()}
          <Input
            title="Instagram username"
            value={user.instagram}
            onChange={setInstagram}
          />
          {edit && (
            <Input
              type="email"
              title="E-mail"
              value={user.email}
              onChange={setEmail}
            />
          )}
        </Fields>
        <Button onClick={onPress} mode={ButtonMode.PRIMARY}>
          {edit ? 'save' : 'sign up'}
        </Button>
      </Form>
    </MainContainer>
  );
}

export default FullSignUpForm;
