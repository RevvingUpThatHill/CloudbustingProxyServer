docker build -t proxy .
docker run --name=proxy -d proxy
sleep 3s
docker logs proxy
docker kill proxy
docker rm proxy