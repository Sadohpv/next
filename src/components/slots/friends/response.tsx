import classNames from "classnames/bind";
import styles from "@/styles/slotsStyle/Request.module.scss";
const cx = classNames.bind(styles);
function FriendResponseSlotPage() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("main")}>
        <div className={cx("content")}>
          Response page
        </div>
      </div>
    </div>
  );
}

export default FriendResponseSlotPage;
