/**
 * Nơi định nghĩa các action được phát ra từ App
 */
// =============================================================================

/**
 * markComplete     : action khi người dùng check complete của todo tương ứng
 * @param {*} id    : id của todo được check
 * @returns         : dispatch action "MARK_COMPLETE" đến reducer kèm id của todo đó
 */
export const markComplete = (id) => (dispatch) => {
    dispatch({
        type: "MARK_COMPLETE",
        payload: id,
    });
};

/**
 * addTodo              : action khi người dùng thêm mới todo
 * @param {*} newTodo   : object todo mới
 * @returns             : dispatch action "ADD_TODO" đến reducer kèm object toto mới
 */
export const addTodo = (newTodo) => (dispatch) => {
    dispatch({
        type: "ADD_TODO",
        payload: newTodo,
    });
};

/**
 * deleteTodo       : action khi người dùng xóa 1 todo
 * @param {*} id    : id của todo bị xóa
 * @returns         : dispatch action "DELETE_TODO" đến reducer kèm id của todo đó
 */
export const deleteTodo = (id) => (dispatch) => {
    dispatch({
        type: "DELETE_TODO",
        payload: id,
    });
};