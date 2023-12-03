export const Accordion = ({ isActive, question, answer, setActive }) => {
  return (
    <li>
      <div onClick={setActive}>
        {isActive ? (
          <button aria-label="close"></button>
        ) : (
          <button aria-label="show"></button>
        )}
        <p>{question}</p>
      </div>
      {isActive && <p>{answer}</p>}
    </li>
  );
};
