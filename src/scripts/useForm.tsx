import { useState } from "react";

export const useForm = (initialValue: number) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");

  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (newValue && +newValue > 0) {
      setValue(+newValue);
      setError("");
    } else {
      setValue(0);
      setError("Поле обязательно для заполнения");
    }
  };

  return { value, error, handleChange };
};


