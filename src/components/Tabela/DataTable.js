import React from 'react';
import axios from 'axios';

const DataTable = ({ userList }) => {
  return (
    <div>
      <h2>Tabela de Dados</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>EMAIL</th>
            <th>SENHA</th>

          </tr>
        </thead>
        <tbody>

          {userList.data.map((x, i) => <tr key={i}>
            <td>{x.id}</td>
            <td>{x.nome}</td>
            <td>{x.email}</td>
            <td>{x.senha}</td>

          </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
DataTable.getInitialProps = async () => {
  const { data } = await axios.get('http://localhost:3000/api/base/base-users')
  return { userList: data }
}
export default DataTable;