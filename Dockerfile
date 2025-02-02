#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
#stage 2
#FROM nginx:alpine
#COPY --from=node /app/dist/vonome-official-website /usr/share/nginx/html
# gcloud auth login   
# gcloud services enable containerregistry.googleapis.com      
# docker run -d -p 80:80 vonome-official-website:latest
# docker build -t vonome-official-website:latest .    
# docker tag  vonome-official-website:latest  gcr.io/useful-atlas-372807/vonome-official-website:latest  
# docker push gcr.io/useful-atlas-372807/vonome-official-website:latest