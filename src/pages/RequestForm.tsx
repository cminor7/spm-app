import NavBar from "../components/NavBar";
import type { NavItem } from "../components/Types";
import grainger_logo from "/grainger_logo.png";
import type { FormField } from "../components/Types";
import FormGrid from "../components/FormGrid";



export default function RequestForm() {

      const navItems: NavItem[] = [
        { label: "Home", path: "/" },
    
        // Button
        {
          label: "Submit",
          isButton: true,
          onClick: () => console.log("Login clicked!"),
        },
      ];

const fields: FormField[] = [
  { name: "firstName", label: "First Name", type: "input" },
  { name: "lastName", label: "Last Name", type: "input" },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    rows: 6,
    spanColumns: 2, // <- spans both columns
  },
  {
    name: "country",
    label: "Country",
    type: "select",
    options: ["USA", "Canada", "UK"],
  },
];


    return (
    <div className="page-container">
        <NavBar items={navItems} logoText="Home" logo={grainger_logo} />

        <FormGrid fields={fields}/>


    </div>
    )
}