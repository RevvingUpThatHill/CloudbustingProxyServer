docker build -t proxy .
docker run --runtime=sysbox-runc --name=proxy -d proxy
sleep 3s
docker logs proxy
docker kill proxy
docker rm proxy