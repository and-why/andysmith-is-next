---
title: Flight Deal Tracker
date: '2021-04-28'
imageSrc: '/images/jacks-deals.png'
height: '1946'
width: '3792'
excerpt: This was a fun and interesting project, one which I' considering trying to run with.
---
This week I have been working on a really interesting project, and a *really useful one*... It's a flight tracker, moreover, it's a way to keep an eye on flight prices and notify me if there are any under a specified value. 

For example, if I want to fly from Melbourne to Chieng Mai, for less than $400 return, then I can put in those details and each day this tool will look at all flights from Melbourne the Cheing Mai for the next 6 months, and if one comes in at under $400, it'll send me an SMS. I can create a list of different cities I want to visit and it'll look through them all.

The purpose of this challenge was to put together a number of skills I've been learning into a useful application. Skills being OOP in Python, readying and writing data using APIs, and everything else from functions to loops. For this, I need to read from Google Sheets, using Sheets API, I also need to pull flight searches, so I'm using Kiwi's Tequila API, as it's free. I then need to send SMS messages with Twilio's SMS API. 

Funny story from this project. I literally wasted 3 hours pulling data down from the Tequila API, and it kept coming through with a 200 response - which means it's successful, but the data was coming through as HTML. I tried a number of ways to decode, unpack, changing the headers, API keys and all sorts until I finally spotted that I had spelled tequila with 2 L's. I had ended up writing the URL because the docs had a weird dropdown of the URL. This is perhaps more frustrating than the famous missing a semi-colon. 

Now I've managed to get the basic functionality mapped out and working, basically I've nailed the brief for the first part. My code quite a bit different from the teacher's, but that's good. It shows I did it myself and didn't copy I suppose. The next part is to create a little input python script so others can join the list. It's based on Jack's Flight Club, a membership platform that pulls together the best flights deals available.

The actual project has this done using an online tool called Replit. I'm going to take this a bit further and build a page on this website to allow users to add their name, email and home airport to the database so that they can get custom alerts for cheap flight prices. I've not worked out all the kinks yet, but I think it'll test my ReactJS/NextJS skills as well as hooking into Python. 