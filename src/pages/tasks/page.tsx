import { useState, useEffect } from "react";
import { getData } from "../../utils/fetch";

const Mytask = () => {
  const [groups, setgroups] = useState<any[]>([]);

  const gettasksgroup = async () => {
    const result = await getData("/api/v1/mytaskgroups")
    if (result.status === 200) {
      setgroups(result.data)
    }
  };
  useEffect(() => {
    gettasksgroup();
  }, []);

  return (
    <>
      <div className="bg-white p-5 rounded-xl shadow-lg">
        <h1 className="text-2xl">My Tasks</h1>
      </div>
      <div className="relative h-full">
        <div className="absolute right-0 left-0 top-0 bottom-0 flex p-5 rounded-xl overflow-auto shadow-lg mt-5 bg-slate-200 h-full">
          {groups.map((data, key) => {
            return (
              <div key={key} className="w-64 flex-none bg-slate-200 p-2 h-full">
                <div className="text-green-800 bg-blue-200 rounded-t-lg px-2 py-2 text-4xl">
                  {data.name}
                </div>
                <div className="space-y-3 mt-2">
                  {data.Task.map((task: any) => (
                    <div key={task.id} className="bg-white rounded-md p-2">
                      <div>{task.title}</div>
                      <p>{task.desc}</p>
                    </div>
                  ))}
                  <button className="bg-blue-400 py-1 px-2 rounded-lg text-white hover:bg-blue-500 w-full">
                    Add Task
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Mytask;
