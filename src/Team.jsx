import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(11);

  const handleAdd = () => {
    const totalPlayer = team + 1;
    setTeam(totalPlayer);
  };
  const handleReduce = () => {
    if (team > 11) {
      const totalPlayer = team - 1;
      setTeam(totalPlayer);
    }
  };
  const teamStyle = {
    border: "2px solid aqua",
    margin: "15px",
    padding: "15px",
    borderRadius: "15px",
  };
  return (
    <div style={teamStyle}>
      <h3>Players: {team}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
}
