<!-- @format -->

# YouTube API Setup

To enable automatic fetching of your latest YouTube shorts, you need to set up a YouTube Data API key.

## Steps:

1. Go to [Google Cloud Console](https://console.developers.google.com/)
2. Create a new project or select an existing one
3. Enable the "YouTube Data API v3"
4. Create credentials (API Key)
5. Copy the API key

## Environment Variable:

Create a `.env.local` file in the root of the pawelkarniej-web directory and add:

```
YOUTUBE_API_KEY=your_actual_api_key_here
```

## How it works:

- The `/api/youtube` endpoint fetches the latest 3 shorts from @thepawelk
- Videos are automatically displayed with real thumbnails, titles, and durations
- If the API fails, fallback placeholder videos are shown
- The data refreshes each time someone visits the page

## API Limits:

- YouTube Data API has a daily quota limit
- Consider implementing caching for production use
- The current setup fetches data on each page load
