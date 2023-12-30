import { useLazyQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import {
  ALL_USERS_QUERY,
  UPDATE_USER_MUTATION,
  UPDATE_USER_PROFILE_MUTATION,
} from "../../graphql";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const { id } = useParams();
  if (!id) throw new Error("id is undefined");
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("");
  const [intro, setIntor] = useState("");
  const [studentID, setStudentID] = useState("");
  const [photoLink, setPhotoLink] = useState("");

  const [loadExpenseStatus, { loading: allLoading, error: allError }] =
    useLazyQuery(ALL_USERS_QUERY);

  const [updateUser, { loading, error }] = useMutation(
    UPDATE_USER_PROFILE_MUTATION,
  );

  const handleUpdate = async () => {
    if (!id) return;
    if (!name) return;
    if (!intro) return;
    if (!studentID) return;
    if (!photoLink) return;
    if (loading) return "Submitting...";
    if (error) return `Submission error! ${error.message}`;
    console.log(name, intro);

    const editedUser = await updateUser({
      variables: {
        updateUserProfileId: parseInt(id),
        userProfileInput: {
          name: name,
          introduction: intro,
          photoLink: photoLink,
          studentID: studentID,
        },
      },
    });
    setEdit(false);
    if (allLoading) return <div>Loading...</div>;
    if (allError) return <div>{allError.message}</div>;
    let queryUser = await loadExpenseStatus();
    console.log(queryUser.data?.AllUsers);
    window.location.reload();
  };

  return (
    <div className="flex rounded bg-white mt-5 mb-5 justify-center">
      <div className="flex flex-row w-fit">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            />
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            {!edit && (
              <button
                className="text-md font-bold bg-blue-700 mt-0 text-white px-4 py-1 rounded hover:bg-blue-700 mr-2 "
                onClick={() => setEdit(true)}
              >
                edit
              </button>
            )}
            {edit && (
              <button
                className="text-md font-bold bg-blue-700 mt-0 text-white px-4 py-1 rounded hover:bg-blue-700 mr-2 "
                onClick={() => handleUpdate()}
              >
                save
              </button>
            )}
            <div className="flex mt-2">
              <span className="bg-slate-400 p-1 px-4 rounded text-white center">
                Name
              </span>
            </div>
            {!edit && <p className="p-1 px-4 rounded">name</p>}
            {edit && (
              <input
                className="p-1 px-4 rounded"
                type="text"
                id="name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
                placeholder="Search something.."
              />
            )}

            <div className="flex flex-row space-x-2">
              <span className="bg-slate-400 p-1 px-4 rounded text-white center">
                Introduction
              </span>
            </div>
            {!edit && <p className="p-1 px-4 rounded">{":)"}</p>}
            {edit && (
              <textarea
                value={intro}
                onChange={(event) => {
                  setIntor(event.target.value);
                }}
              ></textarea>
            )}
            <div className="flex mt-2">
              <span className="bg-slate-400 p-1 px-4 rounded text-white center">
                StudentId
              </span>
            </div>
            {!edit && <p className="p-1 px-4 rounded">bxxxxxxxx</p>}
            {edit && (
              <input
                className="p-1 px-4 rounded"
                type="text"
                id="photoLink"
                value={studentID}
                onChange={(event) => {
                  setStudentID(event.target.value);
                }}
                placeholder="Search something.."
              />
            )}

            <div className="flex mt-2">
              <span className="bg-slate-400 p-1 px-4 rounded text-white center">
                PhotoLink
              </span>
            </div>
            {!edit && (
              <p className="p-1 px-4 rounded">https://www.google.com/</p>
            )}
            {edit && (
              <input
                className="p-1 px-4 rounded"
                type="text"
                id="photoLink"
                value={photoLink}
                onChange={(event) => {
                  setPhotoLink(event.target.value);
                }}
                placeholder="Search something.."
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
