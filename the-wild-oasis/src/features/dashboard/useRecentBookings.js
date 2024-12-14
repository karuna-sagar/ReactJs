import { subDays } from "date-fns";
import { getBookingsAfterDate } from "../../services/apiBookings";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
export default function useRecentBookings() {
  const [searchParams] = useSearchParams();
  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));
  const queryData = subDays(new Date(), numDays).toISOString();
  const { isLoading, data: bookings } = useQuery({
    queryFn: () => getBookingsAfterDate(queryData),
    queryKey: ["bookings", `last-${numDays}`],
  });
  return { isLoading, bookings };
}