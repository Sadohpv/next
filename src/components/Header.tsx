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
import AppTable from "./app.table";
const cx = classNames.bind(styles);

function Header() {
  return (
    <>
      <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
        <Container>
          <NavbarBrand href="#home">React-Bootstrap</NavbarBrand>
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/admin" className="nav-link">
                Admin
              </Link>
              <Link href="/users" className="nav-link">
                Link
              </Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <DropdownItem href="#action/3.1">Action</DropdownItem>
                <DropdownItem href="#action/3.2">Another action</DropdownItem>
                <DropdownItem href="#action/3.3">Something</DropdownItem>
                <DropdownDivider />
                <DropdownItem href="#action/3.4">Separated link</DropdownItem>
              </NavDropdown>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
