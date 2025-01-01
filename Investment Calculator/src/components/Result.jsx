import { calculateInvestmentResults } from "../util/investment";

export default function Result({ input }) {
  console.log(input);
  const resultData = calculateInvestmentResults(input);
  console.log(resultData);
  return <p>Result.....</p>;
}
