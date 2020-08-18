export async function fetchToDos() {
  const response = await fetch("http://localhost:3333/todos");
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();

  const toDos = result.map((tasks) => ({
    task: tasks.title,
    id: tasks.id,
  }));

  return toDos;
}
