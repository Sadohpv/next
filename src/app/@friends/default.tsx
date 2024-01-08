"use client";
import images from "@/assets/images/index";
import classNames from "classnames/bind";
import styles from "@/styles/slotsStyle/defaultFriend.module.scss";
import { CommentIcon } from "@/assets/icons";
const cx = classNames.bind(styles);

export default function DefaultFriendPage() {
  // You can add any UI inside Loading, including a Skeleton.
  // console.log(images);
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("comment")}>
          <span>
            Baka
          </span>
          <CommentIcon />
        </div>
        <img src={images.kaguya.src} alt="Kaguya" />
      </div>
    </>
  );
}
