import os from 'os';
import path from 'path';
import fs from 'fs';
import { exit } from 'process';

const db_path = path.join(os.homedir(), 'life_extension_map_dev');

try {
  if (!fs.existsSync(db_path)) {
    fs.mkdirSync(db_path, { recursive: true });
    console.log('Directory created successfully');
    exit(0)
  } else {
    console.log('Directory already exists');
    exit(0)
  }
} catch (err) {
  console.error(err);
  exit(1)
}