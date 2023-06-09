export interface Store{
    addrstring: string;
    zipcode: string;
    location: {"Lat":number,"Lon":number};
    wkt: string;
    uatid: string;
    name : string;
    addr: address;
    type: type;
    workhours: string;
}

interface type{
    id: string;
    name: string;
}

interface address{
    addrstring: string;
    zipcode: string;
    location: string;
}