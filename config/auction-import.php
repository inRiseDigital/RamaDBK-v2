<?php

return [

    'ftp' => [
        'host' => env('AUCTION_FTP_HOST', 'auctionsdata.aleado.com'),
        'username' => env('AUCTION_FTP_USERNAME', ''),
        'password' => env('AUCTION_FTP_PASSWORD', ''),
        'path' => env('AUCTION_FTP_PATH', '/jp/oneprice'),
        'filename' => env('AUCTION_FTP_FILENAME', 'auct_lots_xml_jp_op.sql.bz2'),
    ],

    'image_source_base_url' => env('AUCTION_IMAGE_BASE_URL', 'https://www.ramadbk.com/VIMGS'),

    // 'local' for dev, 's3' for production
    'image_storage_disk' => env('AUCTION_IMAGE_DISK', 'local_images'),

    // Local folder path (relative to storage/app)
    'local_image_path' => 'public/auction-images',

    // S3 path prefix
    's3_image_path' => 'VIMGS',

    // Download directory for FTP files
    'download_path' => storage_path('app/auction-downloads'),

];
