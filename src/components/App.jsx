import Init from './Init/Init';
import AddPackage from './AddPackage/AddPackage';
import PackageList from './PackageList/PackageList';
//import Filter from './Filter/Filter';

const App = () => {
  return (
    <div
      style={{
        padding: '1rem',
      }}
    >
      <Init />
      <h1>Package list</h1>
      <AddPackage />
      {/* <Filter /> */}
      <PackageList />
    </div>
  );
};

export default App;
