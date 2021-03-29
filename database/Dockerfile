FROM postgres:alpine

COPY schema.sql sql/


WORKDIR sql/

EXPOSE $PORT

# Run these two commands to add the schemas to the db
# Search for the name of the container running: docker ps


# docker exec -it rum2go_DB /bin/bash
# psql -U postgres -d rum2go:1.0-db -f schema.sql
