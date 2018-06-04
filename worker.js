import toolbox from 'sw-toolbox'

const version = '0.0.1'

const worker = () => {
    const baseCacheName = `v${version}`
    toolbox.options.cache.name = baseCacheName
    toolbox.options.cache.maxAgeSeconds = 86400
    toolbox.options.debug = true

    // const cacheNames = [baseCacheName]

    // Lifecycle Handlers
    // self.addEventListener('install', (e) => {
    //     e.waitUntil(
    //         self.skipWaiting()
    //             .then(() => console.log('[ServiceWorker] Installed version', version))
    //     )
    // })

    // self.addEventListener('activate', (e) => {
    //     e.waitUntil(
    //         self.clients.claim()
    //             .then(() => caches.keys())
    //             .then((cacheKeys) => {
    //                 return cacheKeys.filter(
    //                     (key) => cacheNames.indexOf(key) === -1 &&
    //                         !key.endsWith('$$$inactive$$$')
    //                 )
    //             })
    //             .then((keysToDelete) => keysToDelete.map((key) => caches.delete(key)))
    //             .then((promises) => Promise.all(promises))
    //     )
    // })

    const useCache = /cache=true/.test(self.location.search)

    toolbox.router.default = toolbox.networkOnly // useCache ? toolbox.networkFirst : toolbox.networkOnly
}

worker()
