import React from "react";
import { connect } from "react-redux";
import { addAction, squareAction } from "../actions/action";

// react-redux 分为展示组件（展示UI）和容器组件（负责管理数据和业务逻辑）
// 以下是一个 展示组件 的容器

function Presentational(props) {
    const { num, add, square } = props;
    return (
        <div>
            <p>{num}</p>
            <button onClick={() => add(1)}>加 1</button>
            <button onClick={() => add(2)}>加 2</button>
            <button onClick={() => square()}>乘方</button>
        </div>
    );
}

// mapStateToProps 负责输入逻辑，即将state映射到 UI 组件的参数（props）
const mapStateToProps = (state) => {
    return {
        num: state,
    };
};
// mapDispatchToProps负责输出逻辑，即将用户对 UI 组件的操作映射成 Action。
const mapDispatchToProps = (dispatch) => {
    return {
        add: (value) => dispatch(addAction(value)),
        square: () => dispatch(squareAction()),
    };
};

// connect方法，用于从 UI 组件生成容器组件，即将这两种组件连起来。
// connect方法接受两个参数：mapStateToProps和mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(Presentational);
