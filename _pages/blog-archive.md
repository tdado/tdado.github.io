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
    gap: 32px;
    margin: 40px 0;
  }

  .blog-item {
    display: flex;
    align-items: flex-start;
    background: #fafafa;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
    text-decoration: none;
    color: inherit;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .blog-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    background: #fff;
  }

  .blog-item img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 20px;
    flex-shrink: 0;
  }

  .blog-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .blog-title {
    font-size: 1.4em;
    font-weight: 600;
    margin: 0 0 8px;
    color: #222;
  }

  .blog-date {
    font-size: 0.9em;
    color: #888;
  }

  @media (max-width: 600px) {
    .blog-item {
      flex-direction: column;
      align-items: flex-start;
    }

    .blog-item img {
      margin-bottom: 15px;
      margin-right: 0;
      width: 100%;
      height: auto;
    }

    .blog-title {
      font-size: 1.2em;
    }
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
