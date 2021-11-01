HERE := ${CURDIR}

CONTAINER := angular-working-with-ssr-and-i18n

default:
	::

build:
	docker compose build

up:
	docker compose -f docker-compose.yml up -d --build

shell:
	docker compose -f docker-compose.yml exec app /bin/bash	