import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';
import { auth, EnrichedSession } from "@/auth"; 
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const session = (await auth()) as EnrichedSession;

  console.log('Session inside the route ', session);

  if (!session) {
    return new Response('Unauthorized', {
      status: 401,
    });
  }

  const clientId = process.env.AUTH_GOOGLE_ID;
  const clientSecret = process.env.AUTH_GOOGLE_SECRET;
  const accessToken = session?.accessToken;
  const refreshToken = session?.refreshToken;

  const oauth2Client = new OAuth2Client({
    clientId,
    clientSecret,
  });

  oauth2Client.setCredentials({
    access_token: accessToken,
    refresh_token: refreshToken,
  });

  // Use the provider token to authenticate with the Google Calendar API
  const calendar = google.calendar({
    version: 'v3',
    auth: oauth2Client,
  });

  return NextResponse.json({
    access_token: oauth2Client.credentials.access_token,
    refresh_token: oauth2Client.credentials.refresh_token,
});
}

