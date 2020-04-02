import configs from "../configs.json";

class ApiService {
    private baseUrl: string = "https://api-dev.fidel.uk/v1d/";
    private programId: string = configs["program-id"];
    private headers: { "content-type": string; "fidel-key": string } = {
        "content-type": "application/json",
        "fidel-key": configs["fidel-key"]
    };

    async getTransactions(start) {
        const startQuery = start
            ? `&start=${encodeURIComponent(JSON.stringify(start))}`
            : "";

        const url = `${this.baseUrl}programs/${this.programId}/transactions?limit=${configs.limit}${startQuery}`;

        const response = await fetch(url, {
            method: "get",
            headers: this.headers
        });

        const json = await response.json();
        return json;
    }
}

const apiService = new ApiService();
export default apiService;
