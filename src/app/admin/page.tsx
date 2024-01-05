'use client'
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";
function AdminHome() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div>
      Admin Home
      <div>
        <Button variant="primary" onClick={handleClick}>Back Home</Button>
      </div>
      
    </div>
  );
}

export default AdminHome;
