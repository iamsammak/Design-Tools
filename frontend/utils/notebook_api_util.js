export const fetchNotebooks = (user_id, success, error) => (
  $.ajax({
    method: 'GET',
    url: 'api/notebooks',
    data: {user_id},
    success,
		error
  })
)

export const fetchNotebook = (id, success, error) => (
  $.ajax({
    method: 'GET',
    url: `/api/notebooks/${id}`,
    success,
		error
  })
);

export const createNotebook = (notebook, success, error) => (
 $.ajax({
    method: 'POST',
    url: '/api/notebooks',
    data: notebook,
    success,
		error
  })
);

export const updateNotebook = (notebook, success, error) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/notebooks/${notebook.id}`,
    data: { notebook },
    success,
		error
  })
);

export const deleteNotebook = (notebook, success, error) => (
  $.ajax({
    method: 'DELETE',
    url: `api/notebooks/${notebook.id}`,
    success,
		error
  })
);
