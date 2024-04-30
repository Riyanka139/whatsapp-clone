import Cookies from 'universal-cookie';

const cookies = new Cookies();

const setUser = (user) => {
    cookies.set('user', JSON.stringify(user), { path: "/" });
}

const getUser = () => {
    return cookies.get("user");
};

export const cookieService = {
    setUser,
    getUser,
};

export default cookieService;