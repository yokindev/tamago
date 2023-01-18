export default function StatusBars({ health, happiness, sleep }) {
  return (
    <div>
      <p>Health: {health}</p>
      <p>Happiness: {happiness}</p>
      <p>Sleep: {sleep}</p>
    </div>
  );
}
