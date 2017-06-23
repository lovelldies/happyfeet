---
---
var postsHREF = [{% for post in site.posts %}"{{ site.baseurl }}{{ post.url }}"{% unless forloop.last %},{% endunless %}{% endfor %}];
var postsTitle = [{% for post in site.posts %}"{{ post.title }}"{% unless forloop.last %},{% endunless %}{% endfor %}];
var postsImage = [{% for post in site.posts %}{% if post.image['main'] %}"{{ post.image['main'] }}"{% else %}"{{ post.image }}"{% endif %}{% unless forloop.last %},{% endunless %}{% endfor %}];
var postsExcerpt = [{% for post in site.posts %}"{{ post.excerpt }}"{% unless forloop.last %},{% endunless %}{% endfor %}];