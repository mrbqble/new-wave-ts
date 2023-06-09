import styled from 'styled-components';
import Button, { ButtonMode } from '../shared/Button';
import { useState } from 'react';
import CheckCircle from '../assets/icons/CheckMarkCircle';
import DismissCircle from '../assets/icons/DismissCircle';
import Clock from '../assets/icons/Clock';
import Location from '../assets/icons/Location';
import CheckBox from '../shared/CheckBox/CheckBox';

const Main = styled.main`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
`
const FCol = styled.div`
  width: 50rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const FRow = styled.div`
  border: .1rem solid #DEDEDE;
  display: flex;
  border-radius: 1.2rem;
  border: .1rem solid #DEDEDE;
  padding: 1.8rem;
  gap: 1.8rem;
`
const Avatarka = styled.img`
  aspect-ratio: 1/1;
  border-radius: 50%;
  width: 9rem;
`;

const AvatarTitle = styled.h1`
  font-size: 2.5rem;
`;
const AvatarDescription = styled.p`
  font-size: 1.4rem;
  color: #7B7B7B;
`;
const AvatarText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: .8rem;
`;

const SRow = styled.div`
  border: .1rem solid #DEDEDE;
  border-radius: 1.2rem;
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
const FinanceInv = styled.div`
  border-bottom: .1rem solid #6C6C6C;
  display: flex;
  gap: 1.5rem;
`;
const FinInvWrapper = styled.div`
  padding-bottom: 1.2rem;
  padding-top: .5rem;
`
const FinInvText = styled.div`
  font-size: 2.4rem;
  cursor: pointer;
  font-weight: 700;
`
const FinReport = styled.div`
  display: flex;
`;
const GotSpendDiv = styled.div`
  flex: 1;
`;

interface AmountFinanceReportType {
  color: string
}
const GotSpendAmount = styled.h1<AmountFinanceReportType>`
  font-size: 3.5rem;
  color: ${(props) => props.color==='green' ? '#37B456' : '#FF6767'};

`;
const GotSpendDesc = styled.h2`
  color: #6C6C6C;
  font-size: 1.5rem;
  font-weight: 400;
`;

const FinListExpenses = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const ItemExpense = styled.div`
  display: flex;
`;
const ExpenseAmount = styled.div<AmountFinanceReportType>`
  flex: 1;
  color: ${(props) => props.color==='green' ? '#37B456' : '#FF6767'};
  font-weight: 700;
  text-align: right;
  font-size: 1.5rem;
`
const ExpenseDescription = styled.div`
  flex: 3;
  font-size: 1.5rem;
  font-weight: 500;
  padding-left: 1.3rem;
`;
const ExpenseDate = styled.div`
  flex: 1;
  font-size: 1.5rem;
  opacity: .5;
`;
const InvButtonsDiv = styled.div`
  display: flex;
  gap: 1rem;
`;
const ButWrapInv = styled.div`
  flex: 1;
`;
const InvList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
const InvItem = styled.div`
  display: flex;
  gap: 1.8rem;
`
const InvAmount = styled.div<AmountFinanceReportType>`
  flex: 1;
  text-align: right;
  font-weight: 700;
  font-size: 1.4rem;
  color: ${(props) => props.color==='green' ? '#37B456' : '#FF6767'};

`
const InvDesc = styled.div`
  flex: 3;
  font-weight: 500;
  font-size: 1.4rem;
`

const SCol = styled.div`
  border: .1rem solid #DEDEDE;
  border-radius: 1.2rem;
  width: 65rem;
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
`;
const EventTaskWrapper = styled.div`
  display: flex;
  gap: 1rem;
`
const EventTaskNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FF6767;
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  padding: 0 1rem;
`;
const EventList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const EventItem = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: .1rem solid #7E7E7E;
  gap: 1.4rem;
  padding-bottom: 1.6rem;
`
const EventStatuses = styled.div`
  display: flex;
  gap: 1rem;
`;

interface EventStatusProps {
  color: string,
  backgroundColor: string,
  opacity?: string
}
const EventStatus = styled.div<EventStatusProps>`
  background-color: ${(props) => {
    switch(props.backgroundColor){
      case "red":
        return "#FF6767";
      case "green":
        return "#8EE578";
      case "blue":
        return "#0013BC";
    }
  }};
  color: ${(props) => {
    switch(props.color){
      case "white":
        return `rgba(256, 256, 256, ${props.opacity || '1'})`;
      case "black":
        return `rgba(0, 0, 0, ${props.opacity || '1'})`;
      case "blue":
        return `rgba(0, 19, 188, ${props.opacity || '1'})`;
    }
  }};
  font-weight: 600;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;
  padding: .7rem 1rem;
  border-radius: .5rem;
`;
const NameOfTheEvent = styled.h1`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 19px;
  letter-spacing: -0.015em;
`;
const DateTimeBlock = styled.div`
  display: flex;
  gap: 1.8rem;
`
const DateTime = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: center;
  align-items: center;
  line-height: 140%;
  letter-spacing: -0.015em;
  font-size: 1.4rem;
  color: #7E7E7E;
`

const TaskList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: .8rem;
`
const TaskItem = styled.div`
  padding: 1rem .6rem;
  display: flex;
  gap: 1rem;
`
const TaskDescription = styled.div`
  flex-grow: 1;
`
const TaskHeader = styled.h2`
  line-height: 140%;
  letter-spacing: -0.015em;
  font-size: 1.6rem;
  font-weight: 400;
`
const TaskDescLabels = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: .8rem;
  margin-top: .6rem;
`

interface TaskLabelProps {
  backgroundColor?: string
}
const TaskLabel = styled.div<TaskLabelProps>`
  background-color: ${(props) => props.backgroundColor==='red' ? "#FF6767" : "#E4E4E4"};
  color: ${(props) => props.backgroundColor==='red' ? "white" : "black"};
  padding: .6rem .8rem;
  font-weight: 600;
  font-size: 1.4rem;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: .8rem;
  border-radius: .4rem;
`
const FromWhoImg = styled.img`
  aspect-ratio: 1/1;
  width: 2.2rem;
  border-radius: 50%;
`
const DelegateWrapper = styled.div`
  width: 16rem;
  display: flex;
  align-items: center;
`

function AdminPage() {
  const [fininv, setFininv] = useState<boolean>(true);
  const [eventtask, setEventtask] = useState<boolean>(true);
  return (
    <Main>
      <FCol>
        <FRow>
          <Avatarka src={require('../assets/images/1.png')} />
          <AvatarText>
            <AvatarTitle>Иван Иванов</AvatarTitle>
            <AvatarDescription>Координатор в Алматы</AvatarDescription>
          </AvatarText>
        </FRow>
        <SRow>
          <FinanceInv>
            <FinInvWrapper style={{"borderBottom": fininv ? ".2rem solid #0013BC" : "none", "color": fininv ? "#141414" : "#6C6C6C"}}>
              <FinInvText onClick={() => setFininv(true)}>Финансы</FinInvText>
            </FinInvWrapper>
            <FinInvWrapper style={{"borderBottom": !fininv ? ".2rem solid #0013BC" : "none", "color": !fininv ? "#141414" : "#6C6C6C"}}>
              <FinInvText onClick={() => setFininv(false)}>Инвентарь</FinInvText>
            </FinInvWrapper>
          </FinanceInv>
          {fininv ?
          <><FinReport>
            <GotSpendDiv>
              <GotSpendAmount color={"green"}>1 500,5 ₸</GotSpendAmount>
              <GotSpendDesc>Получено за месяц</GotSpendDesc>
            </GotSpendDiv>
            <GotSpendDiv>
              <GotSpendAmount color={"red"}>1 500,5 ₸</GotSpendAmount>
              <GotSpendDesc>Получено за месяц</GotSpendDesc>
            </GotSpendDiv>
          </FinReport>
          <Button mode={ButtonMode.PRIMARY} >Добавить отчет</Button>
          <FinListExpenses>
            <ItemExpense>
              <ExpenseAmount color="red">-1 500,5</ExpenseAmount>
              <ExpenseDescription>Покупка перчаток</ExpenseDescription>
              <ExpenseDate>21.12.2077</ExpenseDate>
            </ItemExpense>
            <ItemExpense>
              <ExpenseAmount color="red">-1 500,5</ExpenseAmount>
              <ExpenseDescription>Покупка перчаток</ExpenseDescription>
              <ExpenseDate>21.12.2077</ExpenseDate>
            </ItemExpense>
            
          </FinListExpenses>
          <Button mode={ButtonMode.DEFAULT}>Показать все траты</Button>
          </>
            : <>
          <InvButtonsDiv>
            <ButWrapInv><Button mode={ButtonMode.PRIMARY}>Списать</Button></ButWrapInv>
            <ButWrapInv><Button mode={ButtonMode.PRIMARY}>Добавить</Button></ButWrapInv>
          </InvButtonsDiv>
          <InvList>
            <InvItem>
              <InvAmount color="red">-150</InvAmount>
              <InvDesc>5 л бутылок воды</InvDesc>
            </InvItem>
            <InvItem>
              <InvAmount color="red">-150</InvAmount>
              <InvDesc>5 л бутылок воды</InvDesc>
            </InvItem>
            <InvItem>
              <InvAmount color="red">-150</InvAmount>
              <InvDesc>5 л бутылок воды</InvDesc>
            </InvItem>
            <InvItem>
              <InvAmount color="red">-150</InvAmount>
              <InvDesc>5 л бутылок воды</InvDesc>
            </InvItem>
          </InvList>
          <Button mode={ButtonMode.DEFAULT}>Показать весь инвертарь</Button>
            </>
          }
        </SRow>
      </FCol>
      <SCol>
        <FinanceInv>
          <FinInvWrapper style={{"borderBottom": eventtask ? ".2rem solid #0013BC" : "none", "color": eventtask ? "#141414" : "#6C6C6C"}}>
            <EventTaskWrapper>
              <FinInvText onClick={() => setEventtask(true)}>Финансы</FinInvText>
              <EventTaskNumber>2</EventTaskNumber>
            </EventTaskWrapper>
          </FinInvWrapper>
          <FinInvWrapper style={{"borderBottom": !eventtask ? ".2rem solid #0013BC" : "none", "color": !eventtask ? "#141414" : "#6C6C6C"}}>
          <EventTaskWrapper>
            <FinInvText onClick={() => setEventtask(false)}>Задачи</FinInvText>
            <EventTaskNumber>3</EventTaskNumber>
          </EventTaskWrapper>
          </FinInvWrapper>
        </FinanceInv>
        {eventtask ? <>
          
        <Button mode={ButtonMode.PRIMARY}>Создать мероприятие</Button>
        <EventList>
          <EventItem>
            <EventStatuses>
              <EventStatus backgroundColor='green' color='black' opacity='.65'><CheckCircle />Проведено</EventStatus>
              <EventStatus backgroundColor='red' color='white'><DismissCircle />Отчет не сдан</EventStatus>
            </EventStatuses>
            <NameOfTheEvent>Назавание мероприятия</NameOfTheEvent>
            <DateTimeBlock>
              <DateTime><Clock />19:00, 10 сен</DateTime>
              <DateTime><Location />Кочкар-ата</DateTime>
            </DateTimeBlock>
          </EventItem>
          <EventItem>
            <EventStatuses>
              <EventStatus backgroundColor='blue' color='white'><CheckCircle fill="white" opacity='1' />Запланировано</EventStatus>
              <EventStatus backgroundColor='red' color='white'><DismissCircle />Отчет не сдан</EventStatus>
            </EventStatuses>
            <NameOfTheEvent>Назавание мероприятия</NameOfTheEvent>
            <DateTimeBlock>
              <DateTime><Clock />19:00, 10 сен</DateTime>
              <DateTime><Location />Кочкар-ата</DateTime>
            </DateTimeBlock>
          </EventItem>
        </EventList>
        <Button mode={ButtonMode.DEFAULT}>Показать все траты</Button>
        </> : <>
          
        <Button mode={ButtonMode.PRIMARY}>Создать задачу</Button>

        <TaskList>
          <TaskItem>
            <CheckBox />
            <TaskDescription>
              <TaskHeader>Привлечь 10 волонтеров</TaskHeader>
              <TaskDescLabels>
                <TaskLabel backgroundColor='red'>Срочно</TaskLabel>
                <TaskLabel><Clock fill="black" />до 19:00, 10 сен</TaskLabel>
                <TaskLabel><FromWhoImg src={require('../assets/images/1.png')} />от Ивана</TaskLabel>
              </TaskDescLabels>
            </TaskDescription>
            <DelegateWrapper>
              <Button mode={ButtonMode.DEFAULT} padding='1rem 1.5rem'>Делегировать</Button>
            </DelegateWrapper>
          </TaskItem>
          <TaskItem>
            <CheckBox />
            <TaskDescription>
              <TaskHeader>Привлечь 10 волонтеров</TaskHeader>
              <TaskDescLabels>
                <TaskLabel backgroundColor='red'>Срочно</TaskLabel>
                <TaskLabel><Clock fill="black" />до 19:00, 10 сен</TaskLabel>
                <TaskLabel><FromWhoImg src={require('../assets/images/1.png')} />от Ивана</TaskLabel>
              </TaskDescLabels>
            </TaskDescription>
            <DelegateWrapper>
              <Button mode={ButtonMode.DEFAULT} padding='1rem 1.5rem'>Делегировать</Button>
            </DelegateWrapper>
          </TaskItem>
        </TaskList>

        <Button mode={ButtonMode.DEFAULT}>Показать выполненные задачи</Button>
        </>}
      </SCol>
    </Main>
  )
}

export default AdminPage