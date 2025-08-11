import Image from "next/image";

type News = {
  id: string;
  caption: string;
  imageUrl: string;
  createdAt: string;
};

async function getNews(): Promise<News[]> {
  const checkRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/news/api`, {
    cache: "no-store", // it will always the latest data
  });
  if (!checkRes.ok) throw new Error("Failed to fetch news");
  return checkRes.json();
}

export default async function NewsPage() {
  const newsList = await getNews();

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Barangay News</h1>
      {newsList.length === 0 ? (
        <p>No news yet.</p>
      ) : (
        newsList.map((news) => (
          <div
            key={news.id}
            className="border rounded-lg p-4 shadow-sm space-y-2"
          >
            <Image
              src={news.imageUrl}
              alt={news.caption}
              width={800}
              height={400}
              className="rounded-lg"
            />
            <p className="text-lg font-semibold">{news.caption}</p>
            <p className="text-sm text-gray-500">
              {new Date(news.createdAt).toLocaleString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
