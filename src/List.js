import BootstrapTable from "react-bootstrap-table-next";
// tablo basliklari, json dosyasındaki veri adlandirmalarina gore
const columns = [
  {
    dataField: "name",
    text: "name",
    sort: true
  },
  {
    dataField: "capital",
    text: "capital",

    sort: true,
    headerStyle: (column, colIndex) => {
      return { width: "60%" };
    },
    style: (column, colIndex) => {
      return { fontSize: "110%" };
    }
  },
  {
    dataField: "region",
    text: "region"
  },
  {
    dataField: "flag",
    text: "flag"
  }
];

export default function List({ countries }) {
  return (
    <div>
      {countries.map((country) => {
        return (
          <div key={country.id}>
            <BootstrapTable keyField="id" data={countries} columns={columns} />
          </div>
        );
      })}
    </div>
  );
}
