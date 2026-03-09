<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'ticket';

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'ticket_id',
        'ticketID',
        'member_id',
        'operator_id',
        'topic_id',
        'subject',
        'ip_address',
        'status',
        'is_answered',
        'last_msg_time',
        'last_response_time',
        'created_date',
        'priority_id',
        'is_internal'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'ticket_id' => 'integer',
        'ticketID' => 'integer',
        'member_id' => 'integer',
        'operator_id' => 'integer',
        'topic_id' => 'integer',
        'status' => 'boolean',
        'is_answered' => 'boolean',
        'last_msg_time' => 'datetime',
        'last_response_time' => 'datetime',
        'created_date' => 'datetime',
        'priority_id' => 'integer',
        'is_internal' => 'integer'
    ];

    /**
     * Get the ticket that owns this Ticket.
     */
    public function ticket()
    {
        return $this->belongsTo(Ticket::class, 'ticket_id');
    }

    /**
     * Get the member that owns this Ticket.
     */
    public function member()
    {
        return $this->belongsTo(Member::class, 'member_id');
    }

    /**
     * Get the operator that owns this Ticket.
     */
    public function operator()
    {
        return $this->belongsTo(Operator::class, 'operator_id');
    }

    /**
     * Get the topic that owns this Ticket.
     */
    public function topic()
    {
        return $this->belongsTo(Topic::class, 'topic_id');
    }

    /**
     * Get the priority that owns this Ticket.
     */
    public function priority()
    {
        return $this->belongsTo(Priority::class, 'priority_id');
    }
}
