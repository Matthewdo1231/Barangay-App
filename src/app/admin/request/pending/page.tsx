import { getPendingRequests } from "./action";
import PendingRequestsClient from "./_component/PendingRequest";

export default async function PendingRequestsPage() {
  const initialData = await getPendingRequests();

  return <PendingRequestsClient initialData={initialData} />;
}
