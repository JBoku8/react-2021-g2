import { useEffect } from 'react';
import { Loader } from '../../components/loader';
import useFetch from '../../hooks/useFetch';
import useLocalStorage from '../../hooks/useLocalStorage';

function HomePage() {
  const {
    loading,
    data: response,
    error,
  } = useFetch(`${process.env.REACT_APP_FAKER_API}/books`);

  const [storage, setStorage] = useLocalStorage('app-books', []);

  useEffect(() => {
    if (!loading) {
      setStorage(response.data);
    }
  }, [loading, response, setStorage]);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return (
      <div className="alert alert-danger">
        <pre>{JSON.stringify(error)}</pre>
      </div>
    );
  }

  console.log(storage);
  console.log(response.data);

  return (
    <div className="row">
      {/* <h2>Length - {data.length}</h2> */}
      <button type="button" className="btn btn-primary">
        Change Value
      </button>
    </div>
  );
}

export default HomePage;
