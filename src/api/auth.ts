import axios, { AxiosInstance, AxiosResponse } from "axios";



const requestImageBackground = (): Promise<AxiosResponse> => {
    return new Promise((resolve, reject) => {
        axios
            .get('https://api.unsplash.com/photos/random\?client_id\=n9OVpv3AjzNjI24wDu2vgMc4d8gHzgDvUJPmFGVDKio', {
                params: {
                    query: 'office',
                }
            })
            .then((response) => resolve(response))
            .catch(reject);
    });
};

export {
    requestImageBackground
}