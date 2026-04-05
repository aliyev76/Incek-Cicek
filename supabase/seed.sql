-- Seed Categories
INSERT INTO categories (name, slug) VALUES
('Güller', 'guller'),
('Saksı Çiçekleri', 'saksi-cicekleri'),
('Papatya / Gerbera', 'papatya-gerbera'),
('Buketler', 'buketler'),
('Orkide', 'orkide'),
('Çelenkler', 'celenkler'),
('Yeni Bebek', 'yeni-bebek'),
('Anneye Hediye', 'anneye-hediye'),
('Özür Dileme', 'ozur-dileme'),
('Geçmiş Olsun', 'gecmis-olsun'),
('Sevgiliye', 'sevgiliye'),
('Yeni İş / Terfi', 'yeni-is-terfi'),
('Tebrik', 'tebrik'),
('Evlilik Yıldönümü', 'evlilik-yildonumu'),
('Doğum Günü', 'dogum-gunu'),
('Erkeğe Hediye', 'erkege-hediye')
ON CONFLICT (slug) DO NOTHING;

-- Seed Products
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Cam Fanusta Papatyalar', 'Cam Fanusta Papatyalar - Taze ve şık aranjman.', 1300, 1560, 50, '/products/thumb_cam-fanusta-papatyalar-165-4358.webp', false, id FROM categories WHERE slug = 'papatya-gerbera' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '3 Tane Gül Buketi', '3 Tane Gül Buketi - Taze ve şık aranjman.', 1500, 1800, 50, '/products/thumb_3-tane-gul-buketi-24-7690.webp', false, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '5 Kırmızı Gül Buketi', '5 Kırmızı Gül Buketi - Taze ve şık aranjman.', 1750, 2100, 50, '/products/thumb_5-kirmizi-gul-buketi-54-1257.webp', false, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '6 Tane Gül Buketi', '6 Tane Gül Buketi - Taze ve şık aranjman.', 1800, 2160, 50, '/products/thumb_6-tane-gul-buketi-15-7092.webp', false, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '6 Pembe Gül Buketi', '6 Pembe Gül Buketi - Taze ve şık aranjman.', 2000, 2400, 50, '/products/thumb_6-pembe-gul-buketi-25-6558.webp', false, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Büyük Boy Pembe Karanfil Buketi', 'Büyük Boy Pembe Karanfil Buketi - Taze ve şık aranjman.', 2000, 2400, 50, '/products/thumb_buyuk-boy-pembe-karanfil-buketi-40-4519.webp', false, id FROM categories WHERE slug = 'buketler' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '7 Adet Gül Buketi Pembe ve Kırmızı', '7 Adet Gül Buketi Pembe ve Kırmızı - Taze ve şık aranjman.', 2200, 2640, 50, '/products/thumb_7-adet-gul-buketi-pembe-ve-kirmizi-53-4911.webp', false, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Kutuda Sarı Gerbera', 'Kutuda Sarı Gerbera - Taze ve şık aranjman.', 2249, 2348, 50, '/products/thumb_cam-fanusta-papatyalar-165-4358.webp', false, id FROM categories WHERE slug = 'papatya-gerbera' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '17 Pembe Karanfil Buketi', '17 Pembe Karanfil Buketi - Taze ve şık aranjman.', 2250, 2700, 50, '/products/thumb_17-pembe-karanfil-buketi-126-2067.webp', false, id FROM categories WHERE slug = 'buketler' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '17 Adet Beyaz Karanfil Buketi', '17 Adet Beyaz Karanfil Buketi - Taze ve şık aranjman.', 2250, 2700, 50, '/products/thumb_17-adet-beyaz-karanfil-buketi-128-6726.webp', false, id FROM categories WHERE slug = 'buketler' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '7 Gül Buketi', '7 Gül Buketi - Taze ve şık aranjman.', 2350, 2820, 50, '/products/thumb_7-gul-buketi-136-9049.webp', false, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '7 Adet Beyaz Gül Buketi', '7 Adet Beyaz Gül Buketi - Taze ve şık aranjman.', 2350, 2820, 50, '/products/thumb_7-adet-beyaz-gul-buketi-137-4419.webp', false, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Pembe Büyük Gerbera Buketi', 'Pembe Büyük Gerbera Buketi - Taze ve şık aranjman.', 2449, 2548, 50, '/products/thumb_cam-fanusta-papatyalar-165-4358.webp', false, id FROM categories WHERE slug = 'papatya-gerbera' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Mor Gerbera Buketi', 'Mor Gerbera Buketi - Taze ve şık aranjman.', 2500, 3000, 50, '/products/thumb_mor-gerbera-buketi-22-9866.webp', false, id FROM categories WHERE slug = 'papatya-gerbera' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Kırmızı Gerbera Buketi', 'Kırmızı Gerbera Buketi - Taze ve şık aranjman.', 2500, 3000, 50, '/products/thumb_kirmizi-gerbera-buketi-34-7480.webp', false, id FROM categories WHERE slug = 'papatya-gerbera' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Mor Karanfil Buketi', 'Mor Karanfil Buketi - Taze ve şık aranjman.', 2500, 3000, 50, '/products/thumb_mor-karanfil-buketi-35-1340.webp', false, id FROM categories WHERE slug = 'buketler' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Pembe Gerbera Buketi', 'Pembe Gerbera Buketi - Taze ve şık aranjman.', 2500, 3000, 50, '/products/thumb_cam-fanusta-papatyalar-165-4358.webp', false, id FROM categories WHERE slug = 'papatya-gerbera' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Karanfil ve Gerbera Buketi', 'Karanfil ve Gerbera Buketi - Taze ve şık aranjman.', 2500, 3000, 50, '/products/thumb_karanfil-ve-gerbera-buketi-38-9165.webp', false, id FROM categories WHERE slug = 'papatya-gerbera' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Vazoda Renkli Gerbera', 'Vazoda Renkli Gerbera - Taze ve şık aranjman.', 2500, 3000, 50, '/products/thumb_vazoda-renkli-gerbera-48-978.webp', false, id FROM categories WHERE slug = 'papatya-gerbera' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Vazoda Beyaz ve Pembe Gerbera', 'Vazoda Beyaz ve Pembe Gerbera - Taze ve şık aranjman.', 2500, 3000, 50, '/products/thumb_cam-fanusta-papatyalar-165-4358.webp', false, id FROM categories WHERE slug = 'papatya-gerbera' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Sarı Gerbera Buketi', 'Sarı Gerbera Buketi - Taze ve şık aranjman.', 2500, 3000, 50, '/products/thumb_sari-gerbera-buketi-55-8069.webp', false, id FROM categories WHERE slug = 'papatya-gerbera' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Ayçiçekleri Buketleri', 'Ayçiçekleri Buketleri - Taze ve şık aranjman.', 2500, 3000, 50, '/products/thumb_buyuk-boy-pembe-karanfil-buketi-40-4519.webp', false, id FROM categories WHERE slug = 'buketler' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Gerçek Kütükte Renkli Papatyalar', 'Gerçek Kütükte Renkli Papatyalar - Taze ve şık aranjman.', 2500, 3000, 50, '/products/thumb_gercek-kutukte-renkli-papatyalar-148-5842.webp', false, id FROM categories WHERE slug = 'papatya-gerbera' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Kırmızı Antorium', 'Kırmızı Antorium - Taze ve şık aranjman.', 2500, 3000, 50, '/products/thumb_kirmizi-antorium-163-9986.webp', false, id FROM categories WHERE slug = 'saksi-cicekleri' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '9 Beyaz Gül Buketi', '9 Beyaz Gül Buketi - Taze ve şık aranjman.', 2700, 3240, 50, '/products/thumb_9-beyaz-gul-buketi-135-8875.webp', false, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Karanfil ve Papatya Buketi', 'Karanfil ve Papatya Buketi - Taze ve şık aranjman.', 2750, 3300, 50, '/products/thumb_karanfil-ve-papatya-buketi-4-4885.webp', false, id FROM categories WHERE slug = 'papatya-gerbera' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Vazoda Büyük Boy 10 Tane Gül', 'Vazoda Büyük Boy 10 Tane Gül - Taze ve şık aranjman.', 2750, 3300, 50, '/products/thumb_vazoda-buyuk-boy-10-tane-gul-9-4582.webp', false, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '10 Tane Kırmızı Beyaz Gül Buketi', '10 Tane Kırmızı Beyaz Gül Buketi - Taze ve şık aranjman.', 2750, 3300, 50, '/products/thumb_7-gul-buketi-136-9049.webp', false, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Mavi Çift Dallı Orkide', 'Mavi Çift Dallı Orkide - Taze ve şık aranjman.', 2750, 3300, 50, '/products/thumb_mavi-cift-dalli-orkide-149-1530.webp', false, id FROM categories WHERE slug = 'orkide' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Seramik Vazoda Çift Dallı Beyaz Orkideler', 'Seramik Vazoda Çift Dallı Beyaz Orkideler - Taze ve şık aranjman.', 2750, 3300, 50, '/products/thumb_seramik-vazoda-cift-dalli-beyaz-orkideler-160-735.webp', false, id FROM categories WHERE slug = 'orkide' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Cam Vazoda Süslü Orkideler', 'Cam Vazoda Süslü Orkideler - Taze ve şık aranjman.', 2750, 3300, 50, '/products/thumb_cam-vazoda-suslu-orkideler-161-6778.webp', false, id FROM categories WHERE slug = 'orkide' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Çift Dallı Mor Orkide', 'Çift Dallı Mor Orkide - Taze ve şık aranjman.', 2750, 3300, 50, '/products/thumb_cift-dalli-mor-orkide-166-3125.webp', false, id FROM categories WHERE slug = 'orkide' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '10 Adet Premium Beyaz Gül Buketi', '10 Adet Premium Beyaz Gül Buketi - Taze ve şık aranjman.', 2850, 3420, 50, '/products/thumb_10-adet-premium-beyaz-gul-buketi-88-6477.webp', false, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '10 Tane Beyaz Gül Buketi', '10 Tane Beyaz Gül Buketi - Taze ve şık aranjman.', 2899, 3478.8, 50, '/products/thumb_10-tane-beyaz-gul-buketi-14-3450.webp', false, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '10 Tane Güllü Buket', '10 Tane Güllü Buket - Taze ve şık aranjman.', 2900, 3480, 50, '/products/thumb_10-tane-gullu-buket-23-6742.webp', false, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '12 Tane Kırmızı Gül Buketi', '12 Tane Kırmızı Gül Buketi - Taze ve şık aranjman.', 3000, 3600, 50, '/products/thumb_12-tane-kirmizi-gul-buketi-13-3621.webp', false, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '12 Adet Kırmızı Beyaz Gül Buketi', '12 Adet Kırmızı Beyaz Gül Buketi - Taze ve şık aranjman.', 3000, 3600, 50, '/products/thumb_12-adet-kirmizi-beyaz-gul-buketi-57-7359.webp', false, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Vazoda 12 Beyaz Gül Buketi', 'Vazoda 12 Beyaz Gül Buketi - Taze ve şık aranjman.', 3000, 3600, 50, '/products/thumb_vazoda-12-beyaz-gul-buketi-63-5021.webp', false, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Vazoda 12 Tane Beyaz Gül', 'Vazoda 12 Tane Beyaz Gül - Taze ve şık aranjman.', 3000, 3600, 50, '/products/thumb_vazoda-12-tane-beyaz-gul-75-6246.webp', false, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Mor Kasımpatı Buketi', 'Mor Kasımpatı Buketi - Taze ve şık aranjman.', 3000, 3600, 50, '/products/thumb_mor-kasimpati-buketi-99-3387.webp', false, id FROM categories WHERE slug = 'buketler' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '9 Beyaz Gül Premium Buket', '9 Beyaz Gül Premium Buket - Taze ve şık aranjman.', 3000, 3600, 50, '/products/thumb_9-beyaz-gul-premium-buket-134-2684.webp', false, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Kutuda 15 Pembe Gül ve Papatyalar', 'Kutuda 15 Pembe Gül ve Papatyalar - Taze ve şık aranjman.', 3250, 3900, 50, '/products/thumb_kutuda-15-pembe-gul-ve-papatyalar-102-7123.webp', false, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Çift Dal Orkideli Bahar Aranjmanı', 'Çift Dal Orkideli Bahar Aranjmanı - Taze ve şık aranjman.', 3250, 3900, 50, '/products/thumb_cift-dal-orkideli-bahar-aranjmani-158-1681.webp', false, id FROM categories WHERE slug = 'orkide' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Vazoda 12 Tane Pembe Güller', 'Vazoda 12 Tane Pembe Güller - Taze ve şık aranjman.', 3300, 3960, 50, '/products/thumb_vazoda-12-tane-pembe-guller-39-769.webp', false, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '12 Adet Gül Buketi', '12 Adet Gül Buketi - Taze ve şık aranjman.', 3300, 3960, 50, '/products/thumb_12-adet-gul-buketi-59-2978.webp', false, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '11 Beyaz Gül Buketi', '11 Beyaz Gül Buketi - Taze ve şık aranjman.', 3300, 3960, 50, '/products/thumb_11-beyaz-gul-buketi-133-8892.webp', false, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Turuncu Gerbera Buketi', 'Turuncu Gerbera Buketi - Taze ve şık aranjman.', 3500, 4200, 50, '/products/thumb_cam-fanusta-papatyalar-165-4358.webp', false, id FROM categories WHERE slug = 'papatya-gerbera' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Mor ve Beyaz Papatya Buketi', 'Mor ve Beyaz Papatya Buketi - Taze ve şık aranjman.', 3500, 4200, 50, '/products/thumb_mor-ve-beyaz-papatya-buketi-98-8304.webp', false, id FROM categories WHERE slug = 'papatya-gerbera' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Soft Pembe Çiçekli Çelenk', 'Soft Pembe Çiçekli Çelenk - Taze ve şık aranjman.', 3500, 4200, 50, '/products/thumb_soft-pembe-cicekli-celenk-139-8257.webp', false, id FROM categories WHERE slug = 'celenkler' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Beyaz Soft Görünümlü Çelenk', 'Beyaz Soft Görünümlü Çelenk - Taze ve şık aranjman.', 3500, 4200, 50, '/products/thumb_beyaz-soft-gorunumlu-celenk-140-3262.webp', false, id FROM categories WHERE slug = 'celenkler' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Kırmızı Uygun Fiyatlı Çelenk', 'Kırmızı Uygun Fiyatlı Çelenk - Taze ve şık aranjman.', 3500, 4200, 50, '/products/thumb_kirmizi-uygun-fiyatli-celenk-141-6789.webp', false, id FROM categories WHERE slug = 'celenkler' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Sarı ve Kırmızı Çelenk', 'Sarı ve Kırmızı Çelenk - Taze ve şık aranjman.', 3500, 4200, 50, '/products/thumb_sari-ve-kirmizi-celenk-142-1522.webp', false, id FROM categories WHERE slug = 'celenkler' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Difenbahya Tropik', 'Difenbahya Tropik - Taze ve şık aranjman.', 3500, 4200, 50, '/products/thumb_difenbahya-tropik-143-7121.webp', false, id FROM categories WHERE slug = 'saksi-cicekleri' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '3''lü Yucca Çiçeği', '3''lü Yucca Çiçeği - Taze ve şık aranjman.', 3500, 4200, 50, '/products/thumb_3-lu-yucca-cicegi-155-6289.webp', false, id FROM categories WHERE slug = 'saksi-cicekleri' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Areka Çiçeği', 'Areka Çiçeği - Taze ve şık aranjman.', 3650, 4380, 50, '/products/thumb_areka-cicegi-164-1907.webp', false, id FROM categories WHERE slug = 'saksi-cicekleri' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Pembe Karanfil Buketi', 'Pembe Karanfil Buketi - Taze ve şık aranjman.', 3700, 4440, 50, '/products/thumb_buyuk-boy-pembe-karanfil-buketi-40-4519.webp', false, id FROM categories WHERE slug = 'buketler' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Papatya ve Mor Kasımpatı Buketi', 'Papatya ve Mor Kasımpatı Buketi - Taze ve şık aranjman.', 3700, 4440, 50, '/products/thumb_papatya-ve-mor-kasimpati-buketi-96-5814.webp', false, id FROM categories WHERE slug = 'papatya-gerbera' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Mor ve Sarı Papatya Buketi', 'Mor ve Sarı Papatya Buketi - Taze ve şık aranjman.', 3700, 4440, 50, '/products/thumb_mor-ve-sari-papatya-buketi-97-7245.webp', false, id FROM categories WHERE slug = 'papatya-gerbera' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '15 Adet Renkli Kasımpatı', '15 Adet Renkli Kasımpatı - Taze ve şık aranjman.', 3750, 4500, 50, '/products/thumb_15-adet-renkli-kasimpati-131-9868.webp', false, id FROM categories WHERE slug = 'buketler' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Ayaklı Sepet Kırmızı Çiçekli Çelenk', 'Ayaklı Sepet Kırmızı Çiçekli Çelenk - Taze ve şık aranjman.', 3750, 4500, 50, '/products/thumb_ayakli-sepet-kirmizi-cicekli-celenk-152-617.webp', false, id FROM categories WHERE slug = 'celenkler' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Çift Dallı Beyaz Orkide ve 7 Adet Gül', 'Çift Dallı Beyaz Orkide ve 7 Adet Gül - Taze ve şık aranjman.', 3750, 4500, 50, '/products/thumb_cift-dalli-beyaz-orkide-ve-7-adet-gul-162-4741.webp', false, id FROM categories WHERE slug = 'orkide' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Beyaz Gerbera Çelenk', 'Beyaz Gerbera Çelenk - Taze ve şık aranjman.', 4000, 4800, 50, '/products/thumb_beyaz-gerbera-celenk-154-5130.webp', false, id FROM categories WHERE slug = 'celenkler' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Kutuda 19 Adet Gül', 'Kutuda 19 Adet Gül - Taze ve şık aranjman.', 4200, 5040, 50, '/products/thumb_kutuda-19-adet-gul-101-5423.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Vazoda 15 Tane Kırmızı Beyaz Güller', 'Vazoda 15 Tane Kırmızı Beyaz Güller - Taze ve şık aranjman.', 4250, 5100, 50, '/products/thumb_vazoda-15-tane-kirmizi-beyaz-guller-29-8278.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Vazoda 18 Tane Pembe Gül', 'Vazoda 18 Tane Pembe Gül - Taze ve şık aranjman.', 4500, 5400, 50, '/products/thumb_vazoda-18-tane-pembe-gul-12-8682.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Vazoda 15 Beyaz Gül', 'Vazoda 15 Beyaz Gül - Taze ve şık aranjman.', 4500, 5400, 50, '/products/thumb_vazoda-15-beyaz-gul-32-500.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Vazoda 20 Ayçiçekleri', 'Vazoda 20 Ayçiçekleri - Taze ve şık aranjman.', 4500, 5400, 50, '/products/thumb_vazoda-20-aycicekleri-60-7573.webp', true, id FROM categories WHERE slug = 'buketler' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Renkli Buket', 'Renkli Buket - Taze ve şık aranjman.', 4500, 5400, 50, '/products/thumb_buyuk-boy-pembe-karanfil-buketi-40-4519.webp', true, id FROM categories WHERE slug = 'buketler' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Mercan Gül Buketi', 'Mercan Gül Buketi - Taze ve şık aranjman.', 4500, 5400, 50, '/products/thumb_mercan-gul-buketi-100-9364.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Eustoma Buketi', 'Eustoma Buketi - Taze ve şık aranjman.', 4500, 5400, 50, '/products/thumb_eustoma-buketi-103-6001.webp', true, id FROM categories WHERE slug = 'buketler' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '15 Büyük Boy Kırmızı Gül Buketi', '15 Büyük Boy Kırmızı Gül Buketi - Taze ve şık aranjman.', 4500, 5400, 50, '/products/thumb_15-buyuk-boy-kirmizi-gul-buketi-130-564.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '15 Adet Gül Buketi Pembe Kağıtta', '15 Adet Gül Buketi Pembe Kağıtta - Taze ve şık aranjman.', 4500, 5400, 50, '/products/thumb_15-adet-gul-buketi-pembe-kagitta-132-2389.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '2 Katlı Düğün Çiçeği Çelenk', '2 Katlı Düğün Çiçeği Çelenk - Taze ve şık aranjman.', 4500, 5400, 50, '/products/thumb_2-katli-dugun-cicegi-celenk-150-1718.webp', true, id FROM categories WHERE slug = 'celenkler' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Pembe Çiçekler ile Çelenk', 'Pembe Çiçekler ile Çelenk - Taze ve şık aranjman.', 4500, 5400, 50, '/products/thumb_pembe-cicekler-ile-celenk-153-5598.webp', true, id FROM categories WHERE slug = 'celenkler' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Pembe ve Kırmızı Krizantem Buketi', 'Pembe ve Kırmızı Krizantem Buketi - Taze ve şık aranjman.', 4750, 5700, 50, '/products/thumb_buyuk-boy-pembe-karanfil-buketi-40-4519.webp', true, id FROM categories WHERE slug = 'buketler' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '17 Kırmızı ve Beyaz Gül Buketi', '17 Kırmızı ve Beyaz Gül Buketi - Taze ve şık aranjman.', 4750, 5700, 50, '/products/thumb_7-gul-buketi-136-9049.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '25 Tane Gül Buketi', '25 Tane Gül Buketi - Taze ve şık aranjman.', 5250, 6300, 50, '/products/thumb_25-tane-gul-buketi-19-2408.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Kraft Kağıtta Papatya Buketi', 'Kraft Kağıtta Papatya Buketi - Taze ve şık aranjman.', 5500, 6600, 50, '/products/thumb_kraft-kagitta-papatya-buketi-1-1354.webp', true, id FROM categories WHERE slug = 'papatya-gerbera' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '20 Tane Beyaz Gül Buketi', '20 Tane Beyaz Gül Buketi - Taze ve şık aranjman.', 5500, 6600, 50, '/products/thumb_20-tane-beyaz-gul-buketi-58-9119.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Vazoda 35 Tane Beyaz Güller', 'Vazoda 35 Tane Beyaz Güller - Taze ve şık aranjman.', 5500, 6600, 50, '/products/thumb_vazoda-35-tane-beyaz-guller-52-6629.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Vazoda 20 Beyaz Gül', 'Vazoda 20 Beyaz Gül - Taze ve şık aranjman.', 5500, 6600, 50, '/products/thumb_vazoda-20-beyaz-gul-65-5077.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Vazoda 20 Pembe Gül', 'Vazoda 20 Pembe Gül - Taze ve şık aranjman.', 5500, 6600, 50, '/products/thumb_vazoda-20-pembe-gul-74-1794.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Pembe Ortanca Süslü Buket', 'Pembe Ortanca Süslü Buket - Taze ve şık aranjman.', 5500, 6600, 50, '/products/thumb_buyuk-boy-pembe-karanfil-buketi-40-4519.webp', true, id FROM categories WHERE slug = 'buketler' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Kraton', 'Kraton - Taze ve şık aranjman.', 5500, 6600, 50, '/products/thumb_kraton-157-9253.webp', true, id FROM categories WHERE slug = 'saksi-cicekleri' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '4''lü Yuka Çiçeği', '4''lü Yuka Çiçeği - Taze ve şık aranjman.', 5500, 6600, 50, '/products/thumb_4-lu-yuka-cicegi-159-5078.webp', true, id FROM categories WHERE slug = 'saksi-cicekleri' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '19 Gül Buketi', '19 Gül Buketi - Taze ve şık aranjman.', 5700, 6840, 50, '/products/thumb_7-gul-buketi-136-9049.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '21 Beyaz Gül Buketi', '21 Beyaz Gül Buketi - Taze ve şık aranjman.', 5750, 6900, 50, '/products/thumb_7-gul-buketi-136-9049.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '21 Adet Krem Gül Buketi', '21 Adet Krem Gül Buketi - Taze ve şık aranjman.', 5750, 6900, 50, '/products/thumb_7-gul-buketi-136-9049.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '3 Pembe Gül Buketi', '3 Pembe Gül Buketi - Taze ve şık aranjman.', 5750, 6900, 50, '/products/thumb_3-pembe-gul-buketi-138-2529.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '25 Tane Kırmızı Gül Buketi', '25 Tane Kırmızı Gül Buketi - Taze ve şık aranjman.', 5899, 7078.8, 50, '/products/thumb_25-tane-kirmizi-gul-buketi-8-6013.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '31 Adet Kırmızı Gül Buketi', '31 Adet Kırmızı Gül Buketi - Taze ve şık aranjman.', 5900, 7080, 50, '/products/thumb_7-gul-buketi-136-9049.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '21 Adet Kırmızı Gül Buketi', '21 Adet Kırmızı Gül Buketi - Taze ve şık aranjman.', 5900, 7080, 50, '/products/thumb_21-adet-kirmizi-gul-buketi-124-3963.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '24 Tane Sarı Gül Buketi', '24 Tane Sarı Gül Buketi - Taze ve şık aranjman.', 6000, 7200, 50, '/products/thumb_7-gul-buketi-136-9049.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Sarı ve Kırmızı Buket', 'Sarı ve Kırmızı Buket - Taze ve şık aranjman.', 6000, 7200, 50, '/products/thumb_sari-ve-kirmizi-buket-90-1256.webp', true, id FROM categories WHERE slug = 'buketler' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Beyaz ve Mor Papatya Buketi', 'Beyaz ve Mor Papatya Buketi - Taze ve şık aranjman.', 6000, 7200, 50, '/products/thumb_beyaz-ve-mor-papatya-buketi-105-4819.webp', true, id FROM categories WHERE slug = 'papatya-gerbera' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '25 Tane Beyaz Gül Buketi', '25 Tane Beyaz Gül Buketi - Taze ve şık aranjman.', 6250, 7500, 50, '/products/thumb_25-tane-beyaz-gul-buketi-10-1549.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Vazoda 25 Beyaz Gül', 'Vazoda 25 Beyaz Gül - Taze ve şık aranjman.', 6250, 7500, 50, '/products/thumb_vazoda-25-beyaz-gul-31-6496.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Büyük Papatya Buketi', 'Büyük Papatya Buketi - Taze ve şık aranjman.', 6350, 7620, 50, '/products/thumb_buyuk-papatya-buketi-104-4835.webp', true, id FROM categories WHERE slug = 'papatya-gerbera' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Papatya ve Pembe Gül Buketi', 'Papatya ve Pembe Gül Buketi - Taze ve şık aranjman.', 6500, 7800, 50, '/products/thumb_7-gul-buketi-136-9049.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Vazoda Büyük Lilyumlar', 'Vazoda Büyük Lilyumlar - Taze ve şık aranjman.', 6500, 7800, 50, '/products/thumb_vazoda-buyuk-lilyumlar-26-3210.webp', true, id FROM categories WHERE slug = 'buketler' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Vazoda Büyük Boy Lilyum', 'Vazoda Büyük Boy Lilyum - Taze ve şık aranjman.', 6500, 7800, 50, '/products/thumb_buyuk-boy-pembe-karanfil-buketi-40-4519.webp', true, id FROM categories WHERE slug = 'buketler' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Premium Lilyum Buketleri', 'Premium Lilyum Buketleri - Taze ve şık aranjman.', 6500, 7800, 50, '/products/thumb_premium-lilyum-buketleri-44-195.webp', true, id FROM categories WHERE slug = 'buketler' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '4 kök Massengena Çiçeği', '4 kök Massengena Çiçeği - Taze ve şık aranjman.', 6500, 7800, 50, '/products/thumb_4-kok-massengena-cicegi-156-6035.webp', true, id FROM categories WHERE slug = 'saksi-cicekleri' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '25 Büyük Boy Kırmızı Gül Buketi', '25 Büyük Boy Kırmızı Gül Buketi - Taze ve şık aranjman.', 7000, 8400, 50, '/products/thumb_7-gul-buketi-136-9049.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '25 Adet Kırmızı Gül Buketi', '25 Adet Kırmızı Gül Buketi - Taze ve şık aranjman.', 7000, 8400, 50, '/products/thumb_7-gul-buketi-136-9049.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '25 Adet Beyaz Gül Buketi', '25 Adet Beyaz Gül Buketi - Taze ve şık aranjman.', 7000, 8400, 50, '/products/thumb_25-adet-beyaz-gul-buketi-121-6968.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Jumbo Boy Orkideler', 'Jumbo Boy Orkideler - Taze ve şık aranjman.', 7000, 8400, 50, '/products/thumb_jumbo-boy-orkideler-146-6911.webp', true, id FROM categories WHERE slug = 'orkide' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Vazoda 30 Tane Gül Buketi', 'Vazoda 30 Tane Gül Buketi - Taze ve şık aranjman.', 7500, 9000, 50, '/products/thumb_vazoda-30-tane-gul-buketi-7-8168.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Pembe ve Kırmızı Gül Buketleri', 'Pembe ve Kırmızı Gül Buketleri - Taze ve şık aranjman.', 7500, 9000, 50, '/products/thumb_pembe-ve-kirmizi-gul-buketleri-11-6522.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '35 Tane Gül Buketi', '35 Tane Gül Buketi - Taze ve şık aranjman.', 7500, 9000, 50, '/products/thumb_35-tane-gul-buketi-18-8943.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Mor Gül Buketi', 'Mor Gül Buketi - Taze ve şık aranjman.', 7500, 9000, 50, '/products/thumb_mor-gul-buketi-28-9818.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Vazoda Beyaz Lilyumlar', 'Vazoda Beyaz Lilyumlar - Taze ve şık aranjman.', 7500, 9000, 50, '/products/thumb_vazoda-beyaz-lilyumlar-43-339.webp', true, id FROM categories WHERE slug = 'buketler' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Lilyum ve Pembe Gül Buketi', 'Lilyum ve Pembe Gül Buketi - Taze ve şık aranjman.', 7500, 9000, 50, '/products/thumb_7-gul-buketi-136-9049.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Seni Seviyorum Buketi', 'Seni Seviyorum Buketi - Taze ve şık aranjman.', 7500, 9000, 50, '/products/thumb_seni-seviyorum-buketi-89-3156.webp', true, id FROM categories WHERE slug = 'buketler' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Büyük Boy Ficus Benjamin', 'Büyük Boy Ficus Benjamin - Taze ve şık aranjman.', 7900, 9480, 50, '/products/thumb_buyuk-boy-ficus-benjamin-144-6853.webp', true, id FROM categories WHERE slug = 'saksi-cicekleri' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Pembe Kasımpatı Buketi', 'Pembe Kasımpatı Buketi - Taze ve şık aranjman.', 8000, 9600, 50, '/products/thumb_buyuk-boy-pembe-karanfil-buketi-40-4519.webp', true, id FROM categories WHERE slug = 'buketler' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '15 Kırmızı Gül 16 Beyaz Gül Buketi', '15 Kırmızı Gül 16 Beyaz Gül Buketi - Taze ve şık aranjman.', 8250, 9900, 50, '/products/thumb_7-gul-buketi-136-9049.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '35 Tane Pembe Gül Buketi', '35 Tane Pembe Gül Buketi - Taze ve şık aranjman.', 8500, 10200, 50, '/products/thumb_7-gul-buketi-136-9049.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Seramikte Renkli Çiçekler', 'Seramikte Renkli Çiçekler - Taze ve şık aranjman.', 8500, 10200, 50, '/products/thumb_seramikte-renkli-cicekler-147-5492.webp', true, id FROM categories WHERE slug = 'buketler' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Yılbaşı Çiçeği Kokina Aranjman', 'Yılbaşı Çiçeği Kokina Aranjman - Taze ve şık aranjman.', 8500, 8649, 50, '/products/thumb_kirmizi-antorium-163-9986.webp', true, id FROM categories WHERE slug = 'saksi-cicekleri' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Büyük Pembe Gül Buketi', 'Büyük Pembe Gül Buketi - Taze ve şık aranjman.', 8999, 10798.8, 50, '/products/thumb_buyuk-pembe-gul-buketi-27-9874.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '50 Adet Pembe Gül Buketi', '50 Adet Pembe Gül Buketi - Taze ve şık aranjman.', 9000, 10800, 50, '/products/thumb_50-adet-pembe-gul-buketi-36-512.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Büyük Sarı Kağıtta Papatya Buketi', 'Büyük Sarı Kağıtta Papatya Buketi - Taze ve şık aranjman.', 9500, 11400, 50, '/products/thumb_buyuk-sari-kagitta-papatya-buketi-2-7909.webp', true, id FROM categories WHERE slug = 'papatya-gerbera' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '51 Adet Papatya Buketi', '51 Adet Papatya Buketi - Taze ve şık aranjman.', 9500, 11400, 50, '/products/thumb_51-adet-papatya-buketi-111-8911.webp', true, id FROM categories WHERE slug = 'papatya-gerbera' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '35 Adet Gül Buketi', '35 Adet Gül Buketi - Taze ve şık aranjman.', 9750, 11700, 50, '/products/thumb_7-gul-buketi-136-9049.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Renkli Premium Buket', 'Renkli Premium Buket - Taze ve şık aranjman.', 9899, 11878.8, 50, '/products/thumb_buyuk-boy-pembe-karanfil-buketi-40-4519.webp', true, id FROM categories WHERE slug = 'buketler' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Premium Gül Buketi', 'Premium Gül Buketi - Taze ve şık aranjman.', 9899, 11878.8, 50, '/products/thumb_7-gul-buketi-136-9049.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '40 Tane Premium Gül Buketi', '40 Tane Premium Gül Buketi - Taze ve şık aranjman.', 9899, 11878.8, 50, '/products/thumb_40-tane-premium-gul-buketi-17-9036.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Vazoda Pembe Lilyum ve Kırmızı Güller', 'Vazoda Pembe Lilyum ve Kırmızı Güller - Taze ve şık aranjman.', 9899, 11878.8, 50, '/products/thumb_vazoda-pembe-lilyum-ve-kirmizi-guller-33-8778.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Vazoda 35 Tane Kırmızı Gül', 'Vazoda 35 Tane Kırmızı Gül - Taze ve şık aranjman.', 9899, 11878.8, 50, '/products/thumb_vazoda-35-tane-kirmizi-gul-42-1459.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '50 Tane Pembe Gül Buketi', '50 Tane Pembe Gül Buketi - Taze ve şık aranjman.', 9899, 11878.8, 50, '/products/thumb_7-gul-buketi-136-9049.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Vazoda 40 Tane Sarı Gül', 'Vazoda 40 Tane Sarı Gül - Taze ve şık aranjman.', 9899, 11878.8, 50, '/products/thumb_vazoda-40-tane-sari-gul-51-8603.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Pembe and Beyaz Gül Buketi', 'Pembe and Beyaz Gül Buketi - Taze ve şık aranjman.', 9899, 11878.8, 50, '/products/thumb_7-gul-buketi-136-9049.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Vazoda 40 Tane 4 Renkli Güller', 'Vazoda 40 Tane 4 Renkli Güller - Taze ve şık aranjman.', 9899, 11878.8, 50, '/products/thumb_vazoda-40-tane-4-renkli-guller-68-8773.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '40 Tane Pembe Gül Buketi', '40 Tane Pembe Gül Buketi - Taze ve şık aranjman.', 9899, 11878.8, 50, '/products/thumb_7-gul-buketi-136-9049.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '51 Adet Pembe Gül Buketi', '51 Adet Pembe Gül Buketi - Taze ve şık aranjman.', 9899, 11878.8, 50, '/products/thumb_7-gul-buketi-136-9049.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '51 Adet Pembe ve Krem Gül Buketi', '51 Adet Pembe ve Krem Gül Buketi - Taze ve şık aranjman.', 9899, 11878.8, 50, '/products/thumb_7-gul-buketi-136-9049.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '51 Adet Krem Gül Buketi', '51 Adet Krem Gül Buketi - Taze ve şık aranjman.', 9899, 11878.8, 50, '/products/thumb_7-gul-buketi-136-9049.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '51 Adet Kırmızı Gül Buketi', '51 Adet Kırmızı Gül Buketi - Taze ve şık aranjman.', 9899, 11878.8, 50, '/products/thumb_7-gul-buketi-136-9049.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '51 Adet Büyük Boy Kırmızı Gül Buketi', '51 Adet Büyük Boy Kırmızı Gül Buketi - Taze ve şık aranjman.', 9899, 11878.8, 50, '/products/thumb_7-gul-buketi-136-9049.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '51 Adet Beyaz Gül Buketi', '51 Adet Beyaz Gül Buketi - Taze ve şık aranjman.', 9899, 11878.8, 50, '/products/thumb_51-adet-beyaz-gul-buketi-115-8785.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '29 Kırmızı Gül ve 12 Beyaz Gül Buketi', '29 Kırmızı Gül ve 12 Beyaz Gül Buketi - Taze ve şık aranjman.', 9899, 11878.8, 50, '/products/thumb_7-gul-buketi-136-9049.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '41 Tane Büyük Boy Kırmızı Gül Buketi', '41 Tane Büyük Boy Kırmızı Gül Buketi - Taze ve şık aranjman.', 11898, 14277.6, 50, '/products/thumb_7-gul-buketi-136-9049.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Pembe - Beyaz ve Kırmızı Gül Buketi', 'Pembe - Beyaz ve Kırmızı Gül Buketi - Taze ve şık aranjman.', 11900, 14280, 50, '/products/thumb_pembe-beyaz-ve-kirmizi-gul-buketi-41-4972.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Kutuda 41 Beyaz Güller', 'Kutuda 41 Beyaz Güller - Taze ve şık aranjman.', 11989, 14386.8, 50, '/products/thumb_7-gul-buketi-136-9049.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '50 Tane Büyük Gül Buketi', '50 Tane Büyük Gül Buketi - Taze ve şık aranjman.', 12000, 14400, 50, '/products/thumb_50-tane-buyuk-gul-buketi-20-7066.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Premium 50 Tane Pembe Gül Buketi', 'Premium 50 Tane Pembe Gül Buketi - Taze ve şık aranjman.', 12000, 14400, 50, '/products/thumb_premium-50-tane-pembe-gul-buketi-21-2678.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '40 Tane Beyaz Gül ve Ayıcık', '40 Tane Beyaz Gül ve Ayıcık - Taze ve şık aranjman.', 12000, 14400, 50, '/products/thumb_7-gul-buketi-136-9049.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT '50 Kırmızı Gül Buketi', '50 Kırmızı Gül Buketi - Taze ve şık aranjman.', 12000, 14400, 50, '/products/thumb_50-kirmizi-gul-buketi-64-2995.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Vazoda 40 Tane Gül', 'Vazoda 40 Tane Gül - Taze ve şık aranjman.', 12000, 14400, 50, '/products/thumb_7-gul-buketi-136-9049.webp', true, id FROM categories WHERE slug = 'guller' LIMIT 1;
INSERT INTO products (name, description, price, old_price, stock, image_url, is_featured, category_id)
SELECT 'Panolu Gösterişli Çelenk', 'Panolu Gösterişli Çelenk - Taze ve şık aranjman.', 12000, 14400, 50, '/products/thumb_panolu-gosterisli-celenk-151-4461.webp', true, id FROM categories WHERE slug = 'celenkler' LIMIT 1;
