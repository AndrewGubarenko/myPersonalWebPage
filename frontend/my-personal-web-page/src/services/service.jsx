let startUrl;

if(process.env.NODE_ENV === "production") {
    startUrl = "http://localhost:8081/";
}

if(process.env.NODE_ENV === "development") {
    startUrl = "http://localhost:3000/";
}

export default class Service {

    static getCV = (id) => {
        return fetch(startUrl + "cv", {
            method: "get",
            headers: new Headers({
                "Content-type": "application/pdf"
            })
        });
    }


    static sendEmail = (email) => {
        return fetch(startUrl + "mail", {
            method: "post",
            body: JSON.stringify(email),
            headers: new Headers({
                "Content-type": "application/json"
            })
        });
    }
}