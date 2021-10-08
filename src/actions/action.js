// const AddOneAction = {
//     type: "ADD",
//     num: 1,
// };
// const AddTwoAction = {
//     type: "ADD",
//     num: 2,
// };
// const SquareAction = {
//     type: "Square",
// };

// Action 创建函数
const addAction = (num) => {
    return {
        type: "ADD",
        num,
    };
};

const squareAction = () => {
    return {
        type: "SQUARE",
    };
};

export { addAction, squareAction };
