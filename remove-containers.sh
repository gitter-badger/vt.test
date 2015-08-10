# This file is used to stop and remove all containers and to remove all images. 
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker images | xargs docker rmi
