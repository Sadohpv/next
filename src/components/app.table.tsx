"use client";

import { Button, Table } from "react-bootstrap";
import CreateModal from "./create.modal";
import { useState } from "react";
import Link from "next/link";
interface IProps {
  users: User[];
}

const AppTable = (props: IProps) => {
  const { users } = props;
  const [userInfor, setUserInfor] = useState<User | null>(null);
  const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false);

  const [showModal, setShowModal] = useState<boolean>(false);
  // console.log(users);

  const handleClickEdit = (user: any) => {
    // console.log("here");
    setShowUpdateModal(true);
    setUserInfor(user);
  };
  const handleDelete = (user : any)=>{
    if(confirm(`Do you want delete Mr/Mrs ${user.username}`)){
        alert("Nice Delete");
    }
  }
  return (
    <>
      <div
        className="mb-3 mt-3"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h3
          style={{
            lineHeight: "37.6px",
          }}
        >
          Table User
        </h3>
        <Button variant="outline-success" onClick={() => setShowModal(true)}>
          Add new
        </Button>
      </div>
      <Table bordered hover size="sm">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th>{user.id}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Button className="ml-3" variant="outline-primary" size="sm">
                  <Link href={`/users/${user.id}`}>View</Link>
                </Button>

                <Button
                  className="ml-3"
                  variant="warning"
                  size="sm"
                  onClick={() => handleClickEdit(user)}
                >
                  Edit
                </Button>
                <Button className="ml-3" variant="outline-danger" size="sm"
                onClick={()=>handleDelete(user)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <CreateModal
        user={null}
        edit={false}
        showModal={showModal}
        setShowModal={setShowModal}
        setUserInfor={setUserInfor}
      />
      <CreateModal
        user={userInfor}
        edit
        showModal={showUpdateModal}
        setShowModal={setShowUpdateModal}
        setUserInfor={setUserInfor}
      />
    </>
  );
};

export default AppTable;
