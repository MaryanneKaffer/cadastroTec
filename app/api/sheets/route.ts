// app/api/sheets/route.ts
import { google } from "googleapis";

export async function POST(req: Request) {
    console.log(process.env.GOOGLE_CLIENT_EMAIL)
    console.log(process.env.GOOGLE_PRIVATE_KEY)
    console.log(process.env.GOOGLE_SHEET_ID)
    const body = await req.json();

    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: "default!A1",
        valueInputOption: "RAW",
        requestBody: {
            values: [[
                body.nome,
                body.fone,
                body.email,
                body.cpf,
                body.cidade,
                body.estado,
                body.bairro,
                body.ie,
                body.endereco,
                body.cep,
                new Date().toISOString()
            ]],
        },
    });

    return Response.json({ ok: true });
}