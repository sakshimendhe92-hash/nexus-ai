import { FaBell, FaUserCircle } from "react-icons/fa";

function Topbar() {
  return (
    <div className="bg-slate-900 p-5 flex justify-between items-center rounded-2xl">

      <h2 className="text-3xl font-bold text-white">
        Dashboard
      </h2>

      <div className="flex items-center gap-5">

        <FaBell className="text-2xl text-cyan-400 cursor-pointer" />

        <FaUserCircle className="text-4xl text-white cursor-pointer" />

      </div>

    </div>
  );
}

export default Topbar;