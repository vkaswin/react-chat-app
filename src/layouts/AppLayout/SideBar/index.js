import React, { useLayoutEffect, useRef } from "react";
import { useRouter } from "hooks";
import { NavLink } from "react-router-dom";
import { classNames } from "utils";
import { Avatar, DropDown, Tooltip } from "components";

import styles from "./SideBar.module.scss";

export const SideBar = ({ theme, toggleTheme }) => {
  let tabRef = useRef();

  let indicatorRef = useRef();

  const { pathName } = useRouter();

  const tabs = [
    {
      icon: "bx-user-circle",
      label: "Profile",
      to: "/profile",
    },
    {
      icon: "bx-conversation",
      label: "Chats",
      to: "/chats",
    },
    {
      icon: "bxs-user-detail",
      label: "Contacts",
      to: "/contacts",
    },
    {
      icon: "bx-phone-call",
      label: "Calls",
      to: "/calls",
    },
    {
      icon: "bx-cog",
      label: "Settings",
      to: "/settings",
    },
  ];

  const dropdown = [
    {
      label: "Profile",
      icon: "bx-user-circle",
      to: "profile",
    },
    {
      label: "Settings",
      icon: "bx-cog",
      to: "settings",
    },
    {
      label: "Change Password",
      icon: "bx-lock-open",
      to: "change-password",
    },
    {
      label: "Logout",
      icon: "bx-log-out-circle",
      to: "login",
    },
  ];

  useLayoutEffect(() => {
    let index = tabs.findIndex(({ to }) => to === pathName);

    const { matches } = window.matchMedia(`(max-width: 768px)`);

    let { clientHeight, offsetTop, offsetLeft, clientWidth } =
      tabRef.current?.children[index];

    if (matches) {
      indicatorRef.current.style.width = `${clientWidth}px`;
      indicatorRef.current.style.left = `${offsetLeft}px`;
    } else {
      indicatorRef.current.style.height = `${clientHeight}px`;
      indicatorRef.current.style.top = `${offsetTop}px`;
    }
  }, [pathName]);

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <i className="bxs-message-alt-detail"></i>
      </div>
      <div className={styles.nav_wrapper} ref={tabRef}>
        {tabs.map(({ icon, label, to }, index) => {
          return (
            <NavLink
              key={index}
              to={to}
              className={({ isActive }) =>
                classNames(styles.nav_item, {
                  [styles.active]: isActive,
                })
              }
            >
              <i
                className={classNames(icon, styles.nav_icon)}
                id={`nav-${index}`}
              ></i>
              <Tooltip
                offset={20}
                placement="right-center"
                selector={`#nav-${index}`}
              >
                <span>{label}</span>
              </Tooltip>
            </NavLink>
          );
        })}
        <div className={classNames(styles.nav_item, styles.theme)}>
          <div className={styles.nav_icon}>
            {theme === "light" ? (
              <i className="bx-moon" onClick={toggleTheme("dark")}></i>
            ) : (
              <i className="bx-sun" onClick={toggleTheme("light")}></i>
            )}
          </div>
        </div>
        <div
          id="avatar"
          className={classNames(styles.nav_item, styles.profile)}
        >
          <Avatar
            src="https://themesbrand.com/doot/layouts/assets/images/users/avatar-1.jpg"
            size={40}
            outline
          />
        </div>
        <DropDown strategy="fixed" selector="#avatar" placement="top-center">
          {dropdown.map(({ label, icon, to }, index) => {
            return (
              <NavLink key={index} to={to}>
                <DropDown.Item className={styles.avatar_option}>
                  <span>{label}</span>
                  <i className={icon}></i>
                </DropDown.Item>
              </NavLink>
            );
          })}
        </DropDown>
        <div ref={indicatorRef} className={styles.tab_indicator}></div>
      </div>
    </div>
  );
};

export default SideBar;
