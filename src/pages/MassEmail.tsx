import React, {useState} from "react";
import NavBar from "../components/NavBar";
import type { NavItem } from "../components/Types";
import EmailForm from "../components/EmailForm";
import StatusBar from "../components/StatusBar";
import "../css/Layout.css"


export default function MassEmail() {

  const [progress, setProgress] = useState<{ current: number; total: number } | null>(null);
  const [statusMessage, setStatusMessage] = useState("Ready");
  const [icon, setIcon] = useState<"info" | "loading" | "success">("info");

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
        label: "Live",
        isToggle: true,
        toggleValue: darkMode,
        onToggle: (v) => setDarkMode(v),
        },

        // Button
        {
        label: "Send",
        isButton: true,
        /*onClick: () => console.log("Login clicked!"),*/
        onClick: () => startProgress(),
        },
    ];

  const startProgress = () => {
    setStatusMessage("Processing...");
    setIcon("loading");

    let current = 0;
    const total = 300;

    setProgress({ current, total });

    const interval = setInterval(() => {
      current += 10;

      if (current > total) {
        clearInterval(interval);

        // 🔥 Change the message when completed
        setStatusMessage("Completed!");
        setIcon("success");

        // Hide progress bar after finishing (optional)
        setProgress(null);

        return;
      }

      setProgress({ current, total });
    }, 200);
  };

    return (
        <div className="page-container">

            <NavBar items={navItems} logoText="Mass Email" />
            
            <EmailForm />

            <StatusBar
                message={statusMessage}
                icon={icon}
                progress={progress || undefined}
            />
           

        </div>
    )
}