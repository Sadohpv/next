"use client";
import { Nav, Navbar } from "react-bootstrap";
import { useRouter } from "next/router";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Link from "next/link";
import { useEffect } from "react";
import useSWR from "swr";
import { useSelector, useDispatch } from "react-redux";
import { usePathname } from "next/navigation";
import {
  BellNotifyFullIcon,
  BellNotifyIcon,
  HomeIcon,
  ListUserIcon,
  LoginIcon,
  LogoutIcon,
  SettingIcon,
} from "@/assets/icons";
import { RootState } from "@/redux/store";
import {
  changeSlotLeftRedux,
  changeSlotRightRedux,
} from "@/redux/actions/slotAction";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
const cx = classNames.bind(styles);

const navLinks = [
  { name: "Home", href: "/", icon: <HomeIcon width="20px" height="20px" /> },
  {
    name: "Admin",
    href: "/admin",
    icon: <SettingIcon width="20px" height="20px" />,
  },
  {
    name: "User",
    href: "/user",
    icon: <ListUserIcon width="20px" height="20px" />,
  },
];
const funcLinks = [
  {
    id: 3,
    name: "Login",
    icon: <LoginIcon width="20px" height="20px" />,
    iconActive: <LogoutIcon width="20px" height="20px" />,
  },

  {
    id: 2,
    name: "Admin",
    icon: <SettingIcon width="20px" height="20px" />,
    iconActive: (
      <SettingIcon width="20px" height="20px" fill="var(--active-color)" />
    ),
  },
  {
    id: 1,
    name: "Notify",
    icon: <BellNotifyIcon width="20px" height="20px" />,
    iconActive: (
      <BellNotifyFullIcon
        width="20px"
        height="20px"
        fill="var(--active-color)"
      />
    ),
  },
];

function Header() {
  const pathname = usePathname();

  const slotProp = useAppSelector((state) => state.slot);
  console.log(slotProp);
  const dispatch = useAppDispatch();
  const handleChangeSlot = (id: number) => {
    if (slotProp.slot_right != id) {
      dispatch(changeSlotRightRedux(id));
    }
  };
  return (
    <>
      <Navbar fixed="top" className={cx("navbar")}>
        <div className={cx("navbar_box", "br-b-r")}>
          <Nav className={cx("nav_item")}>
            <Link href="/">Ziik</Link>
          </Nav>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Nav
                key={link.name}
                className={cx("nav_item", isActive && "active")}
              >
                <Link href={link.href} className="nav-link">
                  {link.icon}
                </Link>
              </Nav>
            );
          })}
        </div>
        <div className={cx("navbar_box", "pierce")}></div>
        <div className={cx("navbar_box", "br-b-l", "reverse")}>
          {funcLinks.map((link) => (
            <div
              key={link.name}
              className={cx(
                "nav_item",
                slotProp.slot_right === link.id && "active"
              )}
            >
              <div
                className={cx("nav_button")}
                onClick={() => handleChangeSlot(link.id)}
              >
                {slotProp.slot_right === link.id ? link.iconActive : link.icon}
              </div>
            </div>
          ))}
        </div>
      </Navbar>
    </>
  );
}

export default Header;
