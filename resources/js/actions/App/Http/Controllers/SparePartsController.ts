import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SparePartsController::index
 * @see app/Http/Controllers/SparePartsController.php:29
 * @route '/spare-parts'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/spare-parts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SparePartsController::index
 * @see app/Http/Controllers/SparePartsController.php:29
 * @route '/spare-parts'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SparePartsController::index
 * @see app/Http/Controllers/SparePartsController.php:29
 * @route '/spare-parts'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SparePartsController::index
 * @see app/Http/Controllers/SparePartsController.php:29
 * @route '/spare-parts'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SparePartsController::index
 * @see app/Http/Controllers/SparePartsController.php:29
 * @route '/spare-parts'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SparePartsController::index
 * @see app/Http/Controllers/SparePartsController.php:29
 * @route '/spare-parts'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SparePartsController::index
 * @see app/Http/Controllers/SparePartsController.php:29
 * @route '/spare-parts'
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
* @see \App\Http\Controllers\SparePartsController::show
 * @see app/Http/Controllers/SparePartsController.php:134
 * @route '/sparepart/{id}'
 */
export const show = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/sparepart/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SparePartsController::show
 * @see app/Http/Controllers/SparePartsController.php:134
 * @route '/sparepart/{id}'
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
* @see \App\Http\Controllers\SparePartsController::show
 * @see app/Http/Controllers/SparePartsController.php:134
 * @route '/sparepart/{id}'
 */
show.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SparePartsController::show
 * @see app/Http/Controllers/SparePartsController.php:134
 * @route '/sparepart/{id}'
 */
show.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SparePartsController::show
 * @see app/Http/Controllers/SparePartsController.php:134
 * @route '/sparepart/{id}'
 */
    const showForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SparePartsController::show
 * @see app/Http/Controllers/SparePartsController.php:134
 * @route '/sparepart/{id}'
 */
        showForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SparePartsController::show
 * @see app/Http/Controllers/SparePartsController.php:134
 * @route '/sparepart/{id}'
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
/**
* @see \App\Http\Controllers\SparePartsController::category
 * @see app/Http/Controllers/SparePartsController.php:181
 * @route '/sparepart-category/{categoryId}'
 */
export const category = (args: { categoryId: string | number } | [categoryId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: category.url(args, options),
    method: 'get',
})

category.definition = {
    methods: ["get","head"],
    url: '/sparepart-category/{categoryId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SparePartsController::category
 * @see app/Http/Controllers/SparePartsController.php:181
 * @route '/sparepart-category/{categoryId}'
 */
category.url = (args: { categoryId: string | number } | [categoryId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { categoryId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    categoryId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        categoryId: args.categoryId,
                }

    return category.definition.url
            .replace('{categoryId}', parsedArgs.categoryId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SparePartsController::category
 * @see app/Http/Controllers/SparePartsController.php:181
 * @route '/sparepart-category/{categoryId}'
 */
category.get = (args: { categoryId: string | number } | [categoryId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: category.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SparePartsController::category
 * @see app/Http/Controllers/SparePartsController.php:181
 * @route '/sparepart-category/{categoryId}'
 */
category.head = (args: { categoryId: string | number } | [categoryId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: category.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SparePartsController::category
 * @see app/Http/Controllers/SparePartsController.php:181
 * @route '/sparepart-category/{categoryId}'
 */
    const categoryForm = (args: { categoryId: string | number } | [categoryId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: category.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SparePartsController::category
 * @see app/Http/Controllers/SparePartsController.php:181
 * @route '/sparepart-category/{categoryId}'
 */
        categoryForm.get = (args: { categoryId: string | number } | [categoryId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: category.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SparePartsController::category
 * @see app/Http/Controllers/SparePartsController.php:181
 * @route '/sparepart-category/{categoryId}'
 */
        categoryForm.head = (args: { categoryId: string | number } | [categoryId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: category.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    category.form = categoryForm
const SparePartsController = { index, show, category }

export default SparePartsController