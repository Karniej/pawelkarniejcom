# Latest YouTube uploads

The homepage shows the latest three real uploads from Paweł's public YouTube
channel.

`npm run build` runs `scripts/fetch-youtube-videos.mjs`. The script reads the
public YouTube Atom feed and writes `data/youtube-videos.json`. It does not need
an API key.

The default channel ID is `UCZFNvtnHjY_8pIEQmD16qiA`. Set
`YOUTUBE_CHANNEL_ID` only if the site must read a different channel.

If the feed request fails, the build keeps the last verified entries. If the
channel has no uploads, the JSON file becomes an empty array and the homepage
does not render the video section.
