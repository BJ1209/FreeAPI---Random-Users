import { useEffect, useState } from 'react';
import './App.css';
import User from './components/User';

function App() {
  const [loading, setLoading] = useState(false);

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPrevPage, setHasPrevPage] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.freeapi.app/api/v1/public/randomusers?page=${page}`);
      const data = await response.json();

      if (data.success) {
        const apiData = data.data;
        const { nextPage, previousPage, data: users } = apiData;

        setUsers(users);
        setHasNextPage(nextPage);
        setHasPrevPage(previousPage);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  console.log(users)

  return (
    <div>
      <h1>Random Users</h1>
      <p>Discover people from around the world</p>

      {loading && <div className='loading'>Loading users...</div>}

      <div className='users-container'>
        {users.map((user) => <User key={user.id} user={user} />)}
      </div>

      <div className='pagination'>
        <button
          type='button'
          disabled={!hasPrevPage}
          onClick={() => setPage(page => page - 1)}
        >
          ← Prev Page
        </button>
        <button
          type='button'
          disabled={!hasNextPage}
          onClick={() => setPage(page => page + 1)}
        >
          Next Page →
        </button>
      </div>
    </div>
  );
}

export default App;
