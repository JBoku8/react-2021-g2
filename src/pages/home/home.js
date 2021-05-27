import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../components/loader';
import useBackgroundColor from '../../hooks/useBackgroundColor';
import useFetch from '../../hooks/useFetch';
import useLocalStorage from '../../hooks/useLocalStorage';
import { getCompaniesAsync } from '../../redux/actions/common-actions';
import { companiesSelector } from '../../redux/selectors/common-selectors';

function HomePage() {
  const dispatch = useDispatch();
  const companies = useSelector(companiesSelector);
  const {
    loading,
    data: response,
    error,
  } = useFetch(`${process.env.REACT_APP_FAKER_API}/books`);

  const [storage, setStorage] = useLocalStorage('app-books', []);
  useBackgroundColor('white');

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

  return (
    <div className="row">
      <h2>Length - {storage.length}</h2>
      <div className="col-6">
        <button type="button" className="btn btn-primary">
          Change Value
        </button>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            dispatch(getCompaniesAsync());
          }}>
          Redux Thunk Companies
        </button>
      </div>
      <div className="col-6">
        {/* <pre>{JSON.stringify(storage, null, 2)}</pre> */}
        <pre>{JSON.stringify(companies, null, 2)}</pre>
      </div>
    </div>
  );
}

export default HomePage;
