import { LuArchive } from "react-icons/lu";
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from "react-icons/ri";
import { useLoaderData, useParams } from "react-router";
import { FiPhoneCall, FiVideo } from "react-icons/fi";
import { MdOutlineTextsms } from "react-icons/md";

const FriendDetails = () => {
  const params = useParams();
  console.log(params.id);
  const friendsData = useLoaderData();
  const data = friendsData.find((friend) => friend.id == params.id);
  console.log(data.name);
  const dueDate = new Date(data.next_due_date + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" });

  return (
    <div className="bg-[#F8FAFC]">
      <div className="container mx-auto py-20">
        <div className="grid grid-cols-5 grid-rows-7 gap-4">
          <div className="bg-white rounded-lg shadow-md col-span-2 row-span-4 p-6 place-items-center space-y-3">
            <img className="rounded-full" src={data.picture} alt={data.name} />
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-900 text-center">
                {data.name}
              </h3>
              <div className="flex justify-center items-center">
                {data.status == "overdue" ? (
                  <div className="badge badge-error text-white text-sm font-medium place-items-center">
                    Overdue
                  </div>
                ) : data.status == "almost due" ? (
                  <div className="badge badge-warning text-white text-sm font-medium">
                    Almost Due
                  </div>
                ) : (
                  <div className="badge badge-success text-white text-sm font-medium">
                    On-Track
                  </div>
                )}
              </div>
              <div className="flex gap-2 flex-wrap justify-center items-center">
                {data.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="p-2 bg-green-200 rounded-2xl text-sm font-medium"
                  >
                    {tag.toUpperCase()}
                  </div>
                ))}
              </div>
            </div>
            <p className="text-gray-500 text-center font-inter">"{data.bio}"</p>
            <p className="text-gray-500 text-center"> Preferred: email</p>
          </div>
          <div className="bg-white shadow-md rounded-lg row-span-2 place-content-center place-items-center space-y-2">
            <p className="text-gray-900 text-3xl font-semibold">{data.days_since_contact}</p>
            <p className="text-gray-500 text-lg text-center">Days Since Contact</p>
          </div>
          <div className="bg-white shadow-md rounded-lg row-span-2 place-content-center place-items-center space-y-2">
            <p className="text-gray-900 text-3xl font-semibold">{data.goal}</p>
            <p className="text-gray-500 text-lg text-center">Goal (Days)</p>
          </div>
          <div className="bg-white shadow-md rounded-lg row-span-2 place-content-center place-items-center space-y-2">
            <p className="text-gray-900 text-3xl font-semibold">{dueDate}</p>
            <p className="text-gray-500 text-lg text-center">Next Due</p>
          </div>
          <div className="bg-white shadow-md rounded-lg col-span-3 row-span-2 p-6">
            <div className="flex justify-between space-y-6">
              <h4 className="text-xl text-green-950 font-medium">Relationship Goal</h4>
              <button className="btn">Edit</button>
              </div>
              <p className="text-gray-500 text-lg">Connect every <span className="font-bold text-gray-900">{data.goal} days</span></p>           
          </div>
          <div className="bg-white shadow-md rounded-lg col-span-2 p-4 text-gray-900 flex justify-center items-center gap-2">
            <RiNotificationSnoozeLine /> <span className="font-medium">Snooze 2 weeks</span>

          </div>
          <div className="bg-white shadow-md rounded-lg col-span-3 row-span-3 p-6 space-y-4">
            <h3 className="text-xl text-green-950 font-medium">Quick Check-In</h3>
            <div className="grid grid-cols-3 h-full pb-15 gap-4">
              <div className="bg-[#F8FAFC] p-4 space-y-2 place-items-center place-content-center rounded-lg shadow-sm">
                <FiPhoneCall />
                <p className="text-gray-900 text-lg">Call</p>
              </div>
              <div className="bg-[#F8FAFC] p-4 space-y-2 place-items-center place-content-center rounded-lg shadow-sm">
                <MdOutlineTextsms />
                <p className="text-gray-900 text-lg">Text</p>
              </div>
              <div className="bg-[#F8FAFC] p-4 space-y-2 place-items-center place-content-center rounded-lg shadow-sm">
                <FiVideo />
                <p className="text-gray-900 text-lg">Video</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg col-span-2 p-4 text-gray-900 flex justify-center items-center gap-2">
            <LuArchive /> <span className="font-medium">Archive</span>
          </div>
          <div className="bg-white shadow-md rounded-lg col-span-2 p-4 text-red-600 flex justify-center items-center gap-2">
            <RiDeleteBin6Line /> <span className="font-medium">Delete</span>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
