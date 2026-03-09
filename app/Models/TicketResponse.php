<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TicketResponse extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'ticket_response';

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
        'response_id',
        'msg_id',
        'ticket_id',
        'operator_id',
        'response_msg',
        'ip_address',
        'res_created_date',
        'flag'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'response_id' => 'integer',
        'msg_id' => 'integer',
        'ticket_id' => 'integer',
        'operator_id' => 'integer',
        'res_created_date' => 'datetime',
        'flag' => 'integer'
    ];

    /**
     * Get the response that owns this TicketResponse.
     */
    public function response()
    {
        return $this->belongsTo(Response::class, 'response_id');
    }

    /**
     * Get the msg that owns this TicketResponse.
     */
    public function msg()
    {
        return $this->belongsTo(Msg::class, 'msg_id');
    }

    /**
     * Get the ticket that owns this TicketResponse.
     */
    public function ticket()
    {
        return $this->belongsTo(Ticket::class, 'ticket_id');
    }

    /**
     * Get the operator that owns this TicketResponse.
     */
    public function operator()
    {
        return $this->belongsTo(Operator::class, 'operator_id');
    }
}
