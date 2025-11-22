import {useState} from "react";
import NavBar from "../components/NavBar";
import type { NavItem } from "../components/Types";
import EmailForm from "../components/EmailForm";
import StatusBar from "../components/StatusBar";
import grainger_logo from "/grainger_logo.png";
import "../css/Layout.css"


export default function MassEmail() {

  const [progress, setProgress] = useState<{ current: number; total: number } | null>(null);
  const [statusMessage, setStatusMessage] = useState("Ready");
  const [icon, setIcon] = useState<"info" | "loading" | "success">("info");

    const [liveMode, setLiveMode] = useState(false);

    const navItems: NavItem[] = [
        { label: "Home", path: "/" },

        {
        label: "Attachments",
        children: [
            { label: "Add file(s)", path: "/web" },
            { label: "Add folder", path: "/mobile" },
        ],
        },

        // Slider toggle
        {
        label: "Live",
        isToggle: true,
        toggleValue: liveMode,
        onToggle: (v) => setLiveMode(v),
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

        // Change the message when completed
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

            <NavBar items={navItems} logoText="Home" logo={grainger_logo}/>
            
            <EmailForm />

            <StatusBar
                message={statusMessage}
                icon={icon}
                progress={progress || undefined}
            />
           

        </div>
    )
}