import React, { FC } from "react";
import classNames from "classnames/bind";
import styles from "./UserCard.module.scss";
import {
  AddFriendIcon,
  HeartIcon,
  IsFriendIcon,
  PhotoIcon,
  ProfileIcon,
  SandClockIcon,
  VideoIcon,
} from "@/assets/icons";

import TippyCustom from "@/hooks/customTooltip";
import { useEffect, useState } from "react";
import BodyUser from "./bodyUserCard";

const cx = classNames.bind(styles);

interface UserCardProps {
  data: IUser | FailResponse;
}

const UserCard: FC<UserCardProps> = ({ data }) => {
  console.log(data);
  const [isFriend, setIsFriend] = useState<boolean | undefined>(false);
  const [page, setPage] = useState<number>(0);

  const handleMakeFriend = (value: any) => {
    if (value === undefined) {
      setIsFriend(undefined);
      alert("Send Add Friend Request !");
    }
    if (value === false) {
      setIsFriend(false);
      alert("Unfriend !");
    }
    if (value === true) {
      setIsFriend(false);
      alert("Cancel Add Friend !");
    }
  };
  if (data.status !== 0) {
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
              <div className={cx("action")}>
                <div className={cx("name")}>
                  <img
                    className={cx("avatar")}
                    src={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjAnsxAf7L5vKpgtEdKbV5g9tRvRxMBpohSFI5oQczi_rU7UIRDYpFYgBvv6AQejBi8KQ&usqp=CAU"
                    }
                  />
                  <span>
                    <p>{data.userName} Kusakari Kusakari</p>
                  </span>
                </div>

                <div className={cx("button_box")}>
                  {isFriend === false && (
                    <TippyCustom content="Add Friend" place="bottom">
                      <div
                        className={cx("button")}
                        onClick={() => handleMakeFriend(undefined)}
                      >
                        <AddFriendIcon height="16" width="16" />
                      </div>
                    </TippyCustom>
                  )}
                  {isFriend === true && (
                    <TippyCustom content="Unfriend" place="bottom">
                      <div
                        className={cx("button")}
                        onClick={() => handleMakeFriend(false)}
                      >
                        <IsFriendIcon height="20" width="20" />
                      </div>
                    </TippyCustom>
                  )}
                  {isFriend === undefined && (
                    <TippyCustom content="Cancel Request" place="bottom">
                      <div
                        className={cx("button")}
                        onClick={() => handleMakeFriend(true)}
                      >
                        <SandClockIcon height="20" width="20" />
                      </div>
                    </TippyCustom>
                  )}
                  <TippyCustom content="Follow" place="bottom">
                    <div className={cx("button")}>
                      <HeartIcon height="18" width="18" />
                    </div>
                  </TippyCustom>
                  <TippyCustom content="Profile" place="bottom">
                    <div className={cx("button")} onClick={() => setPage(0)}>
                      <ProfileIcon height="21" width="21" />
                    </div>
                  </TippyCustom>
                  <TippyCustom content="Photo" place="bottom">
                    <div className={cx("button")} onClick={() => setPage(1)}>
                      <PhotoIcon height="18" width="18" />
                    </div>
                  </TippyCustom>
                  <TippyCustom content="Video" place="bottom">
                    <div className={cx("button")} onClick={() => setPage(2)}>
                      <VideoIcon height="18" width="18" />
                    </div>
                  </TippyCustom>
                </div>
              </div>
            </div>
          </div>
          <BodyUser page={page} />
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
