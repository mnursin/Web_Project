<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CategoryPosting extends Model
{


    protected $table = 'category_posting';

    protected $fillable = ['category'];

    // ✅ Relasi ke posting
    public function postings()
    {
        return $this->belongsToMany(
            Posting::class,
            'category_posting_pivot',
            'category_id',
            'posting_id',
            'id',
            'id_posting'            

        );
    }
    

}
