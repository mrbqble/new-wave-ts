import { useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { NEW_REPORT } from '../../apollo/actions';
import { useContext } from '../../context/Context';
import { TrashIcon } from '../assets/icons/TrashIcon';
import Button, { ButtonMode } from '../shared/Button';
import Input from '../shared/Input';
import TextArea from '../shared/TextArea';

const MainContainer = styled.div`
  gap: 4rem;
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
  gap: 4rem;
  display: flex;
  padding: 3rem 4rem;
  flex-direction: column;
  background-color: rgba(208, 213, 255, 0.5);
`;

const Fields = styled.div`
  display: grid;
  gap: 4rem 8rem;
  grid-template-columns: 40.2rem 40.2rem;
`;

const Field = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1rem;
`;

const Duration = styled(Field)`
  flex: initial;
`;

const TimeFields = styled(Field)`
  justify-content: space-between;
`;

const FieldTitle = styled.div`
  font-size: 2.2rem;
  font-weight: 600;
  display: flex;
  gap: 1rem;
`;

const DurationText = styled(FieldTitle)`
  color: #0013bc;
`;

const ImageInput = styled.input`
  opacity: 0;
  width: 402px;
  height: 50px;
  cursor: pointer;
  position: absolute;
`;

const ImageView = styled.div`
  display: flex;
  width: 275px;
  height: 275px;
  overflow: hidden;
  justify-content: center;
  &:hover div {
    opacity: 1;
  }
`;

const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 10px;
  border: 1px solid black;
  background-color: white;
  max-width: 884px;
  font-size: 18px;
`;

const DeleteImage = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  background-color: rgba(255, 0, 0, 0.5);
  width: 275px;
  height: 275px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  color: white;
  font-size: 20px;
  font-weight: 600;
`;

const Image = styled.img``;

interface CleanUp {
  bags: number;
  area: number;
}

interface Collections {
  plastic: number;
  paper: number;
  glass: number;
  metal: number;
}

interface TreePlanting {
  planted: number;
}

interface Report {
  eventID: string;
  description: string;
  actualTimeStarted: string;
  actualTimeEnded: string;
  media: string[];
  details: CleanUp | Collections | TreePlanting;
}

function NewReport() {
  const { compressImage } = useContext();
  const { type, _id } = useLocation().state;
  const [createReport] = useMutation(NEW_REPORT);
  const [details, setDetails] = useState<Collections | CleanUp | TreePlanting>(
    type === 'Clean up'
      ? {
          bags: 0,
          area: 0,
        }
      : type === 'Collections'
      ? {
          plastic: 0,
          paper: 0,
          metal: 0,
          glass: 0,
        }
      : { planted: 0 }
  );
  const [report, setReport] = useState<Report>({
    description: '',
    actualTimeEnded: '',
    actualTimeStarted: '',
    media: [],
    details: details,
    eventID: _id,
  });
  const [duration, setDuration] = useState<number>(0);

  useEffect(() => {
    var h =
      parseInt(report?.actualTimeEnded.split(':')[0]) -
      parseInt(report?.actualTimeStarted.split(':')[0]);
    var m =
      parseInt(report?.actualTimeEnded.split(':')[1]) -
      parseInt(report?.actualTimeStarted.split(':')[1]);
    setDuration(h * 60 + m);
  }, [report?.actualTimeStarted, report?.actualTimeEnded]);

  const setDescription = (value: string) => {
    setReport({ ...report, description: value });
  };

  const setStartTime = (value: string) => {
    setReport({ ...report, actualTimeStarted: value });
  };

  const setEndTime = (value: string) => {
    setReport({ ...report, actualTimeEnded: value });
  };

  const setBags = (value: string) => {
    setDetails({ ...details, bags: parseInt(value) });
  };

  const setArea = (value: string) => {
    setDetails({ ...details, area: parseInt(value) });
  };

  const setPlastic = (value: string) => {
    setDetails({ ...details, plastic: parseInt(value) });
  };

  const setPaper = (value: string) => {
    setDetails({ ...details, paper: parseInt(value) });
  };

  const setGlass = (value: string) => {
    setDetails({ ...details, glass: parseInt(value) });
  };

  const setMetal = (value: string) => {
    setDetails({ ...details, metal: parseInt(value) });
  };

  const setPlanted = (value: string) => {
    setDetails({ ...details, planted: parseInt(value) });
  };

  const uploadImage = async (files: FileList | null) => {
    if (files) {
      const newImage = files[0];
      const compressedFile = await compressImage(newImage);
      var reader = new FileReader();
      reader.readAsDataURL(compressedFile);
      reader.onload = function () {
        const newMedia = reader.result?.toString() as string;
        setReport({ ...report, media: [...report.media, newMedia] });
      };
    }
  };

  const onDelete = (index: number) => {
    const newMedia = report.media;
    newMedia.splice(index, 1);
    setReport({ ...report, media: newMedia });
  };

  const onPress = () => {
    createReport({ variables: { input: report } })
      .then((res) => console.log(res.data.newReport))
      .catch(() => alert('apollo server error'));
  };

  const renderReportFields = () => {
    switch (type) {
      case 'Clean up': {
        const cleanUp = details as CleanUp;
        return (
          <>
            <Input
              type="number"
              title="Total bags collected"
              value={cleanUp.bags}
              onChange={setBags}
            />
            <Input
              type="number"
              title="Cleaned area (m^2)"
              value={cleanUp.area}
              onChange={setArea}
            />
          </>
        );
      }
      case 'Collections': {
        const collections = details as Collections;
        return (
          <>
            <Input
              type="number"
              title="Plastic collected"
              value={collections.plastic}
              onChange={setPlastic}
            />
            <Input
              type="number"
              title="Paper collected"
              value={collections.paper}
              onChange={setPaper}
            />
            <Input
              type="number"
              title="Glass collected"
              value={collections.glass}
              onChange={setGlass}
            />
            <Input
              type="number"
              title="Metal collected"
              value={collections.metal}
              onChange={setMetal}
            />
          </>
        );
      }
      case 'Tree planting': {
        const treePlanting = details as TreePlanting;
        return (
          <Input
            type="number"
            title="Planted number"
            value={treePlanting.planted}
            onChange={setPlanted}
          />
        );
      }
    }
  };

  return (
    <MainContainer>
      <Title>Make a report</Title>
      <Form>
        <Fields>
          <TextArea
            title="Description"
            value=""
            placeholder="Enter the description of report"
            onChange={setDescription}
          />
          <TimeFields>
            <Input
              type="time"
              title="Actual time started"
              value=""
              onChange={setStartTime}
            />
            <Input
              type="time"
              title="Actual time ended"
              value=""
              onChange={setEndTime}
            />
            <Duration>
              <FieldTitle>Actual duration:</FieldTitle>
              <DurationText>
                {Math.floor(duration / 60) > 0 &&
                  Math.floor(duration / 60) + ' hours'}{' '}
                {duration ? duration % 60 : 0} minutes
              </DurationText>
            </Duration>
          </TimeFields>
          {renderReportFields()}
          <Button mode={ButtonMode.DEFAULT}>
            upload media
            <ImageInput
              type="file"
              onChange={(e) => uploadImage(e.target.files)}
            />
          </Button>
        </Fields>
        <Images>
          {report.media.length > 0
            ? report.media.map((item, index) => (
                <ImageView key={index} onClick={() => onDelete(index)}>
                  <Image src={item} />
                  <DeleteImage>
                    <TrashIcon />
                    Delete
                  </DeleteImage>
                </ImageView>
              ))
            : 'There is no media yet'}
        </Images>
        <Button mode={ButtonMode.PRIMARY} onClick={onPress}>
          submit
        </Button>
      </Form>
    </MainContainer>
  );
}

export default NewReport;
