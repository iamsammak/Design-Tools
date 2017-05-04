json.extract! notebook, :id, :title, :description, :user_id

json.notes do
  notebook.notes.each do |note|
    json.set! note.id do
      json.partial! 'api/notes/note', note: note
    end
  end
end
