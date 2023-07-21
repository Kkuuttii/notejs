import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store/index";

const root = createRoot(document.getElementById("root")!);
root.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);
