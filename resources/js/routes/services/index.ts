import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ServicesController::store
 * @see app/Http/Controllers/ServicesController.php:24
 * @route '/services'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/services',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ServicesController::store
 * @see app/Http/Controllers/ServicesController.php:24
 * @route '/services'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServicesController::store
 * @see app/Http/Controllers/ServicesController.php:24
 * @route '/services'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ServicesController::store
 * @see app/Http/Controllers/ServicesController.php:24
 * @route '/services'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ServicesController::store
 * @see app/Http/Controllers/ServicesController.php:24
 * @route '/services'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
const services = {
    store: Object.assign(store, store),
}

export default services