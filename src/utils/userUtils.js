export const getUserByEmail = (users, email) => {
    if (users) {
        const user = users.find((user) => user.email === email);
        return user ? user : null;
    }
    return null;
};
