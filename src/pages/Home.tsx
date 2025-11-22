import { useState } from "react";
import NavBar from "../components/NavBar";
import type { NavItem } from "../components/Types";
import AppGrid from "../components/AppGrid";
import {useNavigate } from "react-router-dom";
import "../css/Layout.css"
import grainger_logo from "/grainger_logo.png";

const icons = import.meta.glob("../assets/icons/*", {
  eager: true,
  import: "default",
});

const iconMap: Record<string, string> = {};

for (const path in icons) {
  const name = path.split("/").pop()?.split(".")[0]!;
  iconMap[name] = icons[path] as string;
}




export default function Home() {

    
const navigate = useNavigate();

const apps = [
  { name: "Mass Email", icon: iconMap.mail, onClick: () => navigate("/MassEmail") },
  { name: "Reminder Emails", icon: iconMap.clock },
  { name: "Request Form", icon: iconMap.document, onClick: () => navigate("/RequestForm") },
  { name: "Settings", icon: "/icons/settings.png" },
  { name: "Photos", icon: "/icons/photos.png" },
  { name: "Terminal", icon: "/icons/terminal.png" },
  { name: "Notes2", icon: "/icons/notes.png" },
  { name: "Settings2", icon: "/icons/settings.png" },
  { name: "Photos2", icon: "/icons/photos.png" },
  { name: "Terminal2", icon: "/icons/terminal.png" }
];


  const navItems: NavItem[] = [
    { label: "Home", path: "/MassEmail" },

    {
      label: "Services",
      children: [
        { label: "Web Development", path: "/web" },
        { label: "Mobile Apps", path: "/mobile" },
        { label: "UI/UX Design", path: "/design" },
      ],
    },

    // Button
    {
      label: "Login",
      isButton: true,
      onClick: () => console.log("Login clicked!"),
    },
  ];

  return (


    <div className="page-container">
        <NavBar items={navItems} logoText="Home" logo={grainger_logo}/>

        <AppGrid apps={apps} />


    </div>


  );
}
