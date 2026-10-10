# Outside Hours: Make Room for Outside

This is a submission for the [Hacktoberfest Open-Source AI Challenge Week 1: Touch Grass](https://dev.to/challenges/hacktoberfest-week1-2026-10-05).

## What I Built

Outside Hours is a small, screen-light idea generator for anyone who wants a nudge to step away from their screen. Ask for an idea or choose a prompt such as “I have 10 minutes” or “I want to spot birds,” and the page suggests a random outdoor activity: take a short walk, listen for birds, find a sunny spot, or explore a nearby green space.

The goal is to make the screen the shortest part of the experience. The suggestions are intentionally simple and can be done at your own pace. They are general inspiration, not location-aware recommendations or safety advice.

## Demo

There is no hosted demo yet. To try the current version, download or clone the repository and open `index.html` in a browser. It is a static page and does not need a server.

## Code

The source is in the [Outside Hours GitHub repository](https://github.com/MohdOves/Dev-Weekeend-Challenge-2).

The page is built with plain HTML, CSS, and JavaScript. The JavaScript picks a random suggestion from a local list and avoids repeating the previous suggestion.

## How I Built It

The current version does **not** use an open-source AI model, an agent harness, or local inference. Its suggestions are a fixed list in `script.js`, selected randomly in the browser.

That makes this a UI prototype for an outdoor-inspiration idea, but it does not yet meet the challenge requirement that open-source AI be at the core of the project. I don't want to claim an AI integration that isn't there.

## Why Does Open Innovation Matter?

I haven't integrated open-source AI into this version, so I can't claim benefits such as offline model inference, data staying on-device, or the freedom to swap or fine-tune models. Those are the parts I would want to explore in a future version—for example, using a small open-weight model locally to turn a broad prompt into a fresh, practical outdoor suggestion without sending the user's question to a closed API.

For now, the prototype itself runs locally in a browser and sends no questions to a server, because it has no AI service or backend at all.

## My Agent Session

Not included.

## Prize Categories

No partner prize category is claimed. This prototype does not currently integrate a partner product or open-source AI tool.