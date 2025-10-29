import React from "react";
import { PoolCard } from "@/components/PoolCard";
import { AddPoolCard } from "@/components/AddPoolCard";
import { Skeleton } from "@/components/ui/skeleton";
import type { Pool } from "@/api/pools";
import { fetchPools } from "@/api/pools";

const Pools = () => {
  const [pools, setPools] = React.useState<Pool[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const loadPools = async () => {
      setIsLoading(true);
      try {
        const data = await fetchPools();
        setPools(data);
      } catch (error) {
        console.error("Failed to load pools", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadPools();
  }, []);

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-lg font-semibold md:text-2xl">Your Pools</h1>
          <p className="text-sm text-muted-foreground">
            Select a pool to manage its resources or create a new one.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex flex-col space-y-3">
                <Skeleton className="h-[150px] w-full rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-4/5" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
            ))
          : (
            <>
              {pools.map((pool) => (
                <PoolCard key={pool.id} pool={pool} />
              ))}
              <AddPoolCard />
            </>
          )}
      </div>
    </>
  );
};

export default Pools;