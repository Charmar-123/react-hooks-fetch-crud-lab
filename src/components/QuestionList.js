
import QuestionItem from "./QuestionItem";

function QuestionList({list, onDeleteClick, onChangeClick}) {


  const listItems = list.map(function(item) { return(
    <QuestionItem key={item.id} question={item} onDeleteClick={onDeleteClick}/>)
  })


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{listItems}</ul>
    </section>
  );
}

export default QuestionList;
