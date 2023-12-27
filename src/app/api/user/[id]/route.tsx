import { NextResponse } from "next/server";

let url = 'https://reqres.in/api/users';

//get details of a user
export async function GET(req: Request ,context: any){
    let response = await fetch(`${url}/${context.params.id}`);
    let data = await response.json();
    return NextResponse.json(data);
}

export async function PUT(req: Request, context: any){
    //console.log(context)
    let reqBody = await req.json();
    if(!reqBody.name){
        return NextResponse.json({error: "name is required"}, {status: 400});
    }
    if(!reqBody.job){
        return NextResponse.json({error: "job is required"}, {status: 400});
    }
    //make remote api call to another microservice
    let response = await fetch(`${url}/${context.params.id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqBody)
    });
    const jsonRes = await response.json();
    //console.log(reqBody)
    return NextResponse.json(jsonRes);
}

//delete a user
export async function DELETE(req: Request, context: any){
    
    //make remote api call to another microservice
    await fetch(`${url}/${context.params.id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    return NextResponse.json({message: "user deleted successfully"}, {status: 404});
}