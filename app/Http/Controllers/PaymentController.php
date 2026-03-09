<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PaymentController extends Controller
{
    /**
     * Show the payment page.
     */
    public function index(): Response
    {
        return Inertia::render("payment/Payment");
    }

    /**
     * Show the overseas remittance page.
     */
    public function overseas(): Response
    {
        return Inertia::render('payment/OverseasRemittance');
    }

    /**
     * Show the local remittance page.
     */
    public function local(): Response
    {
        return Inertia::render('payment/LocalRemittancePage');
    }
}
