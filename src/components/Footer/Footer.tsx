"use client";
import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
} from "react-bootstrap";
import classNames from "classnames/bind";
import Link from "next/link";
import { useEffect } from "react";
import useSWR from "swr";
// import AppTable from "./app.table";
import styles from "./Footer.module.scss";
import { EditInfor, LetterIcon, PlanePaperIcon, SeedingIcon } from "@/assets/icons";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { changeSlotLeftRedux } from "@/redux/actions/slotAction";
const cx = classNames.bind(styles);
const funcLeft = [
  {
    id: 1,
    name: "Infor",
    icon: <EditInfor width="20px" height="20px" />,
    iconActive: (
      <EditInfor width="20px" height="20px" fill="var(--active-color)" />
    ),
  },
  {
    id: 2,
    name: "Response",
    icon: <LetterIcon width="20px" height="20px" />,
    iconActive: (
      <LetterIcon width="20px" height="20px" fill="var(--active-color)" />
    ),
  },
  {
    id: 3,
    name: "Request",
    icon: <PlanePaperIcon width="20px" height="20px" />,
    iconActive: (
      <PlanePaperIcon width="20px" height="20px" fill="var(--active-color)" />
    ),
  },
  {
    id: 2110,
    name: "Missing",
    icon: <SeedingIcon width="20px" height="20px" />,
    iconActive: (
      <SeedingIcon width="20px" height="20px" fill="var(--active-color)" />
    ),
  },
];
function Footer() {
  const pathname = usePathname();
  const slotProp = useAppSelector((state) => state.slot);
  const dispatch = useAppDispatch();
  const handleChangeSlot = (id: number) => {
    if (slotProp.slot_left != id) {
      dispatch(changeSlotLeftRedux(id));
    }
  };
  return (
    <>
      <Navbar fixed="bottom" className={cx("navbar")}>
        <div className={cx("navbar_box", "br-b-r")}>
          {funcLeft.map((link) => (
            <div
              key={link.name}
              className={cx(
                "nav_item",
                slotProp.slot_left === link.id && "active"
              )}
            >
              <div
                className={cx("nav_button")}
                onClick={() => handleChangeSlot(link.id)}
              >
                {slotProp.slot_left === link.id ? link.iconActive : link.icon}
              </div>
            </div>
          ))}
        </div>
        <div className={cx("navbar_box", "pierce")}></div>
        <div className={cx("navbar_box", "br-b-l", "reverse")}></div>
      </Navbar>
    </>
  );
}

export default Footer;
