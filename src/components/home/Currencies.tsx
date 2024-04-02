"use client";

import { FC } from "react";
import { Icons } from "../Icons";
import { useRouter } from "next/navigation";

export const currencies = [
  {
    title: "Bitcoin",
    abbr: "BTC",
    icon: Icons.currencies.bitcoin,
    nbr: 0,
    amount: 0,
  },
  {
    title: "Solana",
    abbr: "SOL",
    icon: Icons.currencies.solana,
    nbr: 0,
    amount: 0,
  },
  {
    title: "Ethereum",
    abbr: "ETH",
    icon: Icons.currencies.ethereum,
    nbr: 0,
    amount: 0,
  },
  {
    title: "Avalanche",
    abbr: "AVAX",
    icon: Icons.currencies.avalanche,
    nbr: 0,
    amount: 0,
  },
  {
    title: "BSC",
    abbr: "BNB",
    icon: Icons.currencies.bsc,
    nbr: 0,
    amount: 0,
  },
];

interface CurrenciesProps {
  price: any;
  balance: any;
}

const Currencies: FC<CurrenciesProps> = ({ price, balance }) => {
  const router = useRouter();

  const handleCurrencyClick = (title: string) => {
    router.push(`/buy?currency=${title.toLowerCase()}`);
  };

  return (
    <div className="w-full grid grid-cols-1 gap-1 h-full">
      {currencies.map((currency, i) => (
        <div
          key={i}
          className="flex transition-colors duration-300 hover:bg-[#1e243d] cursor-pointer border-[1px] border-[#787878] hover:border-slate-200 bg-main-bg p-5 rounded-3xl items-center justify-between"
          onClick={() => handleCurrencyClick(currency.title)}
        >
          <div className="flex gap-3 items-center">
            <currency.icon />
            <div>
              <p className="uppercase font-semibold text-lg text-stone-200">{currency.abbr}</p>
              <p className="text-stone-400">{currency.title}</p>
            </div>
          </div>
          <div>
            <p className="uppercase font-semibold text-lg text-right text-stone-200">
              {balance[currency.title.toLowerCase()]
                .toLocaleString()
                .substring(0, 8)}
            </p>
            <p className="text-stone-400 text-right">
              $
              {(
                balance[currency.title.toLowerCase()] *
                price[currency.title.toLowerCase()]
              ).toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Currencies;
