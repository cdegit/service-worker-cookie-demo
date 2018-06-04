import toolbox from 'sw-toolbox'

const version = '0.0.1'

const worker = () => {
    const baseCacheName = `v${version}`
    toolbox.options.cache.name = baseCacheName
    toolbox.options.cache.maxAgeSeconds = 86400
    toolbox.options.debug = true
    toolbox.router.default = toolbox.networkOnly
}

worker()
