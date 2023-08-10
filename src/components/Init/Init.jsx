import { fetchPackagesOP } from 'redux/operations/packageOps';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Init = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPackagesOP());
  }, [dispatch]);

  return <></>;
};

export default Init;
