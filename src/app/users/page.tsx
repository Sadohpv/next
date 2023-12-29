"use client";
import {
  Container,
  DropdownDivider,
  DropdownItem,
  Nav,
  NavDropdown,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "@/styles/header.module.scss";
import Link from "next/link";
import { useEffect } from "react";
import useSWR from "swr";
import AppTable from "@/components/app.table";
const cx = classNames.bind(styles);

function UserPage() {
  const fetcher = (url: string) =>
    fetch(url).then((response) => response.json());

  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (!data) {
    return <div>.....IsLoading</div>;
  }
  return (
    <>
      <AppTable users={data} />
    </>
  );
}

export default UserPage;
