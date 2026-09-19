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
    margin: 36px 0;
  }

  .blog-item {
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 20px 0;
    border-bottom: 1px solid #eee;
    text-decoration: none;
    color: inherit;
    transition: transform 0.2s ease;
  }

  .blog-item:first-child {
    border-top: 1px solid #eee;
  }

  .blog-item:hover {
    transform: translateX(4px);
  }

  .blog-item img {
    width: 110px;
    height: 110px;
    object-fit: cover;
    flex-shrink: 0;
  }

  .blog-content {
    flex: 1;
  }

  .blog-title {
    margin: 0 0 5px;
    color: #222;
    font-size: 1.35em;
    font-weight: 600;
    line-height: 1.25;
    transition: color 0.2s ease;
  }

  .blog-item:hover .blog-title {
    color: #DD4124;
  }

  .blog-date {
    color: #777;
    font-size: 0.85em;
  }

  .misc-intro {
    margin-top: -10px;
    color: #777;
  }

  @media (max-width: 700px) {
    .blog-item {
      gap: 16px;
      padding: 16px 0;
    }

    .blog-item img {
      width: 80px;
      height: 80px;
    }

    .blog-title {
      font-size: 1.15em;
    }
  }
</style>

<h1 style="color:#DD4124; margin-top:1em;">Misc</h1>

<div class="misc-intro">
  Notes, side quests and other things.
</div>

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