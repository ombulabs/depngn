import { exec } from 'child_process';
import { promisify } from 'util';
import { writeFile as syncWriteFile, access as syncAccess } from 'fs';

// `fs/promises` is only available from Node v14 onwards
// so we import the sync versions of `writeFile` and `access` and transform them into
// async versions using `promisify` (available from Node v8 onwards)
// if we ever decided to drop support for Node <v14, we can revert to using `fs/promises`
//
// `exec` doesn't have a promise version so we have to promisify it no matter what

export const access = promisify(syncAccess);
export const asyncExec = promisify(exec);
export const writeFile = promisify(syncWriteFile);
