import Drawer from "./components/Drawer";
import PostListProvider from "./store/post-list-store";

function App() {
  return (
    <PostListProvider>
      <div className="main  font-poppins">
        <Drawer />
      </div>
    </PostListProvider>
  );
}

export default App;
