import React from "react";
import flex from "../assests/images/flex.svg";
import dollar from "../assests/images/dollar.svg";
import vault from "../assests/images/vault.svg";
import goals from "../assests/images/goals.svg";
import "../assests/css/home.css";

const Payment = () => {
  return (
    <div className="payments">
      <div className="payments_container">
        <div className="payments_app">
          <h1>Flex Savings</h1>
          <p>
            Take advantage of our flexible savings options and make the most of
            your money with no added stress. Our program allows you to withdraw
            your savings up to four times a year, completely free of charge. You
            can rest assured that your money is safe with us, while also earning
            up to 12% in interest annually. With this program, growing your
            wealth has never been easier. Effortlessly watch your savings
            increase and reach your financial goals with ease.
          </p>
        </div>
        <div>
          <img src={flex} alt="flex" />
        </div>
      </div>
      <div className="payments_container">
        <div className="payments_app">
          <h1>Dollar Savings </h1>
          <p>
            Secure your financial future by saving your money and growing your
            wealth in dollars. With interest rates of up to 8% p.a., you'll be
            able to reach your financial goals more quickly. Don't let inflation
            erode your hard-earned savings, start saving today and take a step
            towards a brighter future.
          </p>
          <div></div>
        </div>
        <div>
          <img src={dollar} alt="dollar" />
        </div>
      </div>
      <div className="payments_container">
        <div className="payments_app">
          <h1>Vaults</h1>
          <p>
            There are various options available to lock your funds, including
            high-yield savings accounts and fixed deposits. These options not
            only keep your money secure, but they also offer the potential for
            earning up to 10% per annum on your savings. This means your money
            will grow faster and you will be one step closer to reaching your
            financial goals.
          </p>
        </div>
        <div>
          <img src={vault} alt="vault" />
        </div>
      </div>
      <div className="payments_container">
        <div className="payments_app">
          <h1>Goals</h1>
          <p>
            Once you have set a financial goal, the next step is to start saving
            consistently towards it. This means setting aside a portion of your
            income every month and depositing it into a savings account or
            investment vehicle. Regular savings will help you build your nest
            egg and make steady progress towards your financial goal.
          </p>
        </div>
        <div>
          <img src={goals} alt="goals" />
        </div>
      </div>
    </div>
  );
};

export default Payment;
