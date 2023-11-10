
import Link from "next/link";
import DataTable from "../../../components/Tabela/DataTable";
import axios from "axios";

export default function Usuarios({ data }) {
  return (
    <div>
      <h1>Minha Página</h1>
      <DataTable data={data} />
    </div>
  );
};

// export async function getServerSideProps() {
//   const response = await fetch('http://localhost:3000/api/base/base-users');
//   const data = await response.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }



