import { useWeb3React } from "@web3-react/core";
import { useCallback, useEffect } from "react";
import { connector } from "../config";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { activate, active, deactivate, error, account, chainId } =
    useWeb3React();

  const connect = useCallback(() => {
    activate(connector);
    localStorage.setItem("previouslyConnected", "true");
  }, [activate]);

  const disconnect = () => {
    deactivate();
    localStorage.removeItem("previouslyConnected");
  };

  useEffect(() => {
    if (localStorage.getItem("previouslyConnected") === "true") {
      connect();
    }
  }, [connect]);

  return (
    <div className={styles.container}>
      <h1>web 3 demo</h1>
      {error && <strong>{JSON.stringify(error)}</strong>}
      {!active ? (
        <button onClick={connect}>Connect</button>
      ) : (
        <>
          <button onClick={disconnect}>Disconnect</button>
          <p>You are connected to {chainId} network</p>
          <p>Your account is: {account}</p>
        </>
      )}
    </div>
  );
}
