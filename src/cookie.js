import Cookies from 'universal-cookie';

const cookies = new Cookies();

const setCookie = (name, value, option) => {
    cookies.set(name, value, {...option}) 
}

const getCookie = name => cookies.get(name);

export {setCookie, getCookie};