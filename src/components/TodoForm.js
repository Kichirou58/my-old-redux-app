/**
 * Component TodoForm
 */
// ===============================================================================
/**
 * Import thêm hook useState để khởi tạo state
 * useState() thay thế cho cách khởi tạo state cũ bằng class
 */
import React, { useState } from "react";

/**
 * Module generate unique random id
 */
import { v4 as uuidv4 } from "uuid";

import { addTodo } from "../store/actions/todoAction";

/**
 * Module dùng để validate dữ liệu trong ứng dụng React
 * Chỉ nên dùng ở MT dev vì lý do về hiệu năng
 */
import PropTypes from "prop-types";

import { connect } from "react-redux";

/**
 * TodoForm             : component TodoForm
 * @param {*} addTodo   : action addTodo từ trong Store đã được móc ra ở hàm connect()
 * @returns             : Render TodoForm
 */
const TodoForm = ({addTodo}) => {

    /**
     * Khởi tạo state bằng hàm useState()
     * title        : title của todo
     * setTitle     : Hàm set title cho todo
     */
    const [title, setTitle] = useState("");

    /**
     * onTitleChange    : Khi user thay đổi textbox
     * @param {*} event : event change
     */
    const onTitleChange = (event) => {
        // Gán 2 chiều vào state và textbox
        setTitle(event.target.value);
    };

    /**
     * onFormSubmit     : Khi user submit form
     * @param {*} event : event submit
     */
    const onFormSubmit = (event) => {
        // Turn off event
        event.preventDefault();

        if (title !== "") {
            const newTodo = {
                id: uuidv4(),
                title,
                completed: false,
            };
            // Phát ra action addTodo
            addTodo(newTodo);
            // Reset textbox về rỗng
            setTitle("");
        }
    };

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="title" onChange={onTitleChange} />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

/**
 * PropTypes sẽ export một loạt các validator để đảm bảo rằng data đầu vào là đúng.
 * Ở đây, ta sử dụng PropTypes.array.isRequired để đảm bảo addTodo phải là 1 obj array trước khi được truyền xuống TodoForm
 */
TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired,
};

// Mapping state của component này với state của Store
// Mặc dù không cần lấy state nào trong store nhưng vẫn phải có hàm mapStateToProps vì là kiến trúc của redux
const mapStateToProps = (state) => ({});

// Connect component TodoForm đển Store, móc ra action addTodo
export default connect(mapStateToProps, { addTodo })(TodoForm);
