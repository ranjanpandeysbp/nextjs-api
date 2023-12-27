import { NextResponse } from "next/server";

let url = 'https://reqres.in/api/users';

export async function GET(){
    let response = await fetch(url);
    let data = await response.json();
    return NextResponse.json({users: data});
}

export async function POST(request: Request){
    //extract data from request
    const reqBody = await request.json();
    //make remote api call to another microservice
    let response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqBody)
    });
    const jsonRes = await response.json();
    return NextResponse.json(jsonRes, {status: 201});
}