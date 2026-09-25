FROM nginx:alpine
COPY index.html styles.css app.js sitemap.xml robots.txt /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets
EXPOSE 80
