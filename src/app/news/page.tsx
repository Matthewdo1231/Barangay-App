import Image from "next/image";

type News = {
  id: string;
  caption: string;
  imageUrl: string;
  createdAt: string;
};

async function getNews(): Promise<News[]> {
  const checkRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/news/api`, {
    cache: "no-store", // always get latest data
  });
  if (!checkRes.ok) throw new Error("Failed to fetch news");
  return checkRes.json();
}

export default async function NewsPage() {
  const newsList = await getNews();

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center text-green-800">
        Barangay News & Updates
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Stay updated with the latest news and announcements from your barangay
      </p>

      {newsList.length === 0 ? (
        <p className="text-center text-gray-500">No news yet.</p>
      ) : (
        newsList.map((news) => (
          <div
            key={news.id}
            className="bg-white border rounded-2xl shadow p-4 space-y-3"
          >
            <Image
              src={news.imageUrl}
              alt={news.caption}
              width={800}
              height={400}
              className="rounded-lg w-full h-auto"
            />
            <p className="text-lg font-semibold text-gray-800">{news.caption}</p>
            <p className="text-sm text-gray-500">
              {new Date(news.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
