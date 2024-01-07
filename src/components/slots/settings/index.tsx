import classNames from "classnames/bind";
import styles from "@/styles/slotsStyle/Setting.module.scss";
const cx = classNames.bind(styles);

function SettingSlotPage() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("main")}>
        <div className={cx("content")}></div>
      </div>
    </div>
  );
}

export default SettingSlotPage;
