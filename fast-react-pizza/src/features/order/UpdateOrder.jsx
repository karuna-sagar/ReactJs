import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
export default function UpdateOrder() {
  const fetcher = useFetcher();
  return (
    <fetcher.Form>
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}
