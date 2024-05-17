import data from "../../data/data.json";

export async function GET(request: Request) {
    return new Response(JSON.stringify(data));
}