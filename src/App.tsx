import { Web3ReactProvider } from "@web3-react/core";
import React from "react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";

import "./App.css";
import ICOToken from "./ICOToken";
import Demo from "./components/Demo";
import { getLibrary } from "./components/Demo";

const crowdsaleAddress = import.meta.env.VITE_CROWDSALE_ADDRESS;

const queryClient = new QueryClient();

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Demo />
          <ICOToken crowdsaleAddress={crowdsaleAddress} />

          <footer className="p-10 footer bg-base-200 text-base-content">
            <div>
              <p>
                Deployed by
                <br />
                Canaria'sCoin {" "}
                <a className="link" href="https://canariascoins.com">
                  
                </a>
              </p>
            </div>
          </footer>
        </div>
      </QueryClientProvider>
    </Web3ReactProvider>
  );
}

export default App;
