import supabase from "../../../utils/supabase";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export const revalidate = 60;

export default async function Post({
  params: { id },
}: {
  params: { id: string };
}) {
  // Page specific search params with id, this request is not duplicated.
  const { data } = await supabase.from("posts").select().match({ id }).single();

  if (!data) {
    notFound();
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
