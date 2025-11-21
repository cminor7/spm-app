export type NavItem = {
  label: string;

  // Normal link
  path?: string;

  // Dropdown children
  children?: NavItem[];

  // Button
  isButton?: boolean;
  onClick?: () => void;

  // Slider toggle
  isToggle?: boolean;
  toggleValue?: boolean;
  onToggle?: (value: boolean) => void;
};
