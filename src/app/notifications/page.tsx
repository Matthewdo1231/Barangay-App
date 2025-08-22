"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, FileText, ChevronDown } from "lucide-react";
import RequestWatcher from "./actions/RequestWatcher";
import RefreshButton from "./actions/RefreshButton";
import RequestDetailsDialog from "./_component/RequestDetailsDialog";
import type { Request } from "@prisma/client";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// --- Types ---
export interface Notification extends Request {
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
}

interface Stats {
  total: number;
  pending: number;
  processing: number;
  completed: number;
  rejected: number;
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<Stats>({
    total: 0,
    pending: 0,
    processing: 0,
    completed: 0,
    rejected: 0,
  });
  const [tab, setTab] = useState("all");

  // --- Load data ---
  async function fetchData() {
    setLoading(true);
    const [reqRes, statsRes] = await Promise.all([
      fetch("/notifications/api/notifications").then((r) => r.json()),
      fetch("/notifications/api/notifications?stats=true").then((r) => r.json()),
    ]);

    setNotifications(reqRes);
    setStats(statsRes);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  // --- Badge helpers ---
  const statusBadge = (status: Notification["status"]) => {
    switch (status) {
      case "PENDING":
        return <Badge className="bg-yellow-100 text-yellow-700">Pending</Badge>;
      case "IN_PROGRESS":
        return <Badge className="bg-blue-100 text-blue-700">Processing</Badge>;
      case "COMPLETED":
        return <Badge className="bg-green-100 text-green-700">Completed</Badge>;
      case "REJECTED":
        return <Badge className="bg-red-100 text-red-700">Rejected</Badge>;
    }
  };

  const priorityBadge = (priority: Notification["priority"]) => {
    switch (priority) {
      case "low":
        return <Badge className="bg-gray-100 text-gray-700">Low</Badge>;
      case "medium":
        return <Badge className="bg-yellow-200 text-yellow-900">Medium</Badge>;
      case "high":
        return <Badge className="bg-red-200 text-red-900">High</Badge>;
    }
  };

  // --- Filtering ---
  const filtered =
    tab === "all" ? notifications : notifications.filter((n) => n.status === tab);

  return (
    <>
      <RequestWatcher />
      <div className="max-w-6xl mx-auto p-4 sm:p-6">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Notifications</h1>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          Track, manage, and monitor all request notifications in real-time
        </p>

        {/* Stats cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-6">
          <Card><CardContent className="p-4 text-center"><p className="text-xl sm:text-2xl font-bold">{stats.total}</p><p className="text-gray-600 text-sm">Total</p></CardContent></Card>
          <Card><CardContent className="p-4 text-center"><p className="text-xl sm:text-2xl font-bold text-yellow-600">{stats.pending}</p><p className="text-gray-600 text-sm">Pending</p></CardContent></Card>
          <Card><CardContent className="p-4 text-center"><p className="text-xl sm:text-2xl font-bold text-blue-600">{stats.processing}</p><p className="text-gray-600 text-sm">Processing</p></CardContent></Card>
          <Card><CardContent className="p-4 text-center"><p className="text-xl sm:text-2xl font-bold text-green-600">{stats.completed}</p><p className="text-gray-600 text-sm">Completed</p></CardContent></Card>
          <Card><CardContent className="p-4 text-center"><p className="text-xl sm:text-2xl font-bold text-red-600">{stats.rejected}</p><p className="text-gray-600 text-sm">Rejected</p></CardContent></Card>
        </div>

        {/* Search + filter */}
        <div className="flex flex-col sm:flex-row gap-2 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input placeholder="Search notifications..." className="pl-8 w-full" />
          </div>
          <Button variant="outline" className="w-full sm:w-auto">
            <Filter className="h-4 w-4 mr-2" /> Filter
          </Button>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" value={tab} onValueChange={setTab}>
          <TabsList className="mb-4 flex flex-wrap gap-2">
            <TabsTrigger value="all">All ({stats.total})</TabsTrigger>
            <TabsTrigger value="PENDING">Pending ({stats.pending})</TabsTrigger>
            <TabsTrigger value="IN_PROGRESS">Processing ({stats.processing})</TabsTrigger>
            <TabsTrigger value="COMPLETED">Completed ({stats.completed})</TabsTrigger>
            <TabsTrigger value="REJECTED">Rejected ({stats.rejected})</TabsTrigger>
          </TabsList>

          <div className="flex items-center justify-between mb-6">
            <RefreshButton onRefresh={fetchData} loading={loading} />
          </div>

          <TabsContent value={tab} className="space-y-3">
            {/* Skeleton while loading */}
            {loading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <Card key={i} className="shadow-sm">
                  <CardContent className="p-4 flex flex-col sm:flex-row gap-4">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-5 w-1/3" />
                      <Skeleton className="h-4 w-2/3" />
                      <div className="flex gap-2 mt-2">
                        <Skeleton className="h-5 w-16" />
                        <Skeleton className="h-5 w-16" />
                        <Skeleton className="h-5 w-16" />
                      </div>
                      <Skeleton className="h-3 w-1/2 mt-2" />
                    </div>
                    <Skeleton className="h-8 w-8 rounded-md" />
                  </CardContent>
                </Card>
              ))
            ) : filtered.length === 0 ? (
              <p className="text-gray-500">No notifications.</p>
            ) : (
              filtered.map((n) => (
                <Card key={n.id} className="shadow-sm hover:shadow-md transition">
                  <CardContent className="p-4 flex flex-col sm:flex-row gap-4">
                    {/* Left Icon */}
                    <FileText className="h-10 w-10 text-gray-600" />

                    {/* Main Content */}
                    <div className="flex-1">
                      <h2 className="font-semibold text-lg">{n.title}</h2>
                      <p className="text-sm text-gray-600">{n.description}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="outline">
                          {n.requestType.replace(/_/g, " ").toLowerCase()}
                        </Badge>
                        {priorityBadge(n.priority)}
                        {statusBadge(n.status)}
                      </div>
                      <p className="text-xs text-gray-400 mt-2">
                        <strong>ID:</strong> REQ-{n.id} • <strong>Submitted:</strong>{" "}
                        {new Date(n.createdAt).toLocaleDateString()}
                      </p>

                      {/* Collapsible response */}
                      <div className="relative">
                        <Collapsible className="mt-2">
                          {(!n.adminMessage && !n.adminFileUrl) ? (
                            <p className="text-orange-500 italic">No response yet</p>
                          ) : (
                            <p className="text-green-600 italic">Responded</p>
                          )}

                          <CollapsibleTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="flex items-center gap-1 text-xs text-gray-600"
                            >
                              View Response
                              <ChevronDown className="h-4 w-4 transition-transform duration-300 data-[state=open]:rotate-180" />
                            </Button>
                          </CollapsibleTrigger>

                          <CollapsibleContent className="absolute left-0 right-0 mt-2 p-3 bg-gray-50 border rounded-md shadow-md text-sm text-gray-700 space-y-2">
                            {(!n.adminMessage && !n.adminFileUrl) ? (
                              <p className="text-gray-500 italic">
                                Document process typically done 10 minutes – 1 hour
                              </p>
                            ) : (
                              <>
                                <p className="font-medium text-gray-600">Response from admin:</p>
                                {n.adminMessage && <p>📩 Message: {n.adminMessage}</p>}
                                {n.adminFileUrl && (
                                  <p>
                                    📎 File:{" "}
                                    <a
                                      href={n.adminFileUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-blue-600 underline"
                                    >
                                      View Document
                                    </a>
                                  </p>
                                )}
                              </>
                            )}
                          </CollapsibleContent>
                        </Collapsible>
                      </div>
                    </div>

                    {/* Right side */}
                    <div className="mt-3 sm:mt-0 sm:ml-auto">
                      <RequestDetailsDialog
                        request={{
                          fullName: n.fullName,
                          contactNumber: n.contactNumber,
                          emailAddress: n.emailAddress,
                          currentAddress: n.currentAddress,
                          createdAt: n.createdAt,
                          status: n.status,
                          requestType: n.requestType,
                          message: n.message ?? undefined,
                        }}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
