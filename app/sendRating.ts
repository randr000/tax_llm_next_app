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
        fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY}/rating`, postReqPayload)
        .then(res => res.json())
        .then(json => console.log(json.msg));
    } catch (error) {
        console.log(error);
    }
}

export default sendRating;