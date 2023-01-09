import { api } from "../utils/api";

const test = () => {
  const getNames = api.db.getItems.useQuery();
  return <div>{JSON.stringify(getNames)}</div>;
};

export default test;
