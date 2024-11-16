import { HermesClient } from "@pythnetwork/hermes-client";

const args = process.argv.slice(2);
const price_id = [args[0]];

const run = async () => {
  const connection = new HermesClient("https://hermes.pyth.network", {});
  // Latest price updates
  const priceUpdates = await connection.getLatestPriceUpdates(price_id);
  console.log("##", JSON.stringify({ ...priceUpdates.parsed[0].ema_price }), "##");
};

run();
