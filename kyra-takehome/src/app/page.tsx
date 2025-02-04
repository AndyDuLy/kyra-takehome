"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [kyraData, setKyraData] = useState(null);
  const [statsHistoryData, setStatsHistoryData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/base-data");
        const res2 = await fetch("/api/stats-history");
        if (!res.ok) throw new Error("Failed to fetch Kyra data");
        if (!res2.ok) throw new Error("Failed to fetch Kyra data");

        const data = await res.json();
        const data2 = await res2.json();

        setKyraData(data);
        setStatsHistoryData(data2);

        console.log(data);
        console.log(data2);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Kyra Base Data</h1>
      <h3>{JSON.stringify(kyraData)}</h3>

      <h1>Kyra Stats History</h1>
      <h3>{JSON.stringify(statsHistoryData)}</h3>
    </div>
  );
}
