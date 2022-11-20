/*eslint-disable*/
export const fetchNews = async () => {
    const response = await fetch('https://www.jsonkeeper.com/b/E8FR')
    const { data } = await response.json();

    console.log(data);

    return data;
} 