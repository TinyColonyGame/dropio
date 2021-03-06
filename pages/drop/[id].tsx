import React, { useEffect } from "react";
import type { NextPage } from "next";
import { DropTable } from "../../components/drop-table";
import { SendPanel } from "../../components/send-panel";
import { WalletHeader } from "../../components/wallet-header";
import { useRouter } from "next/router";
import { useGlobalState } from "../../context";
import { StackingPicker } from "../../components/stacking-nav";
import { TokenAccountPanel } from "../../components/token-account-panel";
import { SourcePanel } from "../../components/source-panel";

const Drop: NextPage = () => {
  const router = useRouter();
  const { setWalletId } = useGlobalState();
  const { id } = router.query;

  useEffect(() => {
    if (id && !Array.isArray(id)) {
      setWalletId(id);
    }
  }, [id]);

  return (
    <main className="flex flex-1 flex-col">
      <WalletHeader />
      <div className="flex flex-1 justify-center sm:px-6 lg:px-8">
        <div className="max-w-5xl flex flex-1 flex-col">
          <StackingPicker />
          <SendPanel />
          <div className="my-4">
            <TokenAccountPanel />
          </div>
          <SourcePanel />
          <DropTable />
        </div>
      </div>
    </main>
  );
};

export default Drop;
