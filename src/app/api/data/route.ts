// app/api/data/route.ts
import { MongoClient, ServerApiVersion } from 'mongodb';
import { NextResponse } from 'next/server';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI;
if (!uri) {
    throw new Error('environment variable undefined!');
}
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

export async function GET() {
    try {
        await client.connect();
        const collection = client.db('cli_tools').collection('cli_commands');
        const result = await collection.find({}).toArray();
        console.log('Fetched data from MongoDB:', result);
        return NextResponse.json(result);
    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    } finally {
        try {
            await client.close();
        } catch (closeError) {
            console.error('Error closing MongoDB connection:', closeError);
        }
    }
}
