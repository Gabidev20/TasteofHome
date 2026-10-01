import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { getErrorMessage } from "@/lib/utils";

export const dynamic = "force-dynamic";

// Hit by a Vercel Cron Job (see vercel.json) every few days so the
// Supabase project registers activity and the free tier's 7-day
// inactivity auto-pause never kicks in. Does a trivial read — nothing
// to keep "warm" beyond that.
export async function GET(request: NextRequest) {
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret) {
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.from("categories").select("id").limit(1);
    if (error) throw error;

    return NextResponse.json({ ok: true, checkedAt: new Date().toISOString() });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: getErrorMessage(error) },
      { status: 500 }
    );
  }
}
