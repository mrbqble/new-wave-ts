import { useLazyQuery, useMutation } from '@apollo/client'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  GET_COORDINATORS,
  NEW_EVENT
} from '../../apollo/actions'
import { useContext } from '../../context/Context'
import { CameraIcon } from '../assets/icons/CameraIcon'
import { ImageIcon } from '../assets/icons/ImageIcon'
import Button, { ButtonMode } from '../shared/Button'
import CreatableMultiSelect from '../shared/CreatableMultiSelect'
import Input from '../shared/Input'
import MultiSelect, { Option } from '../shared/MultiSelect'
import Selector from '../shared/Selector'
import TextArea from '../shared/TextArea'
import data from '../shared/variables.json'

const MainContainer = styled.div`
  gap: 4rem;
  display: flex;
  padding: 5rem 2rem;
  align-items: center;
  flex-direction: column;
`

const Title = styled.p`
  font-size: 5rem;
  font-weight: 500;
`

const Form = styled.div`
  gap: 4rem;
  display: flex;
  padding: 3rem 4rem;
  flex-direction: column;
  background-color: rgba(208, 213, 255, 0.5);
`

const Fields = styled.div`
  display: grid;
  gap: 4rem 8rem;
  grid-template-columns: 40.2rem 40.2rem;
`

const Field = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1rem;
`

const Duration = styled(Field)`
  flex: initial;
`

const TimeFields = styled(Field)`
  gap: 0rem;
  justify-content: space-between;
`

const FieldTitle = styled.div`
  font-size: 2.2rem;
  font-weight: 600;
  display: flex;
  gap: 1rem;
`

const Must = styled.p`
  color: red;
`

const EventImage = styled.div`
  display: flex;
  width: 40.2rem;
  height: 40.2rem;
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
  width: 40.2rem;
  height: 40.2rem;
  opacity: 0;
  cursor: pointer;
`

const EditImage = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 40.2rem;
  height: 40.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`

const EditText = styled.p`
  color: white;
  font-size: 1.8rem;
`

const DurationText = styled(FieldTitle)`
  color: #0013bc;
`

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
  plannedEndTime: string
  plannedStartTime: string
  registrationEndTime: string
  registrationStartTime: string
  duration: number
  partners: string[]
  organizators: string[]
}

function NewEvent() {
  const { compressImage } = useContext()
  const [createEvent] = useMutation(NEW_EVENT)
  const { types, formats, partners } = data.newEvent
  const [getCoordinators] = useLazyQuery(GET_COORDINATORS)
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
    duration: 0,
    partners: [],
    organizators: [],
    plannedEndTime: '',
    plannedStartTime: '',
    registrationEndTime: '',
    registrationStartTime: ''
  })

  const setTitle = (value: string) => {
    setEvent({ ...event, title: value })
  }

  const setText = (value: string) => {
    setEvent({ ...event, text: value })
  }

  const setType = (value: string) => {
    setEvent({ ...event, type: value })
  }

  const setFormat = (value: string) => {
    setEvent({ ...event, format: value })
  }

  const setCity = (value: string) => {
    setEvent({ ...event, city: value })
  }

  const setPlaces = (value: string) => {
    setEvent({ ...event, places: parseInt(value) })
  }

  const setDate = (value: string) => {
    setEvent({ ...event, date: value })
  }

  const setStartTime = (value: string) => {
    setEvent({ ...event, plannedStartTime: value })
  }

  const setEndTime = (value: string) => {
    setEvent({ ...event, plannedEndTime: value })
  }

  const uploadImage = async (files: FileList | null) => {
    if (files) {
      const newImage = files[0]
      const compressedFile = await compressImage(newImage)
      var reader = new FileReader()
      reader.readAsDataURL(compressedFile)
      reader.onload = function () {
        setEvent({ ...event, image: reader.result?.toString() })
      }
    }
  }

  const setCoordinator = (values: Option[]) => {
    setEvent({
      ...event,
      organizators: values.map((item) => {
        return item.value
      }),
    })
  }

  const setPartner = (values: string[]) => {
    setEvent({ ...event, partners: values })
  }

  useEffect(() => {
    getCoordinators()
      .then((res) => setCoordinators(res.data.organizators))
      .catch(() => alert('apollo server error'))
  }, [])

  useEffect(() => {
    var h =
      parseInt(event.plannedEndTime.split(':')[0]) -
      parseInt(event.plannedStartTime.split(':')[0])
    var m =
      parseInt(event.plannedEndTime.split(':')[1]) -
      parseInt(event.plannedStartTime.split(':')[1])
    setEvent({ ...event, duration: h * 60 + m })
  }, [event.plannedStartTime, event.plannedEndTime])

  const onPress = () => {
    createEvent({ variables: { input: event } })
      .then((res) => console.log(res.data.newEvent))
      .catch((err) => console.log(err))
  }

  return (
    <MainContainer>
      <Title>Make an event</Title>
      <Form>
        <Fields>
          <Input
            title="Title"
            value={event.title}
            onChange={setTitle}
            placeholder="Enter the title"
          />
          <Input
            type="number"
            value={event.places}
            onChange={setPlaces}
            title="Volunteers needed"
            placeholder="Enter number of volunteers needed"
          />
          <Field>
            <FieldTitle>
              Image:
              <Must>*</Must>
            </FieldTitle>
            <EventImage>
              {event.image ? <Image src={event.image} /> : <ImageIcon />}
              <EditImage>
                <CameraIcon />
                <EditText>Edit</EditText>
              </EditImage>
              <ImageInput
                type="file"
                onChange={(e) => uploadImage(e.target.files)}
              />
            </EventImage>
          </Field>
          <TimeFields>
            <Input
              type="date"
              title="Date"
              value={event.date}
              onChange={setDate}
            />
            <Input
              type="time"
              title="Time to start"
              value={event.plannedStartTime}
              onChange={setStartTime}
            />
            <Input
              type="time"
              title="Time to end:"
              value={event.plannedEndTime}
              onChange={setEndTime}
            />
            <Duration>
              <FieldTitle>Duration</FieldTitle>
              <DurationText>
                {Math.floor(event.duration / 60) > 0 &&
                  Math.floor(event.duration / 60) + ' hours'}{' '}
                {event.duration ? event.duration % 60 : 0} minutes
              </DurationText>
            </Duration>
          </TimeFields>
          <TextArea
            title="Text"
            value={event.text}
            onChange={setText}
            placeholder="Enter the text"
          />
          <Selector
            title="Type"
            data={types}
            value={event.type}
            onChange={setType}
          />
          <Selector
            title="Format"
            data={formats}
            value={event.format}
            onChange={setFormat}
          />
          <Input
            title="City"
            value={event.city}
            onChange={setCity}
            placeholder='Enter the city'
          />
          <CreatableMultiSelect
            title="Partners"
            data={partners?.map((item) => {
              return { value: item, label: item }
            })}
            onChange={setPartner}
          />
          <MultiSelect
            title="Coordinators"
            data={coordinators?.map((item) => {
              return { value: item._id, label: item.name }
            })}
            onChange={setCoordinator}
          />
        </Fields>
        <Button mode={ButtonMode.PRIMARY} onClick={onPress}>
          submit
        </Button>
      </Form>
    </MainContainer>
  )
}

export default NewEvent
