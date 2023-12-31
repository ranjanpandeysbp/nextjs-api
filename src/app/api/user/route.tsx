import dbConnection from "@/db/connection";
import User from "@/models/user";
import { NextResponse } from "next/server";

let url = 'https://reqres.in/api/users';

export async function GET(){
    let response = await fetch(url);
    let data = await response.json();
    //const users = await User.find();
    return NextResponse.json({users: data});
}

export async function POST(request: Request){
    //extract data from request
    //const reqBody = await request.json();
    //make remote api call to another microservice
    // let response = await fetch(url, {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(reqBody)
    // });
    // const jsonRes = await response.json();

    //save user in database
    const reqBody = await request.json();
    await dbConnection();
    const res = await User.create(reqBody);

    return NextResponse.json(res, {status: 201});
}