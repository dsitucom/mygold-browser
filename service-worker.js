/**
 * Check out https://googlechrome.github.io/sw-toolbox/ for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */


'use strict';
importScripts('./build/sw-toolbox.js');

self.toolbox.options.cache = {
  name: 'ionic-cache'
};

// pre-cache our key assets
self.toolbox.precache(
  [
    'https://beqbhwfln5.execute-api.us-east-2.amazonaws.com/Prod/my',
    'https://beqbhwfln5.execute-api.us-east-2.amazonaws.com/Prod/sg',
    'https://beqbhwfln5.execute-api.us-east-2.amazonaws.com/Prod/id',
    'https://beqbhwfln5.execute-api.us-east-2.amazonaws.com/Prod/my/contacts',
    'https://beqbhwfln5.execute-api.us-east-2.amazonaws.com/Prod/my/events',
    './build/main.js',
    './build/main.css',
    './build/polyfills.js',
    'index.html',
    'manifest.json'
  ]
);

// dynamically cache any other local assets
self.toolbox.router.any('/*', self.toolbox.cacheFirst);

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;
