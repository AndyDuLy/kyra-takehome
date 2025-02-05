import { NextResponse } from "next/server";
import { fetchKyraStatsHistory } from "@/app/api-lib/handlers/stats-history-handler";
import { handleApiError } from "@/app/api-lib/errors/errorHandler";

export async function GET() {
  try {
    const data = await fetchKyraStatsHistory();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return handleApiError(error);
  }
}
