<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;

class ContactController extends Controller
{
    /**
     * Show the contact page.
     */
    public function index(): Response
    {
        return Inertia::render('Service/Contact');
    }

    /**
     * Handle contact form submission.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
            'country' => 'required|string|max:255',
        ]);

        // Save contact to database
        Contact::create($validated);

        return redirect()->back()->with('success', 'Your message has been sent successfully!');
    }
}
