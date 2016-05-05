export class Post {
    public userId: number;
    public id: number;
    public title: string;
    public body: string;

    constructor() {  }
}

export class Geo {
    lat: string;
    lng: string;
}

export class Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export class Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}
