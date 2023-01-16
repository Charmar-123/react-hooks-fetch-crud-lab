import React, { useState, useEffect} from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(res => res.json())
      .then(list => setList(list))
  }, [])
  const [page, setPage] = useState("List");

  const handleFormSubmit = (formData) =>{
    setList([...list, formData])
  }

  const handleDeleteQuestion = (deletedQuestion) => {
    const updatedQuestionList = list.filter(listItem => listItem.id !== deletedQuestion.id);
    setList(updatedQuestionList)
  }
const handleChangeAnswer = () =>{
  setList(list)
}

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onFormSubmit={handleFormSubmit} /> : <QuestionList list={list} onDeleteClick={handleDeleteQuestion} onChangeClick={handleChangeAnswer}/>}
    </main>
  );
}

export default App;
