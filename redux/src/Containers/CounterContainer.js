import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../Components/Counter";
import { increase, decrease } from "../Modules/Counter";

const CounterContainer = () => {
  const number = useSelector((state) => state.Counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
