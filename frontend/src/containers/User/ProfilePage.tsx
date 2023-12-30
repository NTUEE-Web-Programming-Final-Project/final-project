import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { ALL_USERS_QUERY } from "../../graphql";
import { Link, useParams } from "react-router-dom";
import { User } from "@shared/shared_types";

const ProfilePage = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(ALL_USERS_QUERY);
  if (loading) return;
  if (error) return `Error! ${error?.message}`;
  const users = JSON.parse(JSON.stringify(data?.AllUsers));
  if (!id) return;
  const user = users.filter((user: User) => `${user.id}` === id)[0];
  console.log(user);
  return (
    <div className="flex rounded bg-white mt-5 mb-5 justify-center">
      <div className="flex flex-row w-fit">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src={user.photoLink}
              alt="not found"
            />
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <Link to={`./edit`}>
              <button className="text-md font-bold bg-blue-700 mt-0 text-white px-4 py-1 rounded hover:bg-blue-700 mr-2 ">
                edit
              </button>
            </Link>
            <div className="flex mt-2">
              <span className="bg-slate-400 p-1 px-4 rounded text-white center">
                Name
              </span>
            </div>
            <p className="p-1 px-4 rounded">{user.name}</p>

            <div className="flex flex-row space-x-2">
              <span className="bg-slate-400 p-1 px-4 rounded text-white center">
                Introduction
              </span>
            </div>
            <p className="p-1 px-4 rounded">
              {user.introduction ? user.introduction : ":)"}
            </p>

            <div className="flex mt-2">
              <span className="bg-slate-400 p-1 px-4 rounded text-white center">
                StudentId
              </span>
            </div>
            <p className="p-1 px-4 rounded">{user.studentID}</p>

            {/* <div className="flex mt-2">
              <span className="bg-slate-400 p-1 px-4 rounded text-white center">
                PhotoLink
              </span>
            </div>
            <p className="p-1 px-4 rounded">{user.photoLink}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
