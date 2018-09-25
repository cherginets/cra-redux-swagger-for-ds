// region Редиректы, схема следующая:
// Вызывая redirect в редьюсере устанавливается флаг redirect (в true) и собстно задаёт url
// Layout компонент редиректит, и после редиректа вызывает ф-ю redirect_stop,
// Которая в свою очередь устанавливает флаг в false
// Всё просто :)
export function redirect(new_redirect_url) {
    return (dispatch, getState) => {
        dispatch({
            type: 'REDIRECT_DO',
            redirect_url: new_redirect_url,
        });
    }
}
export function redirect_stop() {
    return (dispatch, getState) => {
        dispatch({
            type: 'REDIRECT_STOP',
        });
    }
}
// endregion