---
permalink: /blog-archive/
classes: wide
layout: custom_collection
author_profile: true
---

<style>
  .blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 20px 0;
  }

  .blog-item {
    background-color: #ffffff; /* White background for the tiles */
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Light shadow for a floating effect */
    text-decoration: none; /* Remove underline from link */
    color: inherit; /* Inherit text color */
    display: block; /* Ensure the entire tile is clickable */
  }

  .blog-item:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Slightly stronger shadow on hover */
  }

  .blog-item img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  .blog-content {
    padding: 10px;
  }

  .blog-title {
    font-weight: bold;
    color: #333; /* Darker text color for contrast */
    margin-bottom: 5px;
  }

  .blog-date {
    color: #555; /* Slightly lighter text color for the date */
    font-size: 0.9em;
  }
</style>

<h1 style="color: #DD4124;">Blog</h1>
<div class="blog-grid">
  {% for post in site.posts %}
  <a href="{{ post.url }}" class="blog-item">
    <!-- Use teaser image from the post's front matter -->
    {% if post.header.teaser %}
      <img src="{{ post.header.teaser }}" alt="{{ post.title }}">
    {% else %}
      <!-- Fallback image if no teaser is provided -->
      <img src="/assets/images/default-blog-image.jpg" alt="{{ post.title }}">
    {% endif %}
    <div class="blog-content">
      <div class="blog-title">{{ post.title }}</div>
      <div class="blog-date">{{ post.date | date: "%B %d, %Y" }}</div>
    </div>
  </a>
  {% endfor %}
</div>
