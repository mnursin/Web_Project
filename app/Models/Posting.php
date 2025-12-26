<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Posting extends Model
{
    use SoftDeletes;

    protected $primaryKey = 'id_posting';

    protected $fillable = [
        'id_user',
        'category',
        'description',
        'content',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user');
    }
}
