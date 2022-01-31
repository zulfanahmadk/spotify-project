import SpotifyWebApi from "spotify-web-api-node/src/spotify-web-api";

const scopes = [
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-private",
    "user-read-email",
    "user-follow-modify",
    "user-follow-read",
    "user-library-read",
    "user-library-modify",
    "user-read-recently-played",
    "playlist-read-private",
    "playlist-read-collaborative",
    "playlist-modify-private",
    "user-read-recently-played",
].join(",");

const params = {
    scope: scopes,
};

const queryParamString = new URLSearchParams(params).toString();

const LOGIN_URL = "https://accounts.spotify.com/authorize?" + queryParamString.toString();

const spotifyApi = new SpotifyWebApi ({
    clientId: process.env.NEXt_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

export default spotifyApi;

export { LOGIN_URL };