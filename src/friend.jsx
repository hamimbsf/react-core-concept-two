export default function Friend({ friend }) {
  const { name, email, phone } = friend;
  const { street, city } = friend.address;
  const boxStyle = {
    border: "2px aqua solid",
    marginBottom: "10px",
    padding: "15px",
    borderRadius: "15px",
  };
  return (
    <div style={boxStyle}>
      <h4>Name:{name}</h4>
      <p>Email:{email}</p>
      <p>Phone:{phone}</p>
      <p>Address: {street}</p>
      <p>City: {city}</p>
    </div>
  );
}
