import "./UserCard.css";

function UserCard({ user }) {
  return (
    <div className="user-card">
      <img
        className="user-card-avatar"
        src={`https://robohash.org/${user.id}`}
        alt={user.name}
      />
      <div>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Idade: {user.age}</p>
      </div>
    </div>
  );
}

export default UserCard;
