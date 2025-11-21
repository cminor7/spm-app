import { useState } from "react";
import NavBar from "../components/NavBar";
import type { NavItem } from "../components/Types";
import EmailForm from "../components/EmailForm";

export default function Home() {
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
    <div>
      <NavBar items={navItems} logoText="Menu" />
    </div>
  );
}
