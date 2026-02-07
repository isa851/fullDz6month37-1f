import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const Deteil = () => {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ['user', id],
    queryFn: () => fetch(`https://fakestoreapi.com/users/${id}`).then(res => res.json())
  });

  if (!data) return <p>Loading...</p>;

  return (
    <div>
        <ul>
            <li><h1>{data.name.firstname}</h1></li>
            <li><h1>{data.username}</h1></li>
            <li><h1>{data.email}</h1></li>
            <li><h1>{data.phone}</h1></li>
        </ul>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default Deteil;