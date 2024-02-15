"use client";
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";
import classNames from "classnames/bind";

import styles from "@/styles/pagesStyle/AdminPage.module.scss";
const cx = classNames.bind(styles);

function AdminHome() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div className={cx("wrapper")}>
      Admin Home
      <div>
        <Button variant="primary" onClick={handleClick}>
          Back Home
        </Button>
      </div>
    </div>
  );
}

export default AdminHome;
