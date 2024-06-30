let startUrl = process.env.NODE_ENV === "production"
    ? "http://localhost:8081/"
    : "http://localhost:3000/";

export default class Service {

    static getCV = () => {
        return fetch(startUrl + "cv", {
            method: "GET",
            headers: new Headers({
                "Content-type": "application/pdf"
            })
        });
    }

    static sendEmail = (email) => {
        return fetch(startUrl + "mail", {
            method: "POST",
            body: JSON.stringify(email),
            headers: new Headers({
                "Content-type": "application/json"
            })
        });
    }
}
