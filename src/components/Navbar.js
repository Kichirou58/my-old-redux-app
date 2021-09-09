/**
 * Component Navbar
 */

import React from 'react'

/**
 * Module dùng để validate dữ liệu trong ứng dụng React
 * Chỉ nên dùng ở MT dev vì lý do về hiệu năng
 */
import PropTypes from "prop-types";

import { connect } from "react-redux";

/**
 * Navbar               : component Navbar
 * @param {*} todos     : State todos từ trong Store đã được móc ra ở hàm mapStateToProps()
 * @returns             : Render Navbar
 */
const Navbar = ({todos}) => {
    const length = todos.length
    return (
        <div className='navbar'>
            <h1>My Redux Todos App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Total todos: {length}</li>
            </ul>
        </div>
    )
}

/**
 * PropTypes sẽ export một loạt các validator để đảm bảo rằng data đầu vào là đúng.
 * Ở đây, ta sử dụng PropTypes.array.isRequired để đảm bảo todos phải là 1 obj array trước khi được truyền xuống Navbar
 */
Navbar.propTypes = {
    todos: PropTypes.array.isRequired,
};

/**
 * mapStateToProps  : Mapping state của component hiện tại với state trong store
 * @param {*} state : state của store
 * @returns         : state đã móc được ra
 */
const mapStateToProps = (state) => {
    return {
        // Móc state myTodos từ trong Store - chính là todoReducer
        todos: state.myTodos.todos,
    };
};

// Connect component Navbar đến Store kèm theo mapStateToProps() để móc state
export default connect(mapStateToProps, {})(Navbar);
