INSERT INTO game (game_id) VALUES (990080);

INSERT INTO gameInfo (prepur_offer, dd_edition, about, game_id) VALUES (
    '$59.99', 
    '$69.99',
    'Hogwarts Legacy is an immersive, open-world action RPG. Now you can take control of the action and be at the center of your own adventure in the wizarding world.', 
    1);

INSERT INTO carousel (developer, publisher, release_date, tags, title, game_id) VALUES (
    'Avalanche Software9', 
    'Warner Bros. Games', 
    'Feb 10, 2023', 
    '{"Adventure", "Magic", "Open World", "Fantasy", "RPG"}', 
    'Hogwarts Legacy',
    1);

INSERT INTO min (required, os, processor, memory, graphics, directX, storage, additional_notes, game_id) VALUES (
    'Requires a 64-bit processor and operating system',
    'Windows 10',
    'Intel Core i5-8400 OR AMD Ryzen 5 2600',
    '8 GB RAM',
    'NVIDIA GeForce GTX 1070 or AMD RX Vega 56',
    'Version 12',
    '85 GB available space',
    'SDD(Preferred), HDD (Supported), 1080p/60 fps, Low Quality Settings, Upscale Performance Setting',
    1);

INSERT INTO req (required, os, processor, memory, graphics, directX, storage, additional_notes, game_id) VALUES (
    'Requires a 64-bit processor and operating system',
    'Windows 10',
    'Intel Core i7-8700 OR AMD Ryzen 5 3600',
    '16 GB RAM',
    'NVIDIA GeForce 1080 Ti or AMD RX 5700 XT',
    'Version 12',
    '85 GB available space',
    'SSD, 1080p/60 fps, High Quality Settings, Upscale Quality Setting',
    1);