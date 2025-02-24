import { handleApiError } from "@/app/api-lib/errors/errorHandler";

export async function fetchKyraStatsHistory() {
  try {
    const apiUrl = process.env.KYRA_STATS_HISTORY_API_URL;
    const swaggerHeader = process.env.X_KYRA_SWAGGER_HEADER_KEY;

    if (!apiUrl || !swaggerHeader) {
      throw new Error(
        "KYRA_STATS_HISTORY_API_URL or X_KYRA_SWAGGER_HEADER_KEY is not defined."
      );
    }

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "x-kyra-swagger": swaggerHeader,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Kyra API Error: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    return handleApiError(error);
  }
}
