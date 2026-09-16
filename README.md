# திருமண அழைப்பிதழ் — Traditional Tamil Wedding Invitation Website

A premium, single-page wedding invitation built with plain HTML, CSS and vanilla JavaScript. No build step, no frameworks — just open `index.html` in a browser.

## File structure

```
wedding-invitation/
├── index.html
├── style.css
├── script.js
├── images/
│   ├── groom.jpg
│   ├── bride.jpg
│   ├── couple.jpg
│   ├── photo1.jpg … photo6.jpg
└── audio/
    └── wedding-music.mp3
```

The `images/` and `audio/` folders currently only contain a `PLACEHOLDER.txt` note each — drop your real files in with the exact names above (or update the paths in `script.js`, see below) and everything will pick them up automatically. Until then, the couple photo and gallery tiles show an elegant "missing image" gold placeholder instead of a broken image icon, so the site still looks intentional.

## HOW TO CUSTOMIZE

Everything content-related lives at the top of **`script.js`**, inside two objects: `weddingDetails` and `weddingImages`. You never need to touch the HTML.

| What to change | Where |
|---|---|
| Groom / bride name | `weddingDetails.groomName`, `weddingDetails.brideName` |
| Wedding date & countdown target | `weddingDetails.weddingDate` (ISO format `"YYYY-MM-DDTHH:mm:ss"`) |
| Display date shown in hero/details | `weddingDetails.weddingDateDisplay` |
| Muhurtham / ceremony time | `weddingDetails.weddingTime` |
| Two-day event schedule | `weddingDetails.events` (array of `{title, date, time, venue}`) |
| Venue name | `weddingDetails.venueName` |
| Full address | `weddingDetails.address` |
| Google Maps "get directions" link | `weddingDetails.mapsUrl` — paste any Google Maps share link |
| Google Maps embedded preview | `weddingDetails.mapEmbedUrl` — paste an **embed** URL (Google Maps → Share → Embed a map → copy the `src="..."` value) |
| WhatsApp RSVP number | `weddingDetails.whatsappNumber` — digits only, country code first, e.g. `"919876543210"` |
| Phone call number | `weddingDetails.phoneNumber` — e.g. `"+919876543210"` |
| RSVP WhatsApp message | `weddingDetails.rsvpMessage` |
| Invitation / blessings text | `weddingDetails.blessingsText`, `weddingDetails.blessingsSignature` |
| Footer text | `weddingDetails.footerLine1`, `weddingDetails.footerLine2` |
| Browser tab title | `weddingDetails.pageTitle` |
| Background music file | `weddingDetails.backgroundMusic` (path) |
| Turn music button on/off | `weddingDetails.enableMusic` (`true` / `false`) |
| Turn falling petal animation on/off | `weddingDetails.enablePetals` (`true` / `false`) |
| Couple photo | `weddingImages.couple` (path) — also `groom` / `bride` if you want to use them elsewhere |
| Gallery photos | `weddingImages.gallery` — array of up to 6 (or more) image paths |

After editing, just save `script.js` and refresh the page — no build tools needed.

## Notes

- The countdown, RSVP links, maps button and WhatsApp/Facebook/copy-link share buttons are all generated dynamically from the config — nothing is hard-coded in the HTML.
- If `mapEmbedUrl` is left empty, a stylish placeholder is shown instead of a broken iframe.
- If `mapsUrl` is left empty, the "get directions" button is disabled with a note instead of linking nowhere.
- The background music never autoplays (to respect browser policy) — it starts only when the person taps the floating ♫ button.
- Falling petals automatically reduce in number on narrow screens, and turn off entirely if the visitor's OS has "reduce motion" enabled.
- The opening door animation can be skipped at any time with the "Skip" button in the corner.
- Best viewed and shared on mobile — the layout was optimized mobile-first since invitations are usually opened from a WhatsApp link.
