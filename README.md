# 112-1 Web Programming Final Project
## members
<nl>
<li>張均豪</li>
<li>林禹融</li>
<li>陳秉緯</li>
</nl>

## Development
### step 1:
```sh
pnpm install:all
```

## Run Backend
### Step 1 : Start database

This will have postgres and adminer running for the backend

```sh
docker-compose up -d
```

### Step 2 : Install dotenv & ts-node

```sh
cd backend
pnpm setup
```

### Step 3 : Run Prisma

```sh
cd backend
pnpm generate
pnpm migrate
```

### Step 4 : Start Apollo Server(backend)

```sh
cd ..
pnpm backend
```

## Run Frontend
### step 1:
```sh
pnpm frontend
```
then the frontend will run on port 5713

#### Problems may occur
kill the port being stucked : `sudo kill -9 $(sudo lsof -t -i:port)`. If you want to kill port 8000, type : `sudo kill -9 $(sudo lsof -t -i:8000)`

