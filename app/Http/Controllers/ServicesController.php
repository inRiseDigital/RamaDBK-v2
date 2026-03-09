<?php

namespace App\Http\Controllers;

use App\Models\ServiceRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;

class ServicesController extends Controller
{
    /**
     * Show the services page.
     */
    public function index(): Response
    {
        return Inertia::render('Service/Services');
    }

    /**
     * Handle service request form submission (Car For Me).
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'make' => 'nullable|string|max:255',
            'model' => 'nullable|string|max:255',
            'transmission' => 'nullable|string|max:255',
            'regYearFrom' => 'nullable|string|max:10',
            'regYearTo' => 'nullable|string|max:10',
            'name' => 'required|string|max:255',
            'country' => 'required|string|max:255',
            'mobile' => 'required|string|max:20',
            'email' => 'required|email|max:255',
            'acceptTerms' => 'required|accepted',
        ]);

        // Map frontend field names to database field names
        ServiceRequest::create([
            'make' => $validated['make'],
            'model' => $validated['model'],
            'transmission' => $validated['transmission'],
            'reg_year_from' => $validated['regYearFrom'],
            'reg_year_to' => $validated['regYearTo'],
            'name' => $validated['name'],
            'country' => $validated['country'],
            'mobile' => $validated['mobile'],
            'email' => $validated['email'],
            'accept_terms' => $validated['acceptTerms'],
        ]);

        return redirect()->back()->with('success', 'Your service request has been submitted successfully!');
    }
}
