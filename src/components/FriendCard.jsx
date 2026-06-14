import { Link } from "react-router";

const FriendCard = ({ friend }) => {
  return (
    <Link to={`/${friend.id}`}>
    <div className="bg-white rounded-lg shadow-sm place-items-center p-6 space-y-3">
      <div className="">
        <img className="rounded-full" src={friend.picture} alt="women" />
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <h3 className="text-xl font-semibold text-gray-900">{friend.name}</h3>
        <p className="text-gray-500 text-sm">
          {friend.days_since_contact}d ago
        </p>
        <div className="flex gap-2 flex-wrap justify-center items-center">
          {friend.tags.map((tag,index) => (
            <div key={index} className="p-2 bg-green-200 rounded-2xl text-sm font-medium">
              {tag.toUpperCase()}
            </div>
          ))}
        </div>
        {friend.status == "overdue" ? (
          <div className="badge badge-error text-white text-sm font-medium">Overdue</div>
        ) : friend.status == "almost due" ? (
          <div className="badge badge-warning text-white text-sm font-medium">Almost Due</div>
        ) : (
          <div className="badge badge-success text-white text-sm font-medium">On-Track</div>
        )}
      </div>
    </div>
    </Link>
    
  );
};

export default FriendCard;
