import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../wayfinder'
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: login.url(options),
        method: 'get',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
        loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url(options),
            method: 'get',
        })
            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
        loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    login.form = loginForm
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
    const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: logout.url(options),
        method: 'post',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
        logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: logout.url(options),
            method: 'post',
        })
    
    logout.form = logoutForm
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
    const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: register.url(options),
        method: 'get',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
        registerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url(options),
            method: 'get',
        })
            /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
        registerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    register.form = registerForm
/**
 * @see routes/web.php:14
 * @route '/'
 */
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:14
 * @route '/'
 */
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:14
 * @route '/'
 */
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:14
 * @route '/'
 */
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:14
 * @route '/'
 */
    const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: home.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:14
 * @route '/'
 */
        homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:14
 * @route '/'
 */
        homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    home.form = homeForm
/**
* @see \App\Http\Controllers\PaymentController::payment
 * @see app/Http/Controllers/PaymentController.php:14
 * @route '/payments'
 */
export const payment = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: payment.url(options),
    method: 'get',
})

payment.definition = {
    methods: ["get","head"],
    url: '/payments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PaymentController::payment
 * @see app/Http/Controllers/PaymentController.php:14
 * @route '/payments'
 */
payment.url = (options?: RouteQueryOptions) => {
    return payment.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PaymentController::payment
 * @see app/Http/Controllers/PaymentController.php:14
 * @route '/payments'
 */
payment.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: payment.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PaymentController::payment
 * @see app/Http/Controllers/PaymentController.php:14
 * @route '/payments'
 */
payment.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: payment.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PaymentController::payment
 * @see app/Http/Controllers/PaymentController.php:14
 * @route '/payments'
 */
    const paymentForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: payment.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PaymentController::payment
 * @see app/Http/Controllers/PaymentController.php:14
 * @route '/payments'
 */
        paymentForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: payment.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PaymentController::payment
 * @see app/Http/Controllers/PaymentController.php:14
 * @route '/payments'
 */
        paymentForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: payment.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    payment.form = paymentForm
/**
* @see \App\Http\Controllers\PaymentController::overseasRemittance
 * @see app/Http/Controllers/PaymentController.php:22
 * @route '/overseas-remittance'
 */
export const overseasRemittance = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: overseasRemittance.url(options),
    method: 'get',
})

overseasRemittance.definition = {
    methods: ["get","head"],
    url: '/overseas-remittance',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PaymentController::overseasRemittance
 * @see app/Http/Controllers/PaymentController.php:22
 * @route '/overseas-remittance'
 */
overseasRemittance.url = (options?: RouteQueryOptions) => {
    return overseasRemittance.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PaymentController::overseasRemittance
 * @see app/Http/Controllers/PaymentController.php:22
 * @route '/overseas-remittance'
 */
overseasRemittance.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: overseasRemittance.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PaymentController::overseasRemittance
 * @see app/Http/Controllers/PaymentController.php:22
 * @route '/overseas-remittance'
 */
overseasRemittance.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: overseasRemittance.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PaymentController::overseasRemittance
 * @see app/Http/Controllers/PaymentController.php:22
 * @route '/overseas-remittance'
 */
    const overseasRemittanceForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: overseasRemittance.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PaymentController::overseasRemittance
 * @see app/Http/Controllers/PaymentController.php:22
 * @route '/overseas-remittance'
 */
        overseasRemittanceForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: overseasRemittance.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PaymentController::overseasRemittance
 * @see app/Http/Controllers/PaymentController.php:22
 * @route '/overseas-remittance'
 */
        overseasRemittanceForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: overseasRemittance.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    overseasRemittance.form = overseasRemittanceForm
/**
* @see \App\Http\Controllers\PaymentController::localRemittance
 * @see app/Http/Controllers/PaymentController.php:30
 * @route '/local-remittance'
 */
export const localRemittance = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: localRemittance.url(options),
    method: 'get',
})

localRemittance.definition = {
    methods: ["get","head"],
    url: '/local-remittance',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PaymentController::localRemittance
 * @see app/Http/Controllers/PaymentController.php:30
 * @route '/local-remittance'
 */
localRemittance.url = (options?: RouteQueryOptions) => {
    return localRemittance.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PaymentController::localRemittance
 * @see app/Http/Controllers/PaymentController.php:30
 * @route '/local-remittance'
 */
localRemittance.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: localRemittance.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PaymentController::localRemittance
 * @see app/Http/Controllers/PaymentController.php:30
 * @route '/local-remittance'
 */
localRemittance.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: localRemittance.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PaymentController::localRemittance
 * @see app/Http/Controllers/PaymentController.php:30
 * @route '/local-remittance'
 */
    const localRemittanceForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: localRemittance.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PaymentController::localRemittance
 * @see app/Http/Controllers/PaymentController.php:30
 * @route '/local-remittance'
 */
        localRemittanceForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: localRemittance.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PaymentController::localRemittance
 * @see app/Http/Controllers/PaymentController.php:30
 * @route '/local-remittance'
 */
        localRemittanceForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: localRemittance.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    localRemittance.form = localRemittanceForm
/**
* @see \App\Http\Controllers\SparePartsController::spareParts
 * @see app/Http/Controllers/SparePartsController.php:29
 * @route '/spare-parts'
 */
export const spareParts = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: spareParts.url(options),
    method: 'get',
})

spareParts.definition = {
    methods: ["get","head"],
    url: '/spare-parts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SparePartsController::spareParts
 * @see app/Http/Controllers/SparePartsController.php:29
 * @route '/spare-parts'
 */
spareParts.url = (options?: RouteQueryOptions) => {
    return spareParts.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SparePartsController::spareParts
 * @see app/Http/Controllers/SparePartsController.php:29
 * @route '/spare-parts'
 */
spareParts.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: spareParts.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SparePartsController::spareParts
 * @see app/Http/Controllers/SparePartsController.php:29
 * @route '/spare-parts'
 */
spareParts.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: spareParts.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SparePartsController::spareParts
 * @see app/Http/Controllers/SparePartsController.php:29
 * @route '/spare-parts'
 */
    const sparePartsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: spareParts.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SparePartsController::spareParts
 * @see app/Http/Controllers/SparePartsController.php:29
 * @route '/spare-parts'
 */
        sparePartsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: spareParts.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SparePartsController::spareParts
 * @see app/Http/Controllers/SparePartsController.php:29
 * @route '/spare-parts'
 */
        sparePartsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: spareParts.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    spareParts.form = sparePartsForm
/**
* @see \App\Http\Controllers\SparePartsController::sparePartsCategory
 * @see app/Http/Controllers/SparePartsController.php:181
 * @route '/sparepart-category/{categoryId}'
 */
export const sparePartsCategory = (args: { categoryId: string | number } | [categoryId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sparePartsCategory.url(args, options),
    method: 'get',
})

sparePartsCategory.definition = {
    methods: ["get","head"],
    url: '/sparepart-category/{categoryId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SparePartsController::sparePartsCategory
 * @see app/Http/Controllers/SparePartsController.php:181
 * @route '/sparepart-category/{categoryId}'
 */
sparePartsCategory.url = (args: { categoryId: string | number } | [categoryId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return sparePartsCategory.definition.url
            .replace('{categoryId}', parsedArgs.categoryId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SparePartsController::sparePartsCategory
 * @see app/Http/Controllers/SparePartsController.php:181
 * @route '/sparepart-category/{categoryId}'
 */
sparePartsCategory.get = (args: { categoryId: string | number } | [categoryId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sparePartsCategory.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SparePartsController::sparePartsCategory
 * @see app/Http/Controllers/SparePartsController.php:181
 * @route '/sparepart-category/{categoryId}'
 */
sparePartsCategory.head = (args: { categoryId: string | number } | [categoryId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sparePartsCategory.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SparePartsController::sparePartsCategory
 * @see app/Http/Controllers/SparePartsController.php:181
 * @route '/sparepart-category/{categoryId}'
 */
    const sparePartsCategoryForm = (args: { categoryId: string | number } | [categoryId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: sparePartsCategory.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SparePartsController::sparePartsCategory
 * @see app/Http/Controllers/SparePartsController.php:181
 * @route '/sparepart-category/{categoryId}'
 */
        sparePartsCategoryForm.get = (args: { categoryId: string | number } | [categoryId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: sparePartsCategory.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SparePartsController::sparePartsCategory
 * @see app/Http/Controllers/SparePartsController.php:181
 * @route '/sparepart-category/{categoryId}'
 */
        sparePartsCategoryForm.head = (args: { categoryId: string | number } | [categoryId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: sparePartsCategory.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    sparePartsCategory.form = sparePartsCategoryForm
/**
* @see \App\Http\Controllers\StockListController::stockList
 * @see app/Http/Controllers/StockListController.php:17
 * @route '/stock-list'
 */
export const stockList = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stockList.url(options),
    method: 'get',
})

stockList.definition = {
    methods: ["get","head"],
    url: '/stock-list',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StockListController::stockList
 * @see app/Http/Controllers/StockListController.php:17
 * @route '/stock-list'
 */
stockList.url = (options?: RouteQueryOptions) => {
    return stockList.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StockListController::stockList
 * @see app/Http/Controllers/StockListController.php:17
 * @route '/stock-list'
 */
stockList.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stockList.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StockListController::stockList
 * @see app/Http/Controllers/StockListController.php:17
 * @route '/stock-list'
 */
stockList.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stockList.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StockListController::stockList
 * @see app/Http/Controllers/StockListController.php:17
 * @route '/stock-list'
 */
    const stockListForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: stockList.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StockListController::stockList
 * @see app/Http/Controllers/StockListController.php:17
 * @route '/stock-list'
 */
        stockListForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: stockList.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StockListController::stockList
 * @see app/Http/Controllers/StockListController.php:17
 * @route '/stock-list'
 */
        stockListForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: stockList.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    stockList.form = stockListForm
/**
* @see \App\Http\Controllers\ServicesController::services
 * @see app/Http/Controllers/ServicesController.php:16
 * @route '/services'
 */
export const services = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: services.url(options),
    method: 'get',
})

services.definition = {
    methods: ["get","head"],
    url: '/services',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ServicesController::services
 * @see app/Http/Controllers/ServicesController.php:16
 * @route '/services'
 */
services.url = (options?: RouteQueryOptions) => {
    return services.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServicesController::services
 * @see app/Http/Controllers/ServicesController.php:16
 * @route '/services'
 */
services.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: services.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ServicesController::services
 * @see app/Http/Controllers/ServicesController.php:16
 * @route '/services'
 */
services.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: services.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ServicesController::services
 * @see app/Http/Controllers/ServicesController.php:16
 * @route '/services'
 */
    const servicesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: services.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ServicesController::services
 * @see app/Http/Controllers/ServicesController.php:16
 * @route '/services'
 */
        servicesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: services.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ServicesController::services
 * @see app/Http/Controllers/ServicesController.php:16
 * @route '/services'
 */
        servicesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: services.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    services.form = servicesForm
/**
* @see \App\Http\Controllers\ContactController::contact
 * @see app/Http/Controllers/ContactController.php:16
 * @route '/contact'
 */
export const contact = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contact.url(options),
    method: 'get',
})

contact.definition = {
    methods: ["get","head"],
    url: '/contact',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContactController::contact
 * @see app/Http/Controllers/ContactController.php:16
 * @route '/contact'
 */
contact.url = (options?: RouteQueryOptions) => {
    return contact.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContactController::contact
 * @see app/Http/Controllers/ContactController.php:16
 * @route '/contact'
 */
contact.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contact.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ContactController::contact
 * @see app/Http/Controllers/ContactController.php:16
 * @route '/contact'
 */
contact.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: contact.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ContactController::contact
 * @see app/Http/Controllers/ContactController.php:16
 * @route '/contact'
 */
    const contactForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: contact.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ContactController::contact
 * @see app/Http/Controllers/ContactController.php:16
 * @route '/contact'
 */
        contactForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: contact.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ContactController::contact
 * @see app/Http/Controllers/ContactController.php:16
 * @route '/contact'
 */
        contactForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: contact.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    contact.form = contactForm
/**
 * @see routes/web.php:133
 * @route '/chat'
 */
export const chat = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: chat.url(options),
    method: 'get',
})

chat.definition = {
    methods: ["get","head"],
    url: '/chat',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:133
 * @route '/chat'
 */
chat.url = (options?: RouteQueryOptions) => {
    return chat.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:133
 * @route '/chat'
 */
chat.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: chat.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:133
 * @route '/chat'
 */
chat.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: chat.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:133
 * @route '/chat'
 */
    const chatForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: chat.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:133
 * @route '/chat'
 */
        chatForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: chat.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:133
 * @route '/chat'
 */
        chatForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: chat.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    chat.form = chatForm