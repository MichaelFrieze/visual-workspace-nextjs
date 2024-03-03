"use client";

import { useOrganization } from "@clerk/nextjs";

import { EmptyOrg } from "./_components/empty-org";
import { BoardList } from "./_components/board-list";
import { useSearchParams } from "next/navigation";

const DashboardPage = () => {
  const { organization } = useOrganization();
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || undefined;
  const favorites = searchParams.get("favorites") || undefined;

  return (
    <div className="h-[calc(100%-80px)] flex-1 p-6">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={{ search, favorites }} />
      )}
    </div>
  );
};

export default DashboardPage;
