import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";

export default function UdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form>
      <Button type="primary"></Button>
    </fetcher.Form>
  );
}
