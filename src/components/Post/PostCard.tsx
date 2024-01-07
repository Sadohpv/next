"use client";
import classNames from "classnames/bind";
import styles from "./PostCard.module.scss";
import { useAppDispatch } from "@/hooks/hooks";
import { holdInforUserRedux } from "@/redux/actions/inforAction";
const cx = classNames.bind(styles);

type IPost = {
  id: number | null;
};

function PostCard({ id = null }: IPost) {
  const dispatch = useAppDispatch();
  const handleShowInfor = () => {
    // alert(id);
    if (typeof id == "number") {
      dispatch(holdInforUserRedux(id));
    }
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header_post")}>
        <div className={cx("infor")}>
          <div className={cx("avatar")} onClick={handleShowInfor}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-1DGTWVGWz1g85qoHDAzzuU1R7m0L_qDAew&usqp=CAU" />
          </div>
          <div>
            <div className={cx("name")} onClick={handleShowInfor}>
              <span>Kusa Kaori</span>
            </div>
            <div className={cx("time")}>
              <span>11 months ago</span>
            </div>
          </div>
        </div>

        <div className={cx("content")}>
          <span>
            Hero lost everything in the End. But a Villain lost everything from
            the Start You won't be alone in the future Happiness must be taken
            and i will take mine No matter how long doesn't it take ? If it's
            worthy keep waiting
          </span>
        </div>
      </div>

      <div className={cx("img_post")}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-1DGTWVGWz1g85qoHDAzzuU1R7m0L_qDAew&usqp=CAU" />
      </div>
      <div className={cx("action")}>
        <div className={cx("statistics")}>
          <div>
            <span>2110K</span>
          </div>
        </div>
        <div className={cx("but_func")}>
          <div className={cx("button")}>Like</div>
          <div className={cx("button")}>Comment</div>
          <div className={cx("button")}>Shared</div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
