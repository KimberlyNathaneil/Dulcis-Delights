<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class pivot_expense_product extends Model
{
    use HasFactory;
    protected $fillable = ['unit_price', 'quantity'];
}
