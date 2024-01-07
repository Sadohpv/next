import classNames from "classnames/bind";
import styles from "@/styles/slotsStyle/Request.module.scss";
const cx = classNames.bind(styles);

function FriendRequestSlotPage() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("main")}>
        <div className={cx("content")}>
          Request page
        </div>
      </div>
    </div>
  );
}

export default FriendRequestSlotPage;
