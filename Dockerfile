FROM neo4j/neo4j
MAINTAINER Fredrik Christenson
EXPOSE 3000
ADD . /app
RUN apt-get update -y
RUN curl -sL https://deb.nodesource.com/setup_4.x | bash -
RUN apt-get install -y nodejs
RUN npm install /app
CMD cd /app && npm start
