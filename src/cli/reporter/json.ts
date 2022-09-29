import { writeFile } from 'fs/promises';
import { CompatData } from '../../types';

export async function createJson(compatData: Record<string, CompatData>, version: string, path: string = 'compat.json') {
  const out = JSON.stringify({
    node: version,
    dependencies: compatData,
  });
  await writeFile(path, out);
  console.log(`File generated at ${path}`);
}
