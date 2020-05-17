import fs from 'fs';
import path from 'path';

import UploadConfig from '@config/upload';
import IStorageProvider from '../models/IStorageProvider';

class DiskStorageProvider implements IStorageProvider {
  public async saveFile(file: string): Promise<string> {
    await fs.promises.rename(
      path.resolve(UploadConfig.tmpFolder, file),
      path.resolve(UploadConfig.uploadsFolder, file),
    );

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    const filePath = path.resolve(UploadConfig.uploadsFolder, file);

    const fileExists = await fs.promises.stat(filePath);

    if (fileExists) {
      await fs.promises.unlink(filePath);
    }
  }
}

export default DiskStorageProvider;
