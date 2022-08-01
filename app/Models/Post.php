<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'post', 'user_id'
    ];

    public function postedBy()
    {
        return $this->belongsTo('App\User', 'user_id', 'id');
    }
}
