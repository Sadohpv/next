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
import useSWR, { Fetcher } from "swr";
import AppTable from "@/components/app.table";

import { useParams } from "next/navigation";
const cx = classNames.bind(styles);

function DetailUser() {
  const params = useParams();
  console.log(params);

  const fetcher: Fetcher<User, string> = (url: string) =>
    fetch(url).then((response) => response.json());

  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/users/${params.id}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  console.log(data);
  return <div>Detail User with ID = {params.id}</div>;
}

export default DetailUser;
