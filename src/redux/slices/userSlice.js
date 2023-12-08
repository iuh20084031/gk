import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUser, addUserApi, updateUserApi, deleteUserApi } from '../../api/userApi';

// Thunk để fetch danh sách user
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await getUser();
    return response.data;
});

// Thunk để thêm user
export const addUser = createAsyncThunk('users/addUser', async (user) => {
    const response = await addUserApi(user);
    return response.data;
});

// Thunk để cập nhật user
export const updateUser = createAsyncThunk('users/updateUser', async ({ id, updatedUser }) => {
    const response = await updateUserApi(id, updatedUser);
    return response.data;
});

// Thunk để xóa user
export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
    await deleteUserApi(id);
    return id;
});

export const addTodoForUser = createAsyncThunk('users/addTodoForUser', async ({ userId, todo }) => {
    const response = await updateUserApi(userId, {
        todos: [...todo, todo],
    });
    return response.data;
});

export const deleteTodoForUser = createAsyncThunk('users/deleteTodoForUser', async ({ userId, todoId }) => {
    const response = await updateUserApi(userId, {
        todos: todos.filter((todo) => todo.id !== todoId),
    });
    return response.data;
});

const userSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                const index = state.findIndex((user) => user.id === action.payload.id);
                if (index !== -1) {
                    state[index] = action.payload;
                }
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                return state.filter((user) => user.id !== action.payload);
            })
            .addCase(addTodoForUser.fulfilled, (state, action) => {
                const { id } = action.payload;
                const userIndex = state.findIndex((user) => user.id === id);
                if (userIndex !== -1) {
                    state[userIndex] = action.payload;
                }
            })
            .addCase(deleteTodoForUser.fulfilled, (state, action) => {
                const { id } = action.payload;
                const userIndex = state.findIndex((user) => user.id === id);
                if (userIndex !== -1) {
                    state[userIndex] = action.payload;
                }
            });
    },
});

export default userSlice.reducer;
