import Cell from "./Cell";

function Row({ item }) {
  return (
    <tr>
      {Object.entries(item).map(([key, value]) => {
        return <Cell key={key} data={JSON.stringify(value)} />;
      })}
    </tr>
  );
}

export default Row;
