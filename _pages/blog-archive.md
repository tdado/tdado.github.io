---
permalink: /blog-archive/
classes: wide
layout: custom_collection
author_profile: true
---

<style>
  .blog-list {
    display: flex;
    flex-direction: column;
    gap: 48px;
    margin: 60px 0;
  }

  .blog-item {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    border-bottom: 1px solid #eee;
    padding-bottom: 40px;
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  .blog-item:hover {
    transform: translateX(6px);
    opacity: 0.9;
  }

  .blog-item img {
    width: 160px;
    height: 160px;
    object-fit: cover;
    margin-right: 32px;
    flex-shrink: 0;
  }

  .blog-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .blog-title {
    font-size: 1.8em;
    font-weight: 700;
    margin: 0 0 8px;
    color: #222;
    line-height: 1.2;
  }

  .blog-title:hover {
    color: #DD4124;
  }

  .blog-date {
    font-size: 0.95em;
    color: #777;
  }

  @media (max-width: 700px) {
    .blog-item {
      flex-direction: column;
      align-items: flex-start;
    }

    .blog-item img {
      margin-bottom: 20px;
      margin-right: 0;
      width: 100%;
      height: auto;
    }

    .blog-title {
      font-size: 1.4em;
    }
  }
</style>

<h1 style="color: #DD4124; margin-top: 1em;">Blog</h1>

<div class="blog-list">
  {% for post in site.posts %}
  <a href="{{ post.url }}" class="blog-item">
    {% if post.header.teaser %}
      <img src="{{ post.header.teaser }}" alt="{{ post.title }}">
    {% else %}
      <img src="/assets/images/default-blog-image.jpg" alt="{{ post.title }}">
    {% endif %}
    <div class="blog-content">
      <div class="blog-title">{{ post.title }}</div>
      <div class="blog-date">{{ post.date | date: "%B %d, %Y" }}</div>
    </div>
  </a>
  {% endfor %}
</div>

