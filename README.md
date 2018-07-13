- use docker install package
```shell
# yarn
sudo docker run --rm --name node_wrapper -v "$PWD":/PCS-MI -w /PCS-MI node:8.10-alpine yarn
# dev run frontend
sudo docker run --rm --name frontend_srv -d -v "$PWD":/PCS-MI -p4200:4200 -w /PCS-MI node:8.10-alpine yarn run start:frontend
# dev run backend
sudo docker run --rm --name back_srv -d -v "$PWD":/PCS-MI -p3000:3000 -w /PCS-MI node:8.10-alpine yarn run start:backend

```


```shell
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install npm@5.0.3 -g

sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'

sudo apt-get install wget ca-certificates
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install postgresql-9.6 pgadmin3
```

- start develop
```bash
sudo npm run start:frontend
sudo npm run start:backend
```



key word

ge->sewStyle->wiStyle

home->sewing->wi


field
text
image

onimage

firstQuery

save


fn
v
fText
MY_CONST

text$
Page
/api/comm/apiUsr
/api/apiWiSave

dbUpsertImage
dbDelText

