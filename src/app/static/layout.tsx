import supabase from "@/utils/supabase";
import Link from "next/link";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Test deduplication, this request is duplicated for all sub pages.
  const { data: posts } = await supabase.from("posts").select("id, title");

  return (
    <div>
      {posts!.map((post) => (
        <p key={post.id}>
          <Link href={`/static/${post.id}`}>{post.title}</Link>
        </p>
      ))}
      {children}
    </div>
  );
}
