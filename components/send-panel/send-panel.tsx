import { faRaindrops, faSync } from "@fortawesome/pro-light-svg-icons";
import { useGlobalState } from "../../context";
import { classNames } from "../../utils/class-names";
import { TokenUtils } from "../../utils/token-utils";
import { Button } from "../button";
import truncate from "lodash.truncate";

export const SendPanel = () => {
  const {
    state: { balance, mode, token, fee, dropAccounts },
    accountInfo,
    drop,
    refreshBalance,
  } = useGlobalState();

  const currentDecimals =
    mode === "SOL"
      ? 9
      : balance.tokens.find((t) => t.token.address === token.address)?.token
          .decimals ?? 9;

  const currentAmount: bigint =
    mode === "SOL"
      ? balance.sol
      : balance.tokens.find((t) => t.token.address === token.address)?.amount ??
        BigInt(0);

  const availableAmount =
    currentAmount * BigInt(Math.pow(10, 9 - currentDecimals));

  const dropAmount = dropAccounts.reduce(
    (agg, { drop: amount }) => agg + amount,
    BigInt(0)
  );

  const enoughSol = balance.sol >= fee;

  const canSend =
    availableAmount > dropAmount &&
    dropAmount > 0 &&
    accountInfo !== null &&
    balance.sol > fee;

  const error =
    dropAmount > availableAmount
      ? `Missing some: ${mode == "SOL" ? "SOL" : token.name}`
      : dropAmount !== BigInt(0)
      ? "Missing your: mnemonic"
      : "";

  return (
    <dl className="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden border divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
      <div className="px-4 py-5 sm:p-6">
        <dt className="font-normal text-gray-900 font-mono text-xs">SOL</dt>
        <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
          <div className="flex flex-col items-baseline text-2xl font-semibold text-indigo-600">
            <span className="h-9">
              {TokenUtils.getHumanAmount(balance.sol, "SOL", token)}
            </span>
            <span
              className={classNames(
                enoughSol ? "text-green-500" : "text-red-500",
                "text-xs"
              )}
            >
              After:&nbsp;
              {TokenUtils.getHumanAmount(
                BigInt(balance.sol) -
                  BigInt(mode === "SOL" ? dropAmount : BigInt(0)) -
                  fee,
                "SOL",
                token
              )}
              &nbsp;SOL
            </span>
          </div>
          <div className="flex space-x-1">
            <Button icon={faSync} onClick={() => refreshBalance()} />
          </div>
        </dd>
      </div>
      <div className="px-4 py-5 sm:p-6">
        <dt className="text-base font-normal text-gray-900 flex">
          <span className="flex flex-1 font-mono text-xs">DROP AMOUNT</span>
          <span className="rounded-full px-3 h-4 text-xs">
            {mode === "SOL" ? "SOL" : truncate(token.name, { length: 15 })}
          </span>
        </dt>
        <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
          <div className="flex flex-1 text-2xl font-semibold text-indigo-600">
            <span className="flex flex-1 flex-col">
              <span className="h-9">
                {TokenUtils.getHumanAmount(dropAmount, "SOL", token)}
              </span>
              <span
                className={classNames(
                  enoughSol ? "text-green-500" : "text-red-500",
                  "text-xs"
                )}
              >
                Fee: {TokenUtils.getHumanAmount(fee, "SOL", token)} SOL
              </span>
            </span>
            <span
              className={classNames(
                dropAmount > availableAmount
                  ? "text-red-500"
                  : "text-green-500",
                "text-xl px-3 flex flex-col"
              )}
            >
              <span className="text-right text-2xl h-9">
                {TokenUtils.getHumanAmount(availableAmount, "SOL", token)}
              </span>
              <span className="text-xs text-right">available</span>
            </span>
          </div>
        </dd>
      </div>
      <div className="px-4 py-5 sm:p-6">
        <dt className="text-base font-normal text-gray-900 flex">
          <span className="flex flex-1 font-mono text-xs">SEND</span>
        </dt>
        <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
          <div className="flex flex-1 items-baseline text-indigo-600">
            <span className="flex flex-1 flex-col">
              <div className="h-9">
                <Button
                  icon={faRaindrops}
                  text="Drop"
                  onClick={drop}
                  disabled={!canSend}
                />
              </div>
              <span className="text-xs text-red-500 font-bold">
                {!canSend && truncate(error, { length: 32 })}
              </span>
            </span>
          </div>
        </dd>
      </div>
    </dl>
  );
};
