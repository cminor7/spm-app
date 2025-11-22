// Nav item for links, dropdowns, buttons, and toggles
export type NavItem = {
  label: string;
  path?: string;                // Normal link
  children?: NavItem[];         // Dropdown items
  isButton?: boolean;
  onClick?: () => void;
  isToggle?: boolean;
  toggleValue?: boolean;
  onToggle?: (value: boolean) => void;
};

// Props for NavBar component
export interface NavBarProps {
  items: NavItem[];
  logoText?: string;
  logo?: string; // optional logo path or imported asset
}

// Form field definition
export interface FormField {
  name: string;
  label: string;
  type: "input" | "textarea" | "select";
  placeholder?: string;
  options?: string[];
  rows?: number;        // for textarea
  spanColumns?: number; // number of columns to span
}

// Props for FormGrid component
export interface FormGridProps {
  fields: FormField[];
  columns?: number; // optional override
}
