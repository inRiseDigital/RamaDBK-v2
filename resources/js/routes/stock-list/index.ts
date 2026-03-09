import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
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
const stockList = {
    discounted: Object.assign(discounted, discounted),
aucnet: Object.assign(aucnet, aucnet),
}

export default stockList