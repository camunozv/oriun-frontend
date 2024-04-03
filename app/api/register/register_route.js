import connectToDataBase from "@/lib/mongo_connection";

export async function POST (req)
{
    console.log("Buenas tarder")
    try {
        await connectToDataBase();
        console.log("hola")
        const {user_name, user_email, password} = await req.json();
        console.log({user_name, user_email, password});
        return;
    } catch (error)
    {
        console.log("An error occured while registering.", error);
    }
}
