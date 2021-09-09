/**
 * Reducer todo
 * Reducer lắng nghe các action crud với todo
 */


const initialState = {
    todos: [
        {
            id: 1,
            title: "Viec 1",
            completed: false,
        },
        {
            id: 2,
            title: "Viec 2",
            completed: false,
        },
        {
            id: 3,
            title: "Viec 3",
            completed: false,
        },
    ],
};
/**
 * todoReducer          : reducer lắng nghe các action liên quan đến todo
 * @param {*} state     : state nhận vào (state cũ)
 * @param {*} action    : action cần lắng nghe
 * @returns             : state mới
 */
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "MARK_COMPLETE":
            return {
                // Lúc nào cũng phải lấy lại state cũ, không được update hay override trực tiếp
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                }),
            };
        case "ADD_TODO":
            return {
                // Lúc nào cũng phải lấy lại state cũ, không được update hay override trực tiếp
                ...state,
                todos: [...state.todos, action.payload],
            };
        case "DELETE_TODO":
            return {
                // Lúc nào cũng phải lấy lại state cũ, không được update hay override trực tiếp
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };
        default:
            return state;
    }
};

export default todoReducer;
