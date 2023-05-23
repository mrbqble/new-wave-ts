import Input from '../../shared/Input'
import Select from '../../shared/Select'
import styled from 'styled-components'
import 'react-phone-input-2/lib/style.css'
import json from '../../shared/variables.json'
import { useEffect, useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import { useLocation, useNavigate } from 'react-router-dom'
import { gql, useMutation, useQuery } from '@apollo/client'
import countryList from 'react-select-country-list'
import Button, { ButtonMode } from '../../shared/Button'
import Modal from '../../shared/Modal'
import { useContext } from '../../../context/Context'

const MainContainer = styled.div`
  gap: 30px;
  display: flex;
  padding: 50px 20px;
  align-items: center;
  flex-direction: column;
`

const Title = styled.p`
  font-size: 50px;
  font-weight: 500;
`

const Subtitle = styled.p`
  font-size: 22px;
  text-align: center;
`

const Fields = styled.div`
  display: grid;
  gap: 40px 80px;
  grid-template-columns: 402px 402px;
`

const Form = styled.div`
  gap: 40px;
  display: flex;
  padding: 30px 40px;
  flex-direction: column;
  background-color: rgba(208, 213, 255, 0.5);
`

const FieldBox = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
`

const FieldTitle = styled.p`
  font-size: 22px;
  font-weight: 600;
  display: flex;
  gap: 10px;
`

const Must = styled(FieldTitle)`
  color: red;
`

const phoneInput = {
  height: "55px",
  width: "402px",
  fontSize: "20px",
  borderRadius: "0px",
  border: "1px solid grey"
}

interface User {
  city: string
  grade: string
  email: string
  degree: string
  gender: string
  school: string
  country: string
  telegram: string
  password: string
  firstName: string
  instagram: string
  secondName: string
  dateOfBirth: string
  affiliation: string
  phoneNumber: string
  __typename?: string
}

interface City {
  name: string
  schools: string[]
}

interface Country {
  name: string
  cities: City[]
  colleges: string[]
}

const GET_EDUCATION = gql`
  query {
    allCountries {
      name
      cities {
        name
        schools
      }
      colleges
    }
    allUniversities
  }
`

const NEW_USER = gql`
  mutation($input: UserInput) {
    newUser(input: $input)
  }
`

const EDIT_USER = gql`
  mutation($input: UserInput) {
    editUser(input: $input)
  }
`

const NEW_UNIVERSITY = gql`
  mutation($input: String) {
    newUniversity(input: $input)
  }
`

const NEW_COUNTRY = gql`
  mutation($input: String) {
    newCountry(input: $input)
  }
`

const NEW_CITY = gql`
  mutation($input: CityInput) {
    newCountry(input: $input)
  }
`

const NEW_SCHOOL = gql`
  mutation($input: SchoolInput) {
    newCountry(input: $input)
  }
`

const NEW_COLLEGE = gql`
  mutation($input: CollegeInput) {
    newCountry(input: $input)
  }
`

function FullRegistrationForm() {
  const navigate = useNavigate()
  const currentUser = useContext().user
  const [newUser] = useMutation(NEW_USER)
  const [newCity] = useMutation(NEW_CITY)
  const [editUser] = useMutation(EDIT_USER)
  const [newSchool] = useMutation(NEW_SCHOOL)
  const countries = countryList().getLabels()
  const [newCountry] = useMutation(NEW_COUNTRY)
  const [newCollege] = useMutation(NEW_COLLEGE)
  const [cities, setCities] = useState<City[]>([])
  const [schools, setSchools] = useState<string[]>([])
  const [modal, setModal] = useState<boolean>(false)
  const [newUniversity] = useMutation(NEW_UNIVERSITY)
  const [colleges, setColleges] = useState<string[]>([])
  const { email, password, edit } = useLocation().state
  const [education, setEducation] = useState<Country[]>([])
  const { loading, error, data } = useQuery(GET_EDUCATION)
  const [universities, setUniversities] = useState<string[]>([])
  const { affiliations, courses, degrees, grades, gender } = json.registration
  const [user, setUser] = useState<User>(edit
    ? currentUser
    : {
      city: '',
      school: '',
      email: email,
      firstName: '',
      telegram: '@',
      secondName: '',
      gender: 'Male',
      instagram: '@',
      phoneNumber: '+',
      grade: grades[0],
      degree: degrees[0],
      password: password,
      country: 'Kazakhstan',
      dateOfBirth: '2022-02-22',
      affiliation: affiliations[0]
  })
  
  const NameInput = (value: string) => {
    return value.toLowerCase()
      .replace(/[^a-zA-Z\s]/g, "")
      .replace(/(?<!\p{Lowercase})\p{Lowercase}/gu,
        ch => ch.toUpperCase());
  }

  const setFirstName = (value: string) => {
    setUser({...user, firstName: NameInput(value)})
  }

  const setSecondName = (value: string) => {
    setUser({...user, secondName: NameInput(value)})
  }

  const setDateOfBirth = (value: string) => {
    setUser({...user, dateOfBirth: value})
  }

  const setPhoneNumber = (value: string) => {
    setUser({...user, phoneNumber: value})
  }

  const setCountry = (value: string) => {
    setUser({...user, country: value})
  }

  const setCity = (value: string) => {
    setUser({...user, city: value})
  }

  const setGender = (value: string) => {
    setUser({...user, gender: value})
  }

  const setAffiliation = (value: string) => {
    setUser({...user, affiliation: value})
  }

  const setSchool = (value: string) => {
    setUser({...user, school: value})
  }

  const setGrade = (value: string) => {
    setUser({...user, grade: value})
  }

  const setDegree = (value: string) => {
    setUser({...user, degree: value})
  }

  const setInstagram = (value: string) => {
    setUser({...user, instagram: value ? value : '@'})
  }

  const setTelegram = (value: string) => {
    setUser({...user, telegram: value ? value : '@'})
  }

  const setEmail = (value: string) => {
    setUser({...user, email: value})
  }

  useEffect(() => {
    if (!loading && !error && data) {
      const { allCountries, allUniversities } = data
      setEducation(allCountries)
      setUniversities(allUniversities)
    } else if (!loading && error) {
      alert('apollo server error')
    }
  }, [loading, error, data])

  useEffect(() => {
    const tmpCountry = education?.find(item => item?.name === user.country)
    const tmpCities = tmpCountry?.cities
    const tmpColleges = tmpCountry?.colleges
    tmpCities && setCities(tmpCities)
    tmpColleges && setColleges(tmpColleges)
  }, [user.country, education])
  
  useEffect(() => {
    cities && setCity(edit && cities?.find(item => item?.name === user.city)
      ? user.city
        ? user.city
        : ''
      : cities
        ? cities[0]?.name
        : ''
    )
  }, [cities])

  useEffect(() => {
    const tmpSchools = cities?.find(item => item?.name === user.city)?.schools
    tmpSchools && setSchools(tmpSchools)
  }, [user.city, cities])

  useEffect(() => {
    if (user.affiliation === 'School') {
      schools && setSchool(edit && schools?.find(item => item === user.school)
        ? user.school
          ? user.school
          : ''
        : schools
          ? schools[0]
          : ''
      )
      setTimeout(() => setGrade(grades[0]), 1000)
    } else if (user.affiliation === 'College') {
      colleges && setSchool(edit && colleges?.find(item => item === user.school)
        ? user.school
          ? user.school
          : ''
        : colleges
          ? colleges[0]
          : ''
      )
    } else {
      universities && setSchool(edit && universities?.find(item => item === user.school)
        ? user.school
          ? user.school
          : ''
        : universities
          ? universities[0]
          : ''
      )
      setTimeout(() => setGrade(courses[0]), 1000)
    }
  }, [schools, user.affiliation])

  const renderAffiliation = () => {
    const schoolData = user.affiliation === 'School'
      ? schools
      : user.affiliation === 'College'
        ? colleges
        : universities

    if(user.affiliation !== 'Work' && user.affiliation !== 'Unemployed')
      return <>
        <Select
          notListed
          data={schoolData}
          value={user.school}
          onChange={setSchool}
          title={user.affiliation}
        />
        <Select
          title={user.affiliation === 'School' ? 'Grade' : 'Course'}
          value={user.grade}
          data={user.affiliation === 'School' ? grades : courses}
          onChange={setGrade}
        />
        {user.affiliation === 'University' &&
          <Select
            title='Degree'
            value={user.degree}
            data={degrees}
            onChange={setDegree}
          />
        }
      </>
  }

  const onPress = () => {
    if (edit) {
      delete user.__typename
      editUser({ variables: { input: user } })
        .then(() => setModal(true))
        .catch(() => alert('apollo server error'))
    } else {
      newUser({ variables: { input: user } })
        .then(() => setModal(true))
        .catch(() => alert('apollo server error'))
    }

    if (user.affiliation === 'University' && !universities?.find(item => item === user.school)) {
      newUniversity({ variables: { input: user.school }})
        .catch(() => alert('apollo server error'))
    }

    if (!education?.find(item => item.name === user.country)) {
      newCountry({ variables: { input: user.country }})
        .catch(() => alert('apollo server error'))
    }

    if (!cities?.find(item => item.name === user.city)) {
      newCity({
        variables: {
          input: {
            city: user.city,
            countryName: user.country
      }}})
        .catch(() => alert('apollo server error'))
    }

    if (user.affiliation === 'School' && !schools?.find(item => item === user.school)) {
      newSchool({
        variables: {
          input: {
            school: user.school,
            cityName: user.city,
            countryName: user.country,
      }}})
        .catch(() => alert('apollo server error'))
    }

    if (user.affiliation === 'College' && !colleges?.find(item => item === user.school)) {
      newCollege({
        variables: {
          input: {
            college: user.school,
            countryName: user.country
      }}})
        .catch(() => alert('apollo server error'))
    }
  }

  const onModalPress = () => {
    setModal(false)
    if (edit) {
      navigate('/profile')
    } else {
      navigate('/')
    }
  }

  return (
    <MainContainer>
      <Modal
        title={edit ? 'Done!' : 'Congratulations!'}
        subtitle={edit ? 'Your account details were updated successfully' : 'Now you are a volunteer of New Wave Club! Go check your inbox! You will get an email with a link to our chat where we communicate and work.'}
        buttonTitle={edit ? 'Okay' : 'Hurrah!'}
        isVisible={modal}
        onPress={onModalPress}
      />
      <Title>Fill the form below</Title>
      <Subtitle>Please, make sure that the data is accurate.<br/>It is important for the issuance of your certificate.</Subtitle>
      <Form>
        <Fields>
          <Input
            type='text'
            title='First name'
            value={user.firstName}
            onChange={setFirstName}
            placeholder='Enter your first name'
          />
          <Input
            type='text'
            title='Second name'
            value={user.secondName}
            onChange={setSecondName}
            placeholder='Enter your second name'
          />
          <Input
            type='date'
            title='Date of birth'
            value={user.dateOfBirth}
            onChange={setDateOfBirth}
          />
          <FieldBox>
            <FieldTitle>
              Phone number
              <Must>*</Must>
            </FieldTitle>
            <PhoneInput
              country='kz'
              inputStyle={phoneInput}
              value={user.phoneNumber}
              onChange={p => setPhoneNumber(p)}
            />
          </FieldBox>
          <Select
            title='Country'
            data={countries}
            value={user.country}
            onChange={setCountry}
          />
          <Select
            notListed
            title='City'
            value={user.city}
            onChange={setCity}
            data={cities?.map((item) => {return item?.name})}
          />
          <Select
            title='Gender'
            data={gender}
            value={user.gender}
            onChange={setGender}
          />
          <Select
            title='Affiliation'
            data={affiliations}
            value={user.affiliation}
            onChange={setAffiliation}
          />
          {renderAffiliation()}
          <Input
            type='text'
            title='Instagram username'
            value={user.instagram}
            onChange={setInstagram}
          />
          <Input
            type='text'
            title='Telegram username'
            value={user.telegram}
            onChange={setTelegram}
          />
          {edit && <Input
            type='email'
            title='E-mail'
            value={user.email}
            onChange={setEmail}
          />}
        </Fields>
        <Button onClick={onPress} mode={ButtonMode.PRIMARY}>{edit ? 'save' : 'sign up'}</Button>
      </Form>
    </MainContainer>
  )
}

export default FullRegistrationForm