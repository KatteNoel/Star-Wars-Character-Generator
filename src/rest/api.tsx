const ENDPOINT = "https://swapi.dev/api/";

class API {
    get = async (resource: string, id: number) => {
        try {
            const response = await fetch(`${ENDPOINT}${resource}/${id}/`);
            const data = await response.json();
            return data;
        } catch(e) {
            console.log("error fetching resource", e);
        }
    }
}

export const api = new API();