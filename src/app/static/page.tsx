import Link from "next/link";
import supabase from "../../utils/supabase";

export const revalidate = 60;

export default async function Posts() {
  // Test deduplication, this request is not duplicated since in layout.
  const { data: posts } = await supabase.from("posts").select("id, title");

  if (!posts) {
    return <p>No posts found.</p>;
  }

  return posts.map((post) => (
    <p key={post.id}>
      <Link href={`/static/${post.id}`}>{post.title}</Link>
    </p>
  ));
}
