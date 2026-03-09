import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\StockListController::index
 * @see app/Http/Controllers/StockListController.php:17
 * @route '/stock-list'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/stock-list',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StockListController::index
 * @see app/Http/Controllers/StockListController.php:17
 * @route '/stock-list'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StockListController::index
 * @see app/Http/Controllers/StockListController.php:17
 * @route '/stock-list'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StockListController::index
 * @see app/Http/Controllers/StockListController.php:17
 * @route '/stock-list'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StockListController::index
 * @see app/Http/Controllers/StockListController.php:17
 * @route '/stock-list'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StockListController::index
 * @see app/Http/Controllers/StockListController.php:17
 * @route '/stock-list'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StockListController::index
 * @see app/Http/Controllers/StockListController.php:17
 * @route '/stock-list'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\StockListController::discounted
 * @see app/Http/Controllers/StockListController.php:25
 * @route '/stock-list/discounted'
 */
export const discounted = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: discounted.url(options),
    method: 'get',
})

discounted.definition = {
    methods: ["get","head"],
    url: '/stock-list/discounted',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StockListController::discounted
 * @see app/Http/Controllers/StockListController.php:25
 * @route '/stock-list/discounted'
 */
discounted.url = (options?: RouteQueryOptions) => {
    return discounted.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StockListController::discounted
 * @see app/Http/Controllers/StockListController.php:25
 * @route '/stock-list/discounted'
 */
discounted.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: discounted.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StockListController::discounted
 * @see app/Http/Controllers/StockListController.php:25
 * @route '/stock-list/discounted'
 */
discounted.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: discounted.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StockListController::discounted
 * @see app/Http/Controllers/StockListController.php:25
 * @route '/stock-list/discounted'
 */
    const discountedForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: discounted.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StockListController::discounted
 * @see app/Http/Controllers/StockListController.php:25
 * @route '/stock-list/discounted'
 */
        discountedForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: discounted.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StockListController::discounted
 * @see app/Http/Controllers/StockListController.php:25
 * @route '/stock-list/discounted'
 */
        discountedForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: discounted.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    discounted.form = discountedForm
/**
* @see \App\Http\Controllers\StockListController::aucnet
 * @see app/Http/Controllers/StockListController.php:33
 * @route '/stock-list/aucnet'
 */
export const aucnet = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: aucnet.url(options),
    method: 'get',
})

aucnet.definition = {
    methods: ["get","head"],
    url: '/stock-list/aucnet',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StockListController::aucnet
 * @see app/Http/Controllers/StockListController.php:33
 * @route '/stock-list/aucnet'
 */
aucnet.url = (options?: RouteQueryOptions) => {
    return aucnet.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StockListController::aucnet
 * @see app/Http/Controllers/StockListController.php:33
 * @route '/stock-list/aucnet'
 */
aucnet.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: aucnet.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StockListController::aucnet
 * @see app/Http/Controllers/StockListController.php:33
 * @route '/stock-list/aucnet'
 */
aucnet.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: aucnet.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StockListController::aucnet
 * @see app/Http/Controllers/StockListController.php:33
 * @route '/stock-list/aucnet'
 */
    const aucnetForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: aucnet.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StockListController::aucnet
 * @see app/Http/Controllers/StockListController.php:33
 * @route '/stock-list/aucnet'
 */
        aucnetForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: aucnet.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StockListController::aucnet
 * @see app/Http/Controllers/StockListController.php:33
 * @route '/stock-list/aucnet'
 */
        aucnetForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: aucnet.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    aucnet.form = aucnetForm
/**
* @see \App\Http\Controllers\StockListController::show
 * @see app/Http/Controllers/StockListController.php:214
 * @route '/vehicle/{id}'
 */
export const show = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/vehicle/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StockListController::show
 * @see app/Http/Controllers/StockListController.php:214
 * @route '/vehicle/{id}'
 */
show.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return show.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StockListController::show
 * @see app/Http/Controllers/StockListController.php:214
 * @route '/vehicle/{id}'
 */
show.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StockListController::show
 * @see app/Http/Controllers/StockListController.php:214
 * @route '/vehicle/{id}'
 */
show.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StockListController::show
 * @see app/Http/Controllers/StockListController.php:214
 * @route '/vehicle/{id}'
 */
    const showForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StockListController::show
 * @see app/Http/Controllers/StockListController.php:214
 * @route '/vehicle/{id}'
 */
        showForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StockListController::show
 * @see app/Http/Controllers/StockListController.php:214
 * @route '/vehicle/{id}'
 */
        showForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const StockListController = { index, discounted, aucnet, show }

export default StockListController