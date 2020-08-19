export async function fetchToDos() {
  const response = await fetch("http://localhost:3333/todos");
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();

  return result;
}

export async function postToDos(todo) {
  console.log(todo);
  const response = await fetch("http://localhost:3333/todos", {
    method: "POST",

    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();

  return result;
}
