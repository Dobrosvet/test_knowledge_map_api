pnpm install

# FIXME перепесать на PowerShell
# Make local dev db directory ~/db_data_life_extension_map
node make_local_db_dir.js

# Starts Docker Compose with PostreSQL DB example for dev and tests
docker compose up -d

# FIXME Переделать скрипт запуска, запускается только на второй раз после паузы просле первого запуска
pnpm start