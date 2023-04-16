+++
title = "Moving to Zola"
date = 2023-04-17
[taxonomies]
tags=["zola"]
+++

Since this is the first post on my new site, I want to start with an explanation about how I ended up with with zola.

<!-- more -->

# Moving to Zola for my new website.

As the title says this site is built with zola. [Zola](https://www.getzola.org/) is a static site generator which is similar to [Hugo](https://gohugo.io/) that focused on simplicity. By "simplicity" I meant simple in design. It's basicaly just a single binary file with no dependencies attached whatsoever. It's written in Rust and has all the useful features like sass compilation, feed generation, search index generation, syntax highlighting for code blocks. Even with all that it still manages to have a blazingly fast building process. So I decided to talk about what I liked specificaly about zola.

## Before Zola

I always wanted to build a website so that I have my own place on the internet. Since I wasn't a big fan of social media sites even back when I was a school kid, having a website seemed very important. The problem was that even if I wasn't a programmer by any means I still wanted to build it myself. So I tried to build with pure HTML, CSS and JavaScript from scratch. I managed to get it to a deployable condition. But managing a pure HTML static website wasn't awesome as building such a thing.

Feeling frustrated I moved to [WordPress](https://wordpress.com/). With the large support to WordPress sites throughout the internet and having a massive number of plugins, building, deploying and managing a WordPress site is a easy and compfortable process. But there was this voice coming back of my head that keep whispering "Where is the fun in this?". So nuke the whole project directory and looked for another option.

Finally I decided to go with [flask](https://flask.palletsprojects.com). Even with the little python knowledge I had, I managed to build a fully functional site. It wasn't a mess like my static site and it wasn't as boring as my WordPress site. So it's sort of a middle ground and I really enjoyed working with flask. But in the end it seemed like an overkill for a simple website. This time I didn't nuke the project but looked for another more simple, minimal option.

P.S. - I know there are a lot of number of options I would have try other than only WordPress and flask. But decisions were made as they were made always. **Out of nowhere**. 

## Finding out about Zola

At the time I was watching a whole lot of tech related youtube videos and ended up finding out aboutu Static Site Generators. The concept intrigued me. It was the perfect tool for my need. It was I was looking for. At the time it was about [Hugo](https://gohugo.io/) which is a great ssg by the way. It was a very minimal static site generator which is written in go programming language and it already had a large community hence there were a huge number of themes to choose. But for some reason the whole process of setting up a hugo site just didn't click with me. So I searched for an alternative.

So I found zola. [Zola](https://www.getzola.org/) was even more minimal than Hugo and it was using a template engine called [Tera](https://tera.netlify.com/) which is very similar to [Jinja2](https://jinja.palletsprojects.com/en/2.10.x/) which was used in flask. Zola also has a bunch of themes listed in their website. But I wasn't comfortable with an using already existing theme for my website. Unlike in Hugo they will teach you to setup a basic website from scratch in their "Getting Started" page in [Documentation](https://www.getzola.org/documentation/getting-started/overview/) instead of using a theme.

## Few things I like about Zola.

- Zola shows it's simplicity even in their documentation. It's dead simple, easy to digest and gives all the knowledge to get a basic site up and running without confusing you with a whole bunch of technical details.
- It gives you the freedom to make your website exactly how you want it to be.
- It's blazingly fast (It's written in Rust btw).
- It is supported by Cloudflare Pages.
- Most importantly it was fun.






