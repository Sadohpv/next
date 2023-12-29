import Image from "next/image";
import Link from "next/link";
import classNames from "classnames/bind";
import styles from "@/styles/test.module.scss";

const cx = classNames.bind(styles);
export default function Home() {
  return <div className={cx("page")}></div>;
}
