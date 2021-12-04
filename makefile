init:
	docker-compose build --no-cache

up:
	docker-compose up -d

down:
	docker-compose down

clean:
	docker rm -f $$(docker ps -aq) $$(docker ps -q); docker image rm $$(docker image ls -q) && rm -rf node_modules

clean-hard:
	docker rm -f $$(docker ps -aq) $$(docker ps -q); docker image rm $$(docker image ls -q); docker volume rm $(docker volume ls -q);