import "./css/main.css";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import RootPage from "./pages/RootPage";

function App() {
  return (
    <Provider store={store}>
      <RootPage />
    </Provider>
  );
}

export default App;
