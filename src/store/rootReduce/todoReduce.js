/**
 * @Description: 测试用的reduce
 * @author Nong
 * @date 2020/6/7
*/
export const toDo = (state='123TODO', action) => {
    if (action.type === 'newTodo') {
        console.log('会触发这个吗')
        return state+'new'
    }
    return  state
}
