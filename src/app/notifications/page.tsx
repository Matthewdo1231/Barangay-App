import { getUserRequests } from "./action";
import RefreshButton from "./actions/RefreshButton";
import RequestWatcher from "./actions/RequestWatcher";

export default async function NotificationsPage() {
  const requests = await getUserRequests();

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Notifications</h1>

      <RefreshButton />

      <ul className="space-y-2">
        {requests.length === 0 ? (
          <li className="text-gray-500">No requests found.</li>
        ) : (
          requests.map((req) => (
            <li
              key={req.id}
              className="p-4 border rounded-lg shadow-sm bg-white"
            >
              <p><strong>Request Type:</strong> {req.requestType}</p>
              <p><strong>Status:</strong> {req.status}</p>
              <p className="text-sm text-gray-500">
                Created: {new Date(req.createdAt).toLocaleString()}
              </p>
            </li>
          ))
        )}
      </ul>

      {/* Client-side auto-refresh */}
      <RequestWatcher />
    </div>
  );
}
