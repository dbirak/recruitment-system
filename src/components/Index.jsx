import Candidates from "./Candidates";
import { DragDropContext } from "react-beautiful-dnd";
import { useState } from "react";
import Rejected from "./Rejected";
import Recruitment from "./Recruiment";
import Accepted from "./Accepted";
import Navbar from "./Navbar";
import Backdrop from "./Backdrop";
import AddPerson from "./AddPerson";
import Pdf from "./Pdf";

const Index = () => {
  const [BackdropEnable, setBackdropEnable] = useState(false);

  const candidates = [
    {
      id: 1,
      name: "Dominik Birak",
      gender: "male",
      desc: "Kreatywny i wykształcony front-end developer z doświadczeniem w tworzeniu responsywnych stron internetowych.",
    },
    {
      id: 2,
      name: "Anna Kowalska",
      gender: "female",
      desc: "Młoda i ambitna programistka front-end z pasją do tworzenia nowoczesnych stron internetowych.",
    },
    {
      id: 3,
      name: "Monika Nowak",
      gender: "female",
      desc: "Innowacyjna i zorientowana na szczegóły front-end developer z wiedzą na temat najnowszych trendów w projektowaniu stron internetowych.",
    },
    {
      id: 4,
      name: "Jan Domaradzki",
      gender: "male",
      desc: "Doświadczony front-end developer specjalizujący się w tworzeniu interaktywnych i dynamicznych stron internetowych.",
    }
  ];

  const recruitment = [];
  const accepted = [];
  const rejected = [];

  const [candidatesList, setCandidatesList] = useState(candidates);
  const [recruitmentList, setRecruitmentList] = useState(recruitment);
  const [acceptedList, setAcceptedList] = useState(accepted);
  const [rejectedList, setRejectedList] = useState(rejected);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      let items, item;

      if (source.droppableId == "characters1") {
        items = Array.from(candidatesList);
        [item] = items.splice(source.index, 1);
        setCandidatesList(items);
      }

      if (source.droppableId == "characters2") {
        items = Array.from(recruitmentList);
        [item] = items.splice(source.index, 1);
        setRecruitmentList(items);
      }

      if (source.droppableId == "characters3") {
        items = Array.from(acceptedList);
        [item] = items.splice(source.index, 1);
        setAcceptedList(items);
      }

      if (source.droppableId == "characters4") {
        items = Array.from(rejectedList);
        [item] = items.splice(source.index, 1);
        setRejectedList(items);
      }

      if (destination.droppableId == "characters1") {
        items = Array.from(candidatesList);
        items.splice(destination.index, 0, item);
        setCandidatesList(items);
      }

      if (destination.droppableId == "characters2") {
        items = Array.from(recruitmentList);
        items.splice(destination.index, 0, item);
        setRecruitmentList(items);
      }

      if (destination.droppableId == "characters3") {
        items = Array.from(acceptedList);
        items.splice(destination.index, 0, item);
        setAcceptedList(items);
      }

      if (destination.droppableId == "characters4") {
        items = Array.from(rejectedList);
        items.splice(destination.index, 0, item);
        setRejectedList(items);
      }
    } else {
      let items;

      if (source.droppableId == "characters1")
        items = Array.from(candidatesList);
      if (source.droppableId == "characters2")
        items = Array.from(recruitmentList);
      if (source.droppableId == "characters3") items = Array.from(acceptedList);
      if (source.droppableId == "characters4") items = Array.from(rejectedList);

      const [reorderedItem] = items.splice(source.index, 1);

      items.splice(destination.index, 0, reorderedItem);
      if (destination.droppableId == "characters1") setCandidatesList(items);
      else if (destination.droppableId == "characters2")
        setRecruitmentList(items);
      else if (destination.droppableId == "characters3") setAcceptedList(items);
      else if (destination.droppableId == "characters4") setRejectedList(items);
    }
  };

  const addNewPerson = () => {
    setBackdropEnable(true);
  };

  const onClickBackdrop = () => {
    setBackdropEnable(false);
  };

  const addPersonToList = (name, gender, desc) => {
    let id = 0;
    for (let item of candidatesList) {
      if (item.id > id) id = item.id;
    }
    for (let item of recruitmentList) {
      if (item.id > id) id = item.id;
    }
    for (let item of acceptedList) {
      if (item.id > id) id = item.id;
    }
    for (let item of rejectedList) {
      if (item.id > id) id = item.id;
    }
    id++;

    const item = {
      id: id,
      name: name,
      gender: gender == "K" ? "female" : "male",
      desc: desc,
    };

    var items = Array.from(candidatesList);
    items.splice(0, 0, item);
    setCandidatesList(items);

    onClickBackdrop();
  };

  const handleDragStart = (item) => {
    if (!item.source) return;
  };

  const generatePdf = () => {
    console.log(candidatesList);
  }

  return (
    <div>
      {BackdropEnable && (
        <AddPerson
          onClickBackdrop={onClickBackdrop}
          addPerson={addPersonToList}
        />
      )}
      {BackdropEnable && <Backdrop onClickBackdrop={onClickBackdrop} />}

      <DragDropContext
        onDragStart={handleDragStart}
        onDragEnd={handleOnDragEnd}
      >
        <Navbar additem={addNewPerson} candidates={candidatesList} recruitment={recruitmentList} accepted={acceptedList} rejected={rejectedList}/>

        <div className="flex flex-col xl:flex-row xl:justify-between">
          <div className="flex xl:w-1/2 w-full sm:flex-row flex-col justify-around">
            <Candidates
              items={candidatesList}
              droppableId={"characters1"}
              name={"Nowe osoby"}
            />
            <Recruitment
              items={recruitmentList}
              droppableId={"characters2"}
              name={"W rekrutacji"}
            />
          </div>
          <div className="flex xl:w-1/2 w-full sm:flex-row flex-col justify-around">
            <Accepted
              items={acceptedList}
              droppableId={"characters3"}
              name={"Przyjęci"}
            />
            <Rejected
              items={rejectedList}
              droppableId={"characters4"}
              name={"Odrzuceni"}
            />
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};

export default Index;
