import styles from './App.module.scss';

const App: React.FC = () => {
  console.log(styles);
  return (
    <div className={styles.container}>
      <h1>Welcome to App Store!!!</h1>
    </div>
  );
};

export default App;
