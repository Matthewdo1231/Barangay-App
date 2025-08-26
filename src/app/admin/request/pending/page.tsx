import { getPendingRequests } from "./action";
import PendingRequestsClient from "./_component/PendingRequest";

export const dynamic = "force-dynamic";

export default async function PendingRequestsPage() {
  const initialData = await getPendingRequests();

  return <PendingRequestsClient initialData={initialData} />;
}
