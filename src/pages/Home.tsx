import { useState } from "react";
import NavBar from "../components/NavBar";
import type { NavItem } from "../components/Types";
import AppGrid from "../components/AppGrid";
import {useNavigate } from "react-router-dom";
import "../css/Layout.css"


export default function Home() {

    
const navigate = useNavigate();

const apps = [
  { name: "Mass Email", icon: "src/assets/email_icon.svg", onClick: () => navigate("/MassEmail") },
  { name: "Calendar", icon: "/icons/calendar.png" },
  { name: "Notes", icon: "/icons/notes.png" },
  { name: "Settings", icon: "/icons/settings.png" },
  { name: "Photos", icon: "/icons/photos.png" },
  { name: "Terminal", icon: "/icons/terminal.png" },
  { name: "Notes2", icon: "/icons/notes.png" },
  { name: "Settings2", icon: "/icons/settings.png" },
  { name: "Photos2", icon: "/icons/photos.png" },
  { name: "Terminal2", icon: "/icons/terminal.png" }
];



  const [darkMode, setDarkMode] = useState(false);

  const navItems: NavItem[] = [
    { label: "Home", path: "/" },

    {
      label: "Services",
      children: [
        { label: "Web Development", path: "/web" },
        { label: "Mobile Apps", path: "/mobile" },
        { label: "UI/UX Design", path: "/design" },
      ],
    },

    // Slider toggle
    {
      label: "Dark Mode",
      isToggle: true,
      toggleValue: darkMode,
      onToggle: (v) => setDarkMode(v),
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
        <NavBar items={navItems} logoText="Menu" />

        <AppGrid apps={apps} />


    </div>


  );
}
