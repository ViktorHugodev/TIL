import { gql, useQuery } from "@apollo/client";
import { NewUserForm } from "./components/NewUserForm";
interface User {
  name: string;
  id: string;
}
export const GET_USER = gql`
  query {
    users {
      id
      name
    }
  }
`;
function App() {
  const { data, loading } = useQuery<{ users: User[] }>(GET_USER);
  console.log(data);
  if (loading) {
    return <p>Carregando</p>;
  }
  return (
    <div>
      <ul>
        {data?.users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong>
          </li>
        ))}
      </ul>
      <NewUserForm/>
    </div>
  );
}

export default App;
