import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Button from "../ui/Button";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

function Cabins() {
  const [showForm, setShowForm] = useState(false);

  useEffect(function () {
    getCabins().then(data => console.log(data))
  }, [])
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>
      <Row>
        <CabinTable />
        <Button onClick={() => setShowForm(!showForm)} >Add new Cabin</Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
