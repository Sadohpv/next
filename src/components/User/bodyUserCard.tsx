import classNames from "classnames/bind";
import styles from "./bodyUserCard.module.scss";
import { FC, useState, useEffect } from "react";
const cx = classNames.bind(styles);

interface BodyUserProps {
  page: number;
}

const BodyUser: FC<BodyUserProps> = ({ page }) => {
  useEffect(() => {}, []);

  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("main")}>
          <div className={cx("title")}>
            {page === 0 && <span>Profile</span>}
            {page === 1 && <span>Photo</span>}
            {page === 2 && <span>Video</span>}
            {page === 3 && <span>Post</span>}
          </div>
        </div>
        <div className={cx("body")}>
            <div className={cx("item")}>
                
            </div>
        </div>
      </div>
    </>
  );
};

export default BodyUser;
