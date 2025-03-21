import { ReactNode } from "react";

// Тип для элементов с label и value
export interface Option {
  label: string;
  value: number | string;
}

// Тип для props кнопок
export interface ButtonProps {
  variant?: "primary" | "text" | "default" | "bordered";
  isRound?: boolean;
  isSmall?: boolean;
  isBlock?: boolean;
  children: ReactNode;
  onClick?: () => void;
}

// Тип для props input
export interface InputProps {
  initialValue?: number;
  value: number;
  error?: string;
  onChange: (value: number) => void;
}

// Тип для props модального окна
export interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  title?: ReactNode;
  children: ReactNode;
}

// Тип для props селектора периода
export interface DefaultSelector {
  items: Option[];
  selectedValue: number | string | null;
  onSelect: (value: number | string) => void; 
}
