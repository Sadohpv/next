import classNames from "classnames/bind";
import styles from "@/styles/slotsStyle/Infor.module.scss";
import { useAppSelector } from "@/hooks/hooks";
import testService from "@/services/testService";
import { useEffect, useState } from "react";
import { type } from "os";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
const cx = classNames.bind(styles);

function InforSlotPage({}) {
  const id_infor = useAppSelector((state) => state.infor.hold_infor);
  // console.log(id_infor[id_infor.length - 1]);
  const [data, setData] = useState<IUser | null>({
    id: undefined,
    userName: undefined,
    avatar: undefined,
    email: undefined,
    firstName: undefined,
    lastName: undefined,
  });
  const fetchData = async () => {
    const res = await testService.handleGetDataUserService(
      id_infor[id_infor.length - 1]
      // 10
    );
    if (res && res.status !== 400) {
      setData(res.reg);
    } else {
      setData(null);
    }
  };
  useEffect(() => {
    fetchData();
  }, [id_infor]);

  if (data != null) {
    return (
      <div className={cx("wrapper")}>
        <div className={cx("main")}>
          <div className={cx("content")}>
            Infor page
            {/* {Math.floor(Math.random() * 2) === 1 && <>{data.reg.status}</>}
             */}
            {data !== undefined && <p>{data.userName}</p>}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={cx("wrapper")}>
        <div className={cx("main")}>
          <div className={cx("content")}>
          
          </div>
        </div>
      </div>
    );
  }
}

export default InforSlotPage;
