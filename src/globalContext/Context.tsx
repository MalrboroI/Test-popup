import React, { createContext, useState, useContext } from "react";

interface AppContextType {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  isCalculated: boolean;
  setIsCalculated: (calculated: boolean) => void;
    sum: number;
    setSum: (sum: number) => void;
  selectedMonth: number;
  setSelectedDMonth: (month: number) => void;
  selectedPeriod: string;
  setSelectedPeriod: (period: string) => void;
  result: number;
  setResult: (result: number) => void;
    error: string;
    setError: (error: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Провайдер контекста

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCalculated, setIsCalculated] = useState(false);
  const [sum, setSum] = useState(0);
  const [selectedMonth, setSelectedDMonth] = useState(12);
  const [selectedPeriod, setSelectedPeriod] = useState<string>("month");
  const [result, setResult] = useState(0);
    const [error, setError] = useState("");

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        sum,
        setSum,
        isCalculated,
        setIsCalculated,
        selectedMonth,
        setSelectedDMonth,
        selectedPeriod,
        setSelectedPeriod,
        result,
        setResult,
        error,
        setError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Хук для использования контекста

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
