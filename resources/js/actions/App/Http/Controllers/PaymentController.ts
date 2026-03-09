import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PaymentController::index
 * @see app/Http/Controllers/PaymentController.php:14
 * @route '/payments'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/payments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PaymentController::index
 * @see app/Http/Controllers/PaymentController.php:14
 * @route '/payments'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PaymentController::index
 * @see app/Http/Controllers/PaymentController.php:14
 * @route '/payments'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PaymentController::index
 * @see app/Http/Controllers/PaymentController.php:14
 * @route '/payments'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PaymentController::index
 * @see app/Http/Controllers/PaymentController.php:14
 * @route '/payments'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PaymentController::index
 * @see app/Http/Controllers/PaymentController.php:14
 * @route '/payments'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PaymentController::index
 * @see app/Http/Controllers/PaymentController.php:14
 * @route '/payments'
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
* @see \App\Http\Controllers\PaymentController::overseas
 * @see app/Http/Controllers/PaymentController.php:22
 * @route '/overseas-remittance'
 */
export const overseas = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: overseas.url(options),
    method: 'get',
})

overseas.definition = {
    methods: ["get","head"],
    url: '/overseas-remittance',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PaymentController::overseas
 * @see app/Http/Controllers/PaymentController.php:22
 * @route '/overseas-remittance'
 */
overseas.url = (options?: RouteQueryOptions) => {
    return overseas.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PaymentController::overseas
 * @see app/Http/Controllers/PaymentController.php:22
 * @route '/overseas-remittance'
 */
overseas.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: overseas.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PaymentController::overseas
 * @see app/Http/Controllers/PaymentController.php:22
 * @route '/overseas-remittance'
 */
overseas.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: overseas.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PaymentController::overseas
 * @see app/Http/Controllers/PaymentController.php:22
 * @route '/overseas-remittance'
 */
    const overseasForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: overseas.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PaymentController::overseas
 * @see app/Http/Controllers/PaymentController.php:22
 * @route '/overseas-remittance'
 */
        overseasForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: overseas.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PaymentController::overseas
 * @see app/Http/Controllers/PaymentController.php:22
 * @route '/overseas-remittance'
 */
        overseasForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: overseas.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    overseas.form = overseasForm
/**
* @see \App\Http\Controllers\PaymentController::local
 * @see app/Http/Controllers/PaymentController.php:30
 * @route '/local-remittance'
 */
export const local = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: local.url(options),
    method: 'get',
})

local.definition = {
    methods: ["get","head"],
    url: '/local-remittance',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PaymentController::local
 * @see app/Http/Controllers/PaymentController.php:30
 * @route '/local-remittance'
 */
local.url = (options?: RouteQueryOptions) => {
    return local.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PaymentController::local
 * @see app/Http/Controllers/PaymentController.php:30
 * @route '/local-remittance'
 */
local.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: local.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PaymentController::local
 * @see app/Http/Controllers/PaymentController.php:30
 * @route '/local-remittance'
 */
local.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: local.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PaymentController::local
 * @see app/Http/Controllers/PaymentController.php:30
 * @route '/local-remittance'
 */
    const localForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: local.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PaymentController::local
 * @see app/Http/Controllers/PaymentController.php:30
 * @route '/local-remittance'
 */
        localForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: local.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PaymentController::local
 * @see app/Http/Controllers/PaymentController.php:30
 * @route '/local-remittance'
 */
        localForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: local.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    local.form = localForm
const PaymentController = { index, overseas, local }

export default PaymentController