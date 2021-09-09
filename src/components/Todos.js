/**
 * Component Todos
 */
// ===============================================================================

import React from "react";
import TodoForm from "./TodoForm";

/**
 * Module dùng để validate dữ liệu trong ứng dụng React
 * Chỉ nên dùng ở MT dev vì lý do về hiệu năng
 */
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { markComplete, deleteTodo } from "../store/actions/todoAction";

/**
 * Todos                    : component Todos
 * @param {*} todos         : State todos từ trong Store đã được móc ra ở hàm mapStateToProps()
 * @param {*} markComplete  : action markComplete từ trong Store đã được móc ra ở hàm connect()
 * @param {*} deleteTodo    : action deleteTodo từ trong Store đã được móc ra ở hàm connect()
 * @returns                 : Render Todos
 */
const Todos = ({ todos, markComplete, deleteTodo }) => {
    return (
        <div className="todo-list">
            <TodoForm />
            <ul>
                {/* Hiển thị list todos */}
                {todos.map((todo) => (

                    <li key={todo.id} className={todo.completed ? "completed" : ""}>
                        {todo.title}
                        {/* Dùng hàm bind để xác định tham số this cho function thực thi, this được truyền ở đây sẽ là todo được check complete. Nếu không dùng bind thì this sẽ là window browser */}
                        <input type="checkbox" onChange={markComplete.bind(this, todo.id)} />
                        <button onClick={deleteTodo.bind(this, todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

/**
 * PropTypes sẽ export một loạt các validator để đảm bảo rằng data đầu vào là đúng.
 * Ở đây, ta sử dụng PropTypes.array.isRequired, PropTypes.func.isRequired để đảm bảo todos phải là 1 obj array, markComplete và deleteTodo là 1 function trước khi được truyền xuống Todos
 */
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
};

// Mapping state của component này với state của Store
const mapStateToProps = (state) => {
    return {
        // Móc state myTodos từ trong Store - chính là todoReducer
        todos: state.myTodos.todos,
    };
};

// Connect component Todos đển Store, móc ra action markComplete và deleteTodo
export default connect(mapStateToProps, { markComplete, deleteTodo })(Todos);
