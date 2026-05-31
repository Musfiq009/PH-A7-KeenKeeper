import { FiPlus } from "react-icons/fi";
import { useLoaderData } from "react-router";

const Dashboard = () => {
    const friendsData=useLoaderData();
    console.log(friendsData);
  return (
    <div className="bg-[#F8FAFC]">
      <div className="container mx-auto py-20 space-y-10">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-5xl text-gray-900 font-bold">
              Friends to keep close in your life
            </h1>
            <p className="text-gray-500">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button className="flex justify-around items-center btn bg-green-900 text-white font-semibold">
              <FiPlus />
              Add a Friend
            </button>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-4 gap-6">
            <div className="stats shadow bg-white">
              <div className="stat text-center">
                <div className="stat-value">10</div>
                <div className="stat-desc">Total Friends</div>
              </div>
            </div>
            <div className="stats shadow bg-white">
              <div className="stat text-center">
                <div className="stat-value">3</div>
                <div className="stat-desc">On Track</div>
              </div>
            </div>
            <div className="stats shadow bg-white">
              <div className="stat text-center">
                <div className="stat-value">6</div>
                <div className="stat-desc">Need Attention</div>
              </div>
            </div>
            <div className="stats shadow bg-white">
              <div className="stat text-center">
                <div className="stat-value">12</div>
                <div className="stat-desc">Interactions This Month</div>
              </div>
            </div>
          </div>
        </div>
         <div className="divider my-10 text-gray-500"></div>
         <div>
            <h3 className="font-semibold text-2xl text-gray-900">Your Friends</h3>
            <div>

            </div>
         </div>
      </div>
    </div>
  );
};

export default Dashboard;
