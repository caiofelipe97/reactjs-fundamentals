import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar>sidebar</Sidebar>
        <main>
          <Post
            author="Caio Felipe"
            content="asdasd asdscvsdg3w4yt reiyjkytu ikjhserdt er "
          />
          <Post
            author="Renata Navarro"
            content="asdasd asdscvsdg3w4yt reiyjkytu ikjhserdt er "
          />
        </main>
      </div>
    </div>
  );
}

export default App;
