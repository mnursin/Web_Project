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
        'description',
        'content',
    ];
        // ✅ Relasi ke user
    public function user()
    {
        return $this->belongsTo(User::class, 'id_user');
    }

    public function categories()
    {
        return $this->belongsToMany(
            CategoryPosting::class,
            'category_posting_pivot',
            'posting_id',     // FK pivot ke posting
            'category_id',    // FK pivot ke category
            'id_posting',     // PK posting
            'id'              // PK category
        );
    }
   
}
