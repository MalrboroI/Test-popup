import React, { useState, useEffect } from "react";
import cn from "classnames";
import { InputProps } from "../GlobalTypes/GlobalTypes";
import { useForm } from "../../scripts/useForm";

const Input: React.FC<InputProps> = ({ initialValue = 0, onChange }) => {
  const { value, error, handleChange } = useForm(initialValue);

  const [displayValue, setDisplayValue] = useState<string>(
    value ? `${value} ₽` : ""
  );

  // обновим displayValue при изменении value из хука useForm

  useEffect(() => {
    setDisplayValue(value ? `${value} ₽` : "");
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, ""); // Убираем все, кроме цифр
    const numericValue = rawValue ? parseInt(rawValue, 10) : 0;

    // обновим displayValue с отображением рубля
    setDisplayValue(rawValue ? `${numericValue} ₽` : "");

    // передадим числовое значение в родительский компонент
    handleChange({
      target: { value: rawValue },
    } as React.ChangeEvent<HTMLInputElement>);
    if (onChange) {
      onChange(numericValue);
    }
  };

  return (
    <div className="inputWrapper">
      <input
        type="text"
        placeholder={error ? "" : "Введите данные"}
        className={cn("input", error && "input--error")}
        value={displayValue}
        onChange={handleInputChange}
      />
      {error && <div className="errorMessage">{error}</div>}
    </div>
  );
};

export default Input;
