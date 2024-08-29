import { SendRating, PostRequestPayload } from "./types/types";

async function sendRating(rating: SendRating): Promise<any> {
    /* 
        The length of the strings are based on the maximum characters
        allowed in the sql database for its respective fields
    */
    rating.userMsg = rating.userMsg.slice(0, 300);
    rating.botMsg = rating.botMsg.slice(0, 5000);
    const postReqPayload: PostRequestPayload = {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(rating, (k, v) => v === undefined ? null : v)
    };

    try {
        fetch(`http://${process.env.NEXT_PUBLIC_NODE_DB_HOST}:8100/rating`, postReqPayload);
    } catch (error) {
        console.log(error);
    }
}

export default sendRating;