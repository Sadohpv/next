import React, { FC } from "react";
import classNames from "classnames/bind";
import styles from "./UserCard.module.scss";
const cx = classNames.bind(styles);

interface UserCardProps {
  data: IUser | FailResponse;
}

const UserCard: FC<UserCardProps> = ({ data }) => {
  console.log(data);

  if (data.status === 1) {
    return (
      <div className={cx("wrapper")}>
        <div className={cx("box")}>
          <div className={cx("header")}>
            <img
              className={cx("background")}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjAnsxAf7L5vKpgtEdKbV5g9tRvRxMBpohSFI5oQczi_rU7UIRDYpFYgBvv6AQejBi8KQ&usqp=CAU"
              }
            />
            <div className={cx("avatar_box")}>
              <img
                className={cx("avatar")}
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjAnsxAf7L5vKpgtEdKbV5g9tRvRxMBpohSFI5oQczi_rU7UIRDYpFYgBvv6AQejBi8KQ&usqp=CAU"
                }
              />
            </div>
            <div className={cx("name")}>{data.userName}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={cx("wrapper")}>
        <div className={cx("message")}>{data.message}</div>
      </div>
    );
  }
};

export default UserCard;
