export interface DropdownProps {
  options: string[];
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  className?: string;
}
