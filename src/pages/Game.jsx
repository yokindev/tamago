export default function Game() {
  const name = localStorage.getItem("Name");

  return <div>Mi mascota se llama {name}</div>;
}
