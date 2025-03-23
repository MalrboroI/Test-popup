import React, { useEffect, useCallback } from "react";
import { AppProvider, useAppContext } from "./globalContext/Context";
import Button from "./components/Buttons/Button";
import Modal from "./components/Modal/Modal";
import Input from "./components/Input/Input";
import Selector from "./components/Selector/Selector";
import { Option } from "./components/GlobalTypes/GlobalTypes";
import "./styles/Main.scss";

const durationItems: Option[] = [
  { label: "12", value: 12 },
  { label: "24", value: 24 },
  { label: "36", value: 36 },
  { label: "48", value: 48 },
];

const periodItems: Option[] = [
  { label: "в год", value: "year" },
  { label: "в месяц", value: "month" },
];

const App: React.FC = () => {
  const {
    setIsModalOpen,
    isCalculated,
    setIsCalculated,
    sum,
    setSum,
    selectedMonth,
    setSelectedDMonth,
    selectedPeriod,
    setSelectedPeriod,
    result,
    setResult,
  } = useAppContext();

  const onOpen = () => setIsModalOpen(true);

  const calculateResult = useCallback(() => {
    if (sum > 0) {
      const monthlyPayment = sum / selectedMonth;
      const yearlyPayment = monthlyPayment * 12;
      setResult(selectedPeriod === "month" ? monthlyPayment : yearlyPayment);
      setIsCalculated(true);
    } else {
      setResult(0);
      setIsCalculated(false);
    }
  }, [sum, selectedMonth, selectedPeriod, setResult, setIsCalculated]);

  useEffect(() => {
    if (isCalculated) {
      calculateResult();
    }
  }, [selectedMonth, selectedPeriod, isCalculated, calculateResult]);

  return (
    <div className="app">
      <Button variant="bordered" onClick={onOpen}>
        Расчет платежей
      </Button>

      <Modal title="Платежи по кредиту">
        <div className="formContainer">
          <div className="formDescription">
            <p>
              Введите сумму кредита и выберите срок, на который вы хотите его
              оформить.
            </p>
            <p>
              Мы автоматически рассчитаем для вас ежемесячный платеж, чтобы вы
              могли лучше спланировать свои финансы.
            </p>
          </div>
          <div className="formInput">
            <p>Ваша сумма кредита</p>
            <Input value={sum} onChange={(value) => setSum(value)} />
          </div>

          <div className="submit">
            <Button variant="text" onClick={calculateResult}>
              Рассчитать
            </Button>
          </div>

          <div className="durationItems">
            <span>Количество месяцев?</span>
            <Selector
              items={durationItems}
              selectedValue={selectedMonth}
              onSelect={(value) => setSelectedDMonth(value as number)}
            />
          </div>

          {isCalculated && result > 0 ? (
            <>
              <div className="periodMonth">
                <span>Итого ваш платеж по кредиту:</span>
                <Selector
                  items={periodItems}
                  selectedValue={selectedPeriod}
                  onSelect={(value) => setSelectedPeriod(value as string)}
                />
              </div>

              <div className="result">
                {new Intl.NumberFormat("ru-RU").format(result)} рублей{" "}
                {/* {selectedPeriod === "month" ? "в месяц" : "в год"}  */}{" "}
                {/* Если нужно выводить "месяц/год" в зависимости от выбора периода */}
              </div>
            </>
          ) : (
            <div className="emptyBlock" />
          )}
        </div>
        <button className="button--submit" type="submit">
          Добавить
        </button>
      </Modal>
    </div>
  );
};

const AppWithContext: React.FC = () => (
  <AppProvider>
    <App />
  </AppProvider>
);

export default AppWithContext;
