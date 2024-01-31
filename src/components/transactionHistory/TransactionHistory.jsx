import { Transaction } from './Transaction';
import css from './TransactionHistory.module.css';
export const TransactionHistory = ({ items }) => (
  <table className={css.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ type, amount, currency, id }) => (
        <Transaction key={id} type={type} amount={amount} currency={currency} />
      ))}
    </tbody>
  </table>
);
