import { useEffect, useState } from "react";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";
// import Modal from "react-bootstrap/Modal";
import { Modal } from "react-bootstrap";
import { mutate } from "swr";
interface IProps {
  showModal: boolean;
  edit?: boolean;
  user?: User | null;
  setUserInfor: ((value: User | null) => void) ;
  setShowModal: (value: boolean) => void;
}
function CreateModal({
  showModal,
  setShowModal,
  edit = false,
  user = null,
  setUserInfor,
}: IProps) {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
//   console.log(user);
  useEffect(() => {
    if (edit === true) {
      if (user) {
        setName(user.name);
        setUserName(user.username);
        setEmail(user.email);
      }
    }
  }, [user]);

  const handleCloseModal = () => {

      setUserInfor(null);
      setShowModal(false);
  };
  const handleSubmit = ()=>{
    //Call API ADD or Edit 
    // mutate("https://jsonplaceholder.typicode.com/users") 
    // same link with api to get data to refresh the data after change
    
  }
  return (
    <Modal
      show={showModal}
      onHide={handleCloseModal}
      backdrop="static"
      keyboard={false}
    >
      <ModalHeader closeButton>
        <ModalTitle>Modal title</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup className="mb-3">
            <FormLabel>Name</FormLabel>
            <FormControl
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <FormLabel>User Name</FormLabel>
            <FormControl
              type="text"
              placeholder="User Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <FormLabel>Email address</FormLabel>
            <FormControl
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button variant="outline-secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="outline-primary" onClick={handleSubmit}>Understood</Button>
      </ModalFooter>
    </Modal>
  );
}

export default CreateModal;
