# Marc & Karine — Engagement Invitation

## How to run this (step by step)

1. **Install Node.js** if you don't have it: https://nodejs.org (get the
   version labeled "LTS"). Restart your terminal after installing.

2. **Unzip this folder** somewhere on your computer, then open a terminal
   / command prompt **inside that folder**.
   - Mac: right-click the folder → "New Terminal at Folder" (or open
     Terminal and type `cd ` then drag the folder in, then press Enter)
   - Windows: open the folder in File Explorer, click the address bar,
     type `cmd`, press Enter

3. **Install dependencies** (only needed the first time):
   ```
   npm install
   ```

4. **Run it:**
   ```
   npm run dev
   ```

5. **Open your browser** to:
   ```
   http://localhost:3000
   ```

You should see the envelope. Tap the wax seal to open it.

## Sending it to guests

`npm run dev` only runs on your own computer — guests can't open that link.
To actually send this to friends and family, you need to deploy it
somewhere public. The easiest free option:

1. Create a free account at https://vercel.com
2. Install their CLI: `npm install -g vercel`
3. From inside this project folder, run: `vercel`
4. Follow the prompts (just press Enter for defaults) — it'll give you a
   live URL like `marc-karine.vercel.app` in about a minute.
5. Send that URL to everyone.

(Alternatively, if you're comfortable with GitHub, push this folder to a
new repo and import it at vercel.com/new — same result, just no CLI.)

## What's customized in this build

- **Fonts** — headings use your uploaded Leva Blackshear font. No separate
  body font file was provided, so body text uses EB Garamond (elegant serif,
  close in spirit). Send a body font file if you have one and I'll swap it in.
- **Colors** — taupe/gold editorial palette per your spec; only the
  ampersand in "Marc & Karine" is gold.
- **Background** — fine paper grain, soft vignette, gentle upper-left
  sunlight. I generated a plain ivory paper texture (`public/images/paper-texture.png`)
  since the original texture file wasn't part of what you uploaded — swap
  it out for your own if you have one, same filename.
- **Botanicals** — 3 baby's breath sprigs + 2 dried flowers tucked under
  the card's corners.
- **Dandelions** — 8 individually drifting seeds, sliced from your sprite
  sheet, each on its own slow diagonal loop (18–25s).
- **Wax seal** — your uploaded seal, positioned on the envelope's flap point.
- **Music** — Zaffe Blossom, fades in, loops, starts on the seal tap
  (browsers block autoplay-with-sound until the visitor interacts).

## If something breaks

Copy the exact error text from the terminal and send it over — that's the
fastest way to fix it.
