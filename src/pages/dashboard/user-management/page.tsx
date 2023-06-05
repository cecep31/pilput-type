import React, { useState, useEffect } from "react";
import Logged from "../../../components/layouts/Logged";
import Modal from "../../../components/user/Modal";
import { getData, deleteData } from "../../../utils/fetch";

const apihost = process.env.NEXT_PUBLIC_API_HOST;

const ManageUser = () => {
  const [users, setusers] = useState<any[]>([]);
  const [username, setusername] = useState<string>();
  const [email, setemail] = useState<string>();
  const [password, setpassword] = useState<string>();
  const [repassword, setrepassword] = useState<string>();
  const [modaluser, setmodaluser] = useState(false);
  const hoststorage = process.env.NEXT_PUBLIC_STORAGE;

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const response = await getData("/api/v1/users");
    console.log(response.status);
    if (response.status >= 200 && response.status <= 299) {
      setusers(response.data);
    }
  }

  async function deleteUser(id: string) {
    const response = await deleteData(apihost + "/api/v1/users/" + id);
    if (response.status === 200) {
      alert("Succes delete user");
    } else {
      alert("Failed delete user");
    }
  }

  function showModaluser() {
    setmodaluser(true);
  }

  function closeModaluser() {
    setmodaluser(false);
  }

  async function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    getUsers();
  }

  return (
    <Logged>
      <div className="">
        <header className="px-5 py-4 border-b border-gray-100 h-full">
          <span className="font-semibold text-gray-800">Users</span>
          <button
            className="ml-3 bg-green-600 text-white py-2 px-4 rounded-xl hover:bg-green-700"
            onClick={showModaluser}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
              />
            </svg>
          </button>
        </header>
        <div className="p-3 h-full">
          <div className="overflow-x-auto h-full">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                <tr>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Username</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Name</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Email</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Super admin</div>
                  </th>

                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Action</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                {users.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            {user.image ? (
                              <img
                                className="rounded-full"
                                src={hoststorage + user.image}
                                width="40"
                                height="40"
                                alt="Philip Harbach"
                              />
                            ) : (
                              <img
                                className="rounded-full"
                                src="https://placeimg.com/640/480/any"
                                width="40"
                                height="40"
                                alt="Philip Harbach"
                              />
                            )}
                          </div>
                          <div className="font-medium text-gray-800">
                            {user.username}
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{user.name}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{user.email}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap ">
                        <div className="text-left font-semibold">
                          {user.issuperadmin ? (
                            <span className="text-purple-900">Yes</span>
                          ) : (
                            <span className="text-blue-700">No</span>
                          )}
                        </div>
                      </td>

                      <td className="p-2 whitespace-nowrap">
                        <div id={user.id} className="text-lg text-center">
                          <div className="tooltip" data-tip="Delete This User">
                            <button
                              className="bg-transparent text-red-400 hover:text-red-600"
                              onClick={() => {
                                deleteUser(user.id);
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {modaluser && (
        <Modal>
          <form onSubmit={submitHandler}>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                User Name
              </label>
              <input
                type="text"
                value={username}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setusername(e.target.value);
                }}
                placeholder="User Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setemail(e.target.value);
                }}
                required
                placeholder="example@domain.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Password
              </label>
              <input
                value={password}
                type="password"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                placeholder="Password"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Retype Password
              </label>
              <input
                required
                value={repassword}
                type="password"
                onChange={(e) => {
                  setrepassword(e.target.value);
                }}
                placeholder="Retype Password"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div>
              <button
                type="submit"
                className="btn hover:shadow-form rounded-md bg-[#6A64F1] py-2 px-8 text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={closeModaluser}
                className="btn hover:shadow-form ml-2 rounded-md bg-gray-500 py-2 px-8 text-base font-semibold text-white outline-none"
              >
                Close
              </button>
            </div>
          </form>
        </Modal>
      )}
    </Logged>
  );
};

export default ManageUser;
