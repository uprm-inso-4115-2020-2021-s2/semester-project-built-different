up:
	docker-compose up
bup:
	rm -r database/db/ && docker-compose up --build

db:
	docker exec -it rum2go_DB /bin/bash
