/**
 * Tầng cao nhất của ứng dụng
 * Nơi import các component vào App
 */

import "./App.css";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import store from "./store/store";

/**
 * Component Provider của react-redux giúp truy cập store cũng như tất cả những function của nó ở tất cả các component con.
 * Để sử dụng Provider thì chỉ cần cài đặt store và gói tất cả các component con vào trong component Provider.
 * Lúc đó store sẽ được truyền vào Provider như là một property.
 */
import { Provider } from "react-redux";


function App() {
    return (
        // Gói các component con vào bên trong Provider và truyền store dưới dạng property
        <Provider store={store}>
            <div className="App">
                <Navbar />
                <Todos />
            </div>
        </Provider>
    );
}

export default App;
