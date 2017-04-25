// might need to rewrite the allNotes bcuz of sate skeleton change with addition of notebooks
export const allNotes = ({ notes }) => (
  Object.keys(notes).map(id => notes[id])
);
// replaces allNotes
export const notesByNotebookId = ({ notes }, notebook_id) => (
  notes[notebook_id] ? Object.keys(notes[notebook_id]).map(key => notes[notebook_id][key]) : {}
)

export const allNotebooks = ({ notebooks }) => (
  Object.keys(notebooks).map(id => notebooks[id])
);

// export const findCurrentNotes = ({ })

// filter via done/undone <-- truefalse boolean
export const getFilteredNotes = ({notes, filter}) => {
  let result = [];
  for (let id in notes) {
    if (notes[id].done === filter) {
      result.push(notes[id]);
    }
  }
  return result;
}
