import { Link } from "react-router-dom";
import { useQuery } from '@tanstack/react-query'


const HomePages = () => {
    const { data } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('https://fakestoreapi.com/users').then(res => res.json())
    })
    return (
        <div>
            {data && data.map(user => (
                <Link key={user.id} to={`/detail/${user.id}`}>
                    <h1>{user.username}</h1>
                </Link>
            ))}
        </div>
    )
}

export default HomePages