<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class category_posting extends Model
{


    protected $primaryKey = 'id';
    protected $fillable = [
        'id',
        'category',
    ];

}
