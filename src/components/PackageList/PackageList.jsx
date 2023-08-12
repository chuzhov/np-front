import { useSelector } from 'react-redux';
import DeleteContactBtn from 'components/DeleteContactBtn/DeleteContactBtn';
import css from './PackageList.module.css';
import {
  getIsPackegesLoading,
  getPackages,
} from 'redux/selectors/packagesSelectors';

const PackageList = () => {
  const packages = useSelector(getPackages);
  const isLoading = useSelector(getIsPackegesLoading);

  console.dir(packages);

  return isLoading ? (
    'Loading...'
  ) : packages.length ? (
    <ul className={css['list']}>
      {packages.map(pack => (
        <li key={'li' + pack.id} className={css['item']}>
          <div>
            <p className={css['tracking-number']}>{pack._tracking_number}</p>
          </div>
          <DeleteContactBtn id={pack.id.toString()} />
        </li>
      ))}
    </ul>
  ) : packages.length === 0 ? (
    <p>Your package list is empty</p>
  ) : (
    <p>There aren't packages matching Your query</p>
  );
};

export default PackageList;
