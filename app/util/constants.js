export const wshost = 'localhost';
export const wsport = 8443;
export const apiport = 3000;
export const token = process.env.token;
export const containername = "code-server";
export const containerimage = "lscr.io/linuxserver/code-server:latest";
export const containerstart = `docker run -d --name=${containername} --privileged -e PUID=1000 -e PGID=1000 -e TZ=Etc/UTC -e DEFAULT_WORKSPACE=/config/workspace -p ${wsport}:${wsport} ${containerimage}`