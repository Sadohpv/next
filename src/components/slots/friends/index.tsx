import classNames from "classnames/bind";
import styles from "@/styles/slotsStyle/Infor.module.scss";
import { useAppSelector } from "@/hooks/hooks";
import testService from "@/services/testService";
const cx = classNames.bind(styles);

function InforSlotPage() {
  const id_infor = useAppSelector((state) => state.infor.hold_infor);
  // console.log(id_infor[id_infor.length - 1]);
  const fetchData = async () => {
    const data = await testService.handleGetAllNotifyService(
      id_infor[id_infor.length - 1]
    );
    console.log(data);
  };
  fetchData();
  return (
    <div className={cx("wrapper")}>
      <div className={cx("main")}>
        <div className={cx("content")}>
          Infor page
          {/* {Math.floor(Math.random() * 2) === 1 && <>{data.reg.status}</>} */}
        </div>
      </div>
    </div>
  );
}

export default InforSlotPage;
