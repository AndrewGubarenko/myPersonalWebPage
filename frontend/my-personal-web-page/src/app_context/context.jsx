let startUrl;

if(process.env.NODE_ENV === "production") {
    startUrl = "http://localhost:8080/";
}

if(process.env.NODE_ENV === "development") {
    startUrl = "http://localhost:8080/";
}

export {startUrl};