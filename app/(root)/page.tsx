import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import Image from "next/image";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: "Yesterday",
      views: 44,
      author: { _id: 1 },
      _id: 1,
      description: "This is a robot",
      image: "",
      category: "Robot",
      title: "Humaniod",
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading capitalize">
          Pitch Your StartUP,
          <br /> Connect with Enterprenuer
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Results for ${query}` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => <StartupCard />)
          ) : (
            <p className="no-results"> No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
