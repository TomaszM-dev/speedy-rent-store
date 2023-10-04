import { Rate } from "@/types";

const URL = `https://speed-rent-admin-panel.vercel.app/api/e5345677-845e-433a-a692-0f6f5b9178fe/rates`;

const getRates = async (): Promise<Rate[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getRates;
