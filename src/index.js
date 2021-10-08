import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { addAction, squareAction } from "../src/actions/action";
import { Provider } from "react-redux";
import Presentational from "../src/components/presentational";
// store 存储数据的仓库
// state 指某一时点的数据
// reducer函数 用于更新state
// action 是 View 发出的通知，说明 state 变化了
// react-redux 分为展示组件（展示UI）和容器组件（负责管理数据和业务逻辑）

const reducer = (state = 10, action) => {
    switch (action.type) {
        case "ADD":
            return state + action.num;
        case "SQUARE":
            return state * state;
        default:
            return state;
    }
};

const store = createStore(reducer);

console.log(store.getState()); //在没有使用 state.dispatch 的时候，会返回 state 初始值 10
console.log(store.dispatch(addAction(1)));
console.log(store.getState()); // 10 + 1 = 11
console.log(store.dispatch(addAction(2)));
console.log(store.getState()); // 11 + 2 = 13
console.log(store.dispatch(squareAction()));
console.log(store.getState()); // 13 * 13 = 169

function App() {
    return (
        <Provider store={store}>
            <Presentational />
        </Provider>
    );
}

function render() {
    ReactDOM.render(<App />, document.getElementById("root"));
}

// 这是基本的一种响应方式，store.subscribe 来监听 state 变化，但是不高效
render();
store.subscribe(render);
