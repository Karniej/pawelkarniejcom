<!-- @format -->

# YouTube Shorts Automation

The home page shows the latest three shorts from your YouTube channel. A build-time script refreshes the data so the static export always ships with up-to-date content.

## Setup Steps

1. Go to [Google Cloud Console](https://console.developers.google.com/)
2. Create (or choose) a project
3. Enable the **YouTube Data API v3**
4. Create an API key and copy it

## Environment Variables

Set the key in the Netlify dashboard (or in a local `.env.local` file) for the `pawelkarniej-web` app:

```
YOUTUBE_API_KEY=your_actual_api_key_here
```

You can optionally override the channel handle (defaults to `thepawelk`):

```
YOUTUBE_CHANNEL_HANDLE=thepawelk
```

## How It Works

* `npm run build` triggers `scripts/fetch-youtube-shorts.mjs` (via the `prebuild` script)
* The script resolves the channel ID from the handle, fetches recent uploads, filters for shorts (<60s), and writes the top three to `data/youtube-shorts.json`
* `app/page.tsx` imports that JSON to render the cards
* If the API key is missing or the request fails, the previous JSON content is kept as a fallback

## Notes

* The YouTube Data API has daily quotas—three requests per build keeps usage low
* For local development without an API key you will see the fallback data
* Commit `data/youtube-shorts.json` so the site has content even when the API is unavailable
