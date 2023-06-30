import { useEffect } from 'react'
import { saveAs } from 'file-saver'
import styled from 'styled-components'
import { useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { useContext } from '../../context/Context'
import CameraIcon from '../assets/icons/CameraIcon'
import Button, { ButtonMode } from '../shared/Button'
import ProfileIcon from '../assets/icons/ProfileIcon'
import { GET_CERTIFICATE, NEW_PROFILE_IMAGE } from '../../apollo/actions'

const MainContainer = styled.div`
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`

const Title = styled.p`
  font-size: 5rem;
  font-weight: 500;
`

const Content = styled.div`
  display: flex;
  gap: 30rem;
`

const UserInfo = styled.div`
  display: flex;
  gap: 4rem;
`

const Data = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`

const Field = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  color: #0013BC;
`

const Info = styled(Field)`
  color: black;
`

const Actions = styled(Data)`
  gap: 1rem;
`

const ProfileImage = styled.div`
  display: flex;
  width: 30rem;
  height: 30rem;
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
  width: 30rem;
  height: 30rem;
  opacity: 0;
  cursor: pointer;
`

const EditImage = styled.div`
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 30rem;
  height: 30rem;
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

function Profile() {

  const navigate = useNavigate()
  const { user, refetchUser, compressImage } = useContext()
  const [getCertificate] = useMutation(GET_CERTIFICATE)
  const [profileImage] = useMutation(NEW_PROFILE_IMAGE)

  useEffect(() => {
    refetchUser()
  }, [])

  const uploadImage = async (files: FileList | null ) => {
    if (files) {
      const newImage = files[0]
      const compressedFile = await compressImage(newImage)
      var reader = new FileReader()
      reader.readAsDataURL(compressedFile)
      reader.onload = function () {
        const base64 = reader.result?.toString().split(',')[1]
        profileImage({
          variables: { input: {
            email: user?.email,
            base64: base64
          }
        }}).then(() => refetchUser())
        .catch((err) => {
          console.log(err)
          alert('apollo server error')})
      }
    }
  }

  const editProfile = () => {
    navigate('/fullsignupform', {state: { edit: true }})
  }

  const getCertificatePress = () => {
    getCertificate({
      variables: { input: user?.email }
    }).then((res) => {
      const file = `data:application/pdf;base64,${res.data.getCertificate}`
      saveAs(file, `certificate.pdf`)
    })
    .catch(() => alert('apollo server error'))
  }

  const createEventPress = () => {
    navigate('/newevent')
  }

  const createReportPress = () => {
    navigate('/newreport', { state: { type: 'Clean up', _id: '' } })
  }

  const dateOfBirth = new Date(parseInt(user?.dateOfBirth)).toDateString()

  return (
    <MainContainer>
      <Title>Profile</Title>
      <Content>
        <UserInfo>
          <Data>
            <Field>Full name:</Field>
            <Field>Date of birth:</Field>
            <Field>Gender:</Field>
            <Field>Status:</Field>
            <Field>Volunteering hours:</Field>
            <Field>Country:</Field>
            <Field>City:</Field>
            <Field>Affiliation:</Field>
            {user?.affiliation.type !== 'Work' && user?.affiliation.type !== 'Unemployed' && <>
              <Field>{user?.affiliation.type}:</Field>
              <Field>{user?.affiliation.type === 'School' ? 'Grade' : 'Course'}:</Field>
            </>}
            {user?.affiliation.type === 'University' && <Field>Degree:</Field>}
            <Field>E-mail:</Field>
            <Field>Phone number:</Field>
            <Field>Instagram account:</Field>
            <Field>Telegram username:</Field>
          </Data>
          <Data>
            <Info>{user?.firstName} {user?.secondName}</Info>
            <Info>{dateOfBirth}</Info>
            <Info>{user?.gender}</Info>
            <Info>{user?.type}</Info>
            <Info>{user?.volunteeringHours}</Info>
            <Info>{user?.location.country}</Info>
            <Info>{user?.location.city}</Info>
            <Info>{user?.affiliation.type}</Info>
            {user?.affiliation.type !== 'Work' && user?.affiliation.type !== 'Unemployed' && <>
              <Info>{user?.affiliation.name}</Info>
              <Info>{user?.affiliation.studyYear}</Info>
            </>}
            {user?.affiliation.type === 'University' && <Info>{user?.affiliation.degree}</Info>}
            <Info>{user?.email}</Info>
            <Info>{user?.phoneNumber}</Info>
            <Info>{user?.instagram}</Info>
            <Info>{user?.telegramHandle ?? 'unknown'}</Info>
          </Data>
        </UserInfo>
        <Actions>
          <ProfileImage>
            {user?.photo
              ? <Image src={user?.photo}/>
              : <ProfileIcon/>
            }
            <EditImage>
              <CameraIcon/>
              <EditText>Edit</EditText>
            </EditImage>
            <ImageInput
              type='file'
              onChange={(e) => uploadImage(e.target.files)}
            />
          </ProfileImage>
          <Button
            mode={ButtonMode.PRIMARY}
            onClick={getCertificatePress}
          >get my certificate</Button>
          <Button
            mode={ButtonMode.SECONDARY}
            href='https://t.me/+e_JwRN9vuVs3YWFi'
            target='_blank'
          >join the telegram group</Button>
          <Button
            mode={ButtonMode.DEFAULT}
            onClick={editProfile}
          >edit my profile</Button>
          {user?.type === 'Coordinator' && <>
            <Button
              mode={ButtonMode.DEFAULT}
              onClick={createEventPress}
            >create event</Button>
            <Button
              mode={ButtonMode.DEFAULT}
              onClick={createReportPress}
            >create report</Button>
          </>}
        </Actions>
      </Content>
    </MainContainer>
  )
}

export default Profile