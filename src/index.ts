#!/usr/bin/env node

import { create } from './logging';
import { checkConfig } from './validate';
import { editReadme } from './editor';

const Logger = create('Entry');

const badger = () => {
  Logger.info('0. Istanbul Badges Readme process started');

  return Promise.resolve(checkConfig())
    .then(() => editReadme())
    .catch((error) => {
      Logger.error(error);
      Logger.error('Please refer to the documentation');
      Logger.error('https://github.com/olavoparno/istanbul-badges-readme/blob/master/README.md');
    })
    .finally(() => {
      Logger.info('0. Istanbul Badges Readme process finished');
    });
};

badger();
