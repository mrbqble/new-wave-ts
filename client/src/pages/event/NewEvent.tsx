import styled from "styled-components"
import Button, { ButtonMode } from "../shared/Button"
import { useEffect, useState } from "react"
import data from '../shared/variables.json'
import Input from "../shared/Input"
import CameraIcon from "../assets/icons/CameraIcon"
import ImageIcon from "../assets/icons/ImageIcon"
import TextArea from "../shared/TextArea"
import Selector from "../shared/Selector"
import { useLazyQuery, useMutation } from "@apollo/client"
import { GET_COORDINATORS, GET_COUNTRIES, NEW_EVENT } from "../../apollo/actions"
import MultiSelect, { Option } from "../shared/MultiSelect"
import CreatableMultiSelect from "../shared/CreatableMultiSelect"

const MainContainer = styled.div`
  gap: 40px;
  display: flex;
  padding: 50px 20px;
  align-items: center;
  flex-direction: column;
`

const Title = styled.p`
  font-size: 50px;
  font-weight: 500;
`

const Form = styled.div`
  gap: 40px;
  display: flex;
  padding: 30px 40px;
  flex-direction: column;
  background-color: rgba(208, 213, 255, 0.5);
`

const Fields = styled.div`
  display: grid;
  gap: 40px 80px;
  grid-template-columns: 402px 402px;
`

const Field = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 10px;
`

const Duration = styled(Field)`
  flex: initial;
`

const TimeFields = styled(Field)`
  gap: 0px;
  justify-content: space-between;
`

const FieldTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  display: flex;
  gap: 10px;
`

const Must = styled.p`
  color: red;
`

const EventImage = styled.div`
  display: flex;
  width: 402px;
  height: 402px;
  overflow: hidden;
  justify-content: center;
  &:hover div {
    opacity: 1;
  }
`

const Image = styled.img``

const ImageInput = styled.input`
  position: absolute;
  z-index: 2;
  width: 402px;
  height: 402px;
  opacity: 0;
  cursor: pointer;
`

const EditImage = styled.div`
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 402px;
  height: 402px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`

const EditText = styled.p`
  color: white;
  font-size: 18px;
`

const DurationText = styled(FieldTitle)`
  color: #0013BC;
`

interface City {
  name: string
}

interface Country {
  name: string
  cities: City[]
}

interface Coordinator {
  _id: string
  name: string
}

interface EventType {
  text: string
  type: string
  city: string
  date: string
  title: string
  image?: string
  format: string
  places: number
  country: string
  endTime: string
  addInfo: string
  location: string
  duration: number
  startTime: string
  partners: string[]
  locationLink: string
  coordinators: string[]
}

function NewEvent() {

  const [createEvent] = useMutation(NEW_EVENT)
  const { types, formats, partners } = data.newEvent
  const [cities, setCities] = useState<string[]>([])
  const [getCountries] = useLazyQuery(GET_COUNTRIES)
  const [getCoordinators] = useLazyQuery(GET_COORDINATORS)
  const [countries, setCountries] = useState<Country[]>([])
  const [coordinators, setCoordinators] = useState<Coordinator[]>([])
  const [event, setEvent] = useState<EventType>({
    text: '',
    type: types[0],
    city: '',
    date: '2022-02-22',
    title: '',
    image: '',
    format: formats[0],
    places: 0,
    country: 'Kazakhstan',
    endTime: '',
    addInfo: '',
    location: '',
    duration: 0,
    startTime: '',
    partners: [],
    locationLink: '',
    coordinators: []
  })

  const setTitle = (value: string) => {
    setEvent({...event, title: value})
  }

  const setText = (value: string) => {
    setEvent({...event, text: value})
  }

  const setAddInfo = (value: string) => {
    setEvent({...event, addInfo: value})
  }

  const setType = (value: string) => {
    setEvent({...event, type: value})
  }

  const setFormat = (value: string) => {
    setEvent({...event, format: value})
  }

  const setCountry = (value: string) => {
    setEvent({...event, country: value})
  }

  const setCity = (value: string) => {
    setEvent({...event, city: value})
  }

  const setLocation = (value: string) => {
    setEvent({...event, location: value})
  }

  const setLocationLink = (value: string) => {
    setEvent({...event, locationLink: value})
  }

  const setPlaces = (value: string) => {
    setEvent({...event, places: parseInt(value)})
  }

  const setDate = (value: string) => {
    setEvent({...event, date: value})
  }

  const setStartTime = (value: string) => {
    setEvent({...event, startTime: value})
  }

  const setEndTime = (value: string) => {
    setEvent({...event, endTime: value})
  }

  const uploadImage = (files: FileList | null ) => {
    if (files) {
      const newImage = files[0]
      var reader = new FileReader()
      reader.readAsDataURL(newImage)
      reader.onload = function () {
        setEvent({...event, image: reader.result?.toString()})
      }
    }
  }

  const setCoordinator = (values: Option[]) => {
    setEvent({...event, coordinators: values.map(item => { return item.value })})
  }

  const setPartner = (values: string[]) => {
    setEvent({...event, partners: values})
  }

  useEffect(() => {
    getCountries()
      .then((res) => setCountries(res.data.allCountries))
      .catch(() => alert('apollo server error'))
    getCoordinators()
      .then((res) => setCoordinators(res.data.coordinators))
      .catch(() => alert('apollo server error'))
  }, [])

  useEffect(() => {
    const tmpCities = countries?.find(item => item.name === event.country)?.cities.map((item) => { return item.name})
    if (tmpCities)
      setCities(tmpCities)
  }, [event.country, countries])

  useEffect(() => {
    if (cities)
      setCity(cities[0])
  }, [cities])

  useEffect(() => {
    var h = parseInt(event.endTime.split(":")[0]) - parseInt(event.startTime.split(":")[0])
    var m = parseInt(event.endTime.split(":")[1]) - parseInt(event.startTime.split(":")[1])
    setEvent({...event, duration: h * 60 + m})
  }, [event.startTime, event.endTime])

  const onPress = () => {
    createEvent({ variables: { input: event}})
      .then((res) => console.log(res.data.newEvent))
      .catch((err) => console.log(err))
  }

  return (
    <MainContainer>
      <Title>Make an event</Title>
      <Form>
        <Fields>
          <Input
            title='Title'
            value={event.title}
            onChange={setTitle}
            placeholder='Enter the title'
          />
          <Input
            type='number'
            value={event.places}
            onChange={setPlaces}
            title='Volunteers needed'
            placeholder="Enter number of volunteers needed"
          />
          <Field>
            <FieldTitle>
              Image:
              <Must>*</Must>
            </FieldTitle>
            <EventImage>
              {event.image
                ? <Image src={event.image}/>
                : <ImageIcon/>
              }
              <EditImage>
                <CameraIcon/>
                <EditText>Edit</EditText>
              </EditImage>
              <ImageInput
                type='file'
                onChange={(e) => uploadImage(e.target.files)}
              />
            </EventImage>
          </Field>
          <TimeFields>
            <Input
              type='date'
              title='Date'
              value={event.date}
              onChange={setDate}
            />
            <Input
              type="time"
              title="Time to start"
              value={event.startTime}
              onChange={setStartTime}
            />
            <Input
                type="time"
                title="Time to end:"
                value={event.endTime}
                onChange={setEndTime}
            />
            <Duration>
              <FieldTitle>Duration:</FieldTitle>
                <DurationText>
                  {Math.floor(event.duration / 60) > 0 && Math.floor(event.duration / 60) + ' hours'} {event.duration ? event.duration % 60 : 0} minutes
                </DurationText>
            </Duration>
          </TimeFields>
          <TextArea
            title='Text'
            value={event.text}
            onChange={setText}
            placeholder="Enter the text"
          />
          <TextArea
            must={false}
            value={event.addInfo}
            onChange={setAddInfo}
            title='Additional information'
            placeholder="Enter the additional information"
          />
          <Selector
            title='Type'
            data={types}
            value={event.type}
            onChange={setType}
          />
          <Selector
            title='Format'
            data={formats}
            value={event.format}
            onChange={setFormat}
          />
          <Selector
            title='Country'
            value={event.country}
            onChange={setCountry}
            data={countries.map((item) => { return item.name })}
          />
          <Selector
            title='City'
            data={cities}
            value={event.city}
            onChange={setCity}
          />
          <Input
            title='Location'
            value={event.location}
            onChange={setLocation}
            placeholder='Enter the location'
          />
          <Input
            title='Location link'
            value={event.locationLink}
            onChange={setLocationLink}
            placeholder='Enter the map link of the location'
          />
          <CreatableMultiSelect
            title='Partners'
            data={partners.map(item => {return { value: item, label: item }})}
            onChange={setPartner}
          />
          <MultiSelect
            title='Coordinators'
            data={coordinators.map(item => {return { value: item._id, label: item.name }})}
            onChange={setCoordinator}
          />
        </Fields>
        <Button
          mode={ButtonMode.PRIMARY}
          onClick={onPress}
        >submit</Button>
      </Form>
    </MainContainer>
  )
}

export default NewEvent