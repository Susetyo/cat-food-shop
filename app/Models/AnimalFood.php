<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AnimalFood extends Model
{
    use HasFactory;

    public function detailPembelian()
    {
        return $this->belongsToMany(DetailPembelian::class, 'detail_pembelian');
    }
}
