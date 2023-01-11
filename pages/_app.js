import "../styles/globals.css";
import { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";

import { ChainId } from "@thirdweb-dev/react";

export default function App({ Component, pageProps }) {
  const activeChainId = ChainId.Rinkeby;
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
