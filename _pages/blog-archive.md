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
    gap: 20px;
    margin: 20px 0;
  }

  .blog-item {
    display: flex;
    align-items: center;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
    text-decoration: none;
    color: inherit;
  }

  .blog-item:hover {
    background-color: #f9f9f9; /* Light background color on hover */
  }

  .blog-item img {
    width: 100px; /* Fixed width for thumbnails */
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 15px;
  }

  .blog-content {
    flex: 1;
  }

  .blog-title {
    font-weight: bold;
    color: #333;
    margin: 0;
    font-size: 1.1em;
  }

  .blog-date {
    color: #555;
    font-size: 0.9em;
    margin-top: 5px;
  }
</style>

<h1 style="color: #DD4124;">Blog</h1>
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
