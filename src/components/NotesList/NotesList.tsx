import Note from "../Note/Note";
const NotesList = ({ notes }) => {
  const note = {
    title: "title",
    body: "body",
    color: "pink",
  };
  return (
    <>
      {notes.length > 0 &&
        notes.map((note) => (
          <Note key={note.id} title={note.title} body={note.body} color={note.color} />
        ))}
    </>
  );
};

export default NotesList;
