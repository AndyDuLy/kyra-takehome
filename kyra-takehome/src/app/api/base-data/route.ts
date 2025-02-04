import { NextResponse } from "next/server";
import { fetchKyraBaseData } from "@/app/server/handlers/base-data-handler";
import { handleApiError } from "@/app/server/errors/errorHandler";

export async function GET() {
  try {
    const data = await fetchKyraBaseData();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return handleApiError(error);
  }
}
