<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Prices & Services - Safi Laundry</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
<!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container">
            <a class="navbar-brand" href="index.html"><i class="fas fa-sparkles me-2"></i>Safi Laundry</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
<div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto align-items-center">
                    <li class="nav-item"><a class="nav-link" href="index.html">Beranda</a></li>
                    <li class="nav-item"><a class="nav-link" href="index.html#layanan">Layanan</a></li>
                    <li class="nav-item"><a class="nav-link active" href="produk.html">Harga</a></li>
                    <li class="nav-item"><a class="nav-link" href="index.html#proses">Cara Kerja</a></li>
<li class="nav-item"><a class="nav-link" href="index.html#kontak">Contact</a></li>
                    <li class="nav-item ms-3"><a href="produk.html" class="btn btn-primary">Order Sekarang</a></li>
                </ul>
            </div>
        </div>
</none>

    <!-- Breadcrumb -->
    <section class="breadcrumb-section">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html" class="text-primary text-decoration-none">Beranda</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Harga & Layanan</li>
                </ol>
</none>
<h1 class="display-4 fw-bold mb-3">Price & Service List</h1>
<p class="lead text-muted">Choose the package that suits your needs. Affordable prices with guaranteed quality!</p>
        </div>
    </section>

    <!-- Services Section -->
    <section class="py-5">
        <div class="container">
            <!-- Filter Tabs -->
            <div class="text-center mb-5">
                <ul class="nav nav-pills justify-content-center gap-3" id="serviceFilter">
                    <li class="nav-item">
<button class="nav-link active" data-filter="all">All Services</button>
</li>
                    <li class="nav-item">
<button class="nav-link" data-filter="clothing">Clothing</button>
</li>
                    <li class="nav-item">
                        <button class="nav-link" data-filter="premium">Premium</button>
</li>
                    <li class="nav-item">
<button class="nav-link" data-filter="special">Special</button>
</li>
                </ul>
            </div>

            <!-- Service Cards -->
            <div class="row g-4" id="serviceCards">
<!-- Dry Cleaning -->
                <div class="col-md-4 service-item" data-category="pakaian">
                    <div class="service-card">
                        <img src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=500" alt="Cuci Kering">
                        <div class="service-body">
                            <span class="badge bg-success mb-2">Paling Populer</span>
                            <h3 class="service-title">Cuci Kering</h3>
<p class="text-muted mb-3"><i class="fas fa-clock text-primary me-2"></i>Completed in 2 Days · Fold Neatly</p>
                            <ul class="text-muted mb-3">
<li>Maximum clean wash</li>
<li>Pewangi premium</li>
<li>Lipat rape & rape</li>
<li>Free plastic wrapping</li>
                            </ul>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
<small class="text-muted">Starting from</small>
                                    <div class="price">Rp 5.000/kg</div>
                                    <small class="text-muted">Min. 3kg</small>
                                </div>
                                <a href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20order%20Cuci%20Kering" class="btn btn-primary rounded-pill">Order</a>
                            </div>
                        </div>
                    </div>
                </div>

<!-- Wash Iron -->
                <div class="col-md-4 service-item" data-category="pakaian">
                    <div class="service-card">
                        <img src="https://images.unsplash.com/photo-1489274495757-95c7c837b101?w=500" alt="Cuci Setrika">
                        <div class="service-body">
<span class="badge bg-info mb-2">Recommendations</span>
<h3 class="service-title">Washing and Ironing</h3>
<p class="text-muted mb-3"><i class="fas fa-clock text-primary me-2"></i>Completed in 3 Days · Neat Ironing</p>
                            <ul class="text-muted mb-3">
<li>Professional wash + iron</li>
<li>Long-lasting fragrance</li>
<li>Free hangers</li>
<li>Ready to use immediately</li>
                            </ul>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
<small class="text-muted">Starting from</small>
                                    <div class="price">Rp 7.000/kg</div>
                                    <small class="text-muted">Min. 3kg</small>
                                </div>
                                <a href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20order%20Cuci%20Setrika" class="btn btn-primary rounded-pill">Order</a>
                            </div>
                        </div>
                    </div>
                </div>

<!-- Express 1 Day -->
                <div class="col-md-4 service-item" data-category="pakaian premium">
                    <div class="service-card">
                        <img src="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=500" alt="Express">
                        <div class="service-body">
<span class="badge bg-danger mb-2">Super Fast</span>
                            <h3 class="service-title">Express 1 Hari</h3>
                            <p class="text-muted mb-3"><i class="fas fa-clock text-danger me-2"></i>Selesai 24 Jam · Prioritas</p>
                            <ul class="text-muted mb-3">
<li>Processing Priority</li>
<li>Premium wash + iron</li>
<li>Delivery on time</li>
<li>Guaranteed completion on time</li>
                            </ul>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
<small class="text-muted">Starting from</small>
                                    <div class="price">Rp 10.000/kg</div>
                                    <small class="text-muted">Min. 2kg</small>
                                </div>
                                <a href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20order%20Express%201%20Hari" class="btn btn-primary rounded-pill">Order</a>
                            </div>
                        </div>
                    </div>
                </div>

<!-- Wash Shoes -->
                <div class="col-md-4 service-item" data-category="khusus premium">
                    <div class="service-card">
                        <img src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=500" alt="Sepatu">
                        <div class="service-body">
                            <span class="badge bg-warning text-dark mb-2">Premium Care</span>
<h3 class="service-title">Shoe Washing</h3>
                            <p class="text-muted mb-3"><i class="fas fa-clock text-primary me-2"></i>Selesai 3 Hari · Deep Clean</p>
                            <ul class="text-muted mb-3">
                                <li>Deep cleaning all type</li>
<li>Repaint (optional)</li>
<li>Material-specific treatment</li>
<li>Waterproofing (additional)</li>
                            </ul>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
<small class="text-muted">Starting from</small>
                                    <div class="price">Rp 25.000/psg</div>
                                    <small class="text-muted">Sneakers/Casual</small>
                                </div>
                                <a href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20order%20Cuci%20Sepatu" class="btn btn-primary rounded-pill">Order</a>
                            </div>
                        </div>
                    </div>
                </div>

<!-- Carpet Cleaning -->
                <div class="col-md-4 service-item" data-category="khusus">
                    <div class="service-card">
                        <img src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=500" alt="Karpet">
                        <div class="service-body">
                            <h3 class="service-title">Cuci Karpet</h3>
<p class="text-muted mb-3"><i class="fas fa-clock text-primary me-2"></i>Completed in 4 Days · Total Clean</p>
                            <ul class="text-muted mb-3">
<li>Vacuum + thorough cleaning</li>
<li>Remove stubborn stains</li>
<li>Anti-mite & bacteria</li>
<li>Long-lasting fresh fragrance</li>
                            </ul>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
<small class="text-muted">Starting from</small>
                                    <div class="price">Rp 15.000/m²</div>
<small class="text-muted">All types of carpets</small>
                                </div>
                                <a href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20order%20Cuci%20Karpet" class="btn btn-primary rounded-pill">Order</a>
                            </div>
                        </div>
                    </div>
                </div>

<!-- Wash the Doll -->
                <div class="col-md-4 service-item" data-category="khusus">
                    <div class="service-card">
                        <img src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=500" alt="Boneka">
                        <div class="service-body">
<h3 class="service-title">Doll Wash</h3>
                            <p class="text-muted mb-3"><i class="fas fa-clock text-primary me-2"></i>Selesai 3 Hari · Gentle Care</p>
                            <ul class="text-muted mb-3">
<li>Wash gently & carefully</li>
<li>Safe for children</li>
<li>The shape remains neat</li>
<li>Hypoallergenic fragrance</li>
                            </ul>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
<small class="text-muted">Starting from</small>
                                    <div class="price">Rp 20.000/pcs</div>
                                    <small class="text-muted">Size S-M</small>
                                </div>
                                <a href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20order%20Cuci%20Boneka" class="btn btn-primary rounded-pill">Order</a>
                            </div>
                        </div>
                    </div>
                </div>

<!-- Wash Blanket -->
                <div class="col-md-4 service-item" data-category="khusus">
                    <div class="service-card">
                        <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500" alt="Selimut">
                        <div class="service-body">
<h3 class="service-title">Wash Blankets</h3>
                            <p class="text-muted mb-3"><i class="fas fa-clock text-primary me-2"></i>Selesai 3 Hari · Soft & Fluffy</p>
                            <ul class="text-muted mb-3">
<li>Wash thick/thin blankets</li>
<li>Premium softener</li>
<li>Anti-bacterial & anti-mite</li>
<li>Stay soft & fluffy</li>
                            </ul>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
<small class="text-muted">Starting from</small>
                                    <div class="price">Rp 30.000/pcs</div>
                                    <small class="text-muted">Single/Double</small>
                                </div>
                                <a href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20order%20Cuci%20Selimut" class="btn btn-primary rounded-pill">Order</a>
                            </div>
                        </div>
                    </div>
                </div>

<!-- Wash Bag -->
                <div class="col-md-4 service-item" data-category="premium khusus">
                    <div class="service-card">
                        <img src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500" alt="Tas">
                        <div class="service-body">
                            <span class="badge bg-warning text-dark mb-2">Premium</span>
                            <h3 class="service-title">Cuci Tas</h3>
                            <p class="text-muted mb-3"><i class="fas fa-clock text-primary me-2"></i>Selesai 3-4 Hari · Expert Care</p>
                            <ul class="text-muted mb-3">
                                <li>All type bags (ransel, tote, dll)</li>
                                <li>Deep cleaning + sanitize</li>
<li>Material-specific treatment</li>
                                <li>Leather conditioning (opsional)</li>
                            </ul>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
<small class="text-muted">Starting from</small>
                                    <div class="price">Rp 35.000/pcs</div>
                                    <small class="text-muted">Ransel/Tote</small>
                                </div>
                                <a href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20order%20Cuci%20Tas" class="btn btn-primary rounded-pill">Order</a>
                            </div>
                        </div>
                    </div>
                </div>

<!-- Wash Curtains -->
                <div class="col-md-4 service-item" data-category="khusus">
                    <div class="service-card">
                        <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500" alt="Gordyn">
                        <div class="service-body">
                            <h3 class="service-title">Cuci Gordyn</h3>
                            <p class="text-muted mb-3"><i class="fas fa-clock text-primary me-2"></i>Selesai 4-5 Hari · Fresh</p>
                            <ul class="text-muted mb-3">
<li>Sewing all types of curtains</li>
<li>Remove dust & stains</li>
<li>Anti-fungal & bacterial</li>
<li>Iron neatly folded</li>
                            </ul>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
<small class="text-muted">Starting from</small>
                                    <div class="price">Rp 18.000/m²</div>
                                    <small class="text-muted">Per meter persegi</small>
                                </div>
                                <a href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20order%20Cuci%20Gordyn" class="btn btn-primary rounded-pill">Order</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Promo Banner -->
    <section class="py-5 bg-light">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-8">
                    <h3 class="fw-bold mb-3"><i class="fas fa-gift text-danger me-2"></i>Promo Spesial Bulan Ini!</h3>
                    <ul class="mb-0">
<li class="mb-2">🎉 20% discount for new customers (min. 5kg)</li>
<li class="mb-2">💰 Free shipping within a 3km radius</li>
<li class="mb-2">🎁 Wash 10kg and get 1kg free for loyal members</li>
<li class="mb-2">⚡ Express 6 hours available (certain areas only)</li>
                    </ul>
                </div>
                <div class="col-lg-4 text-lg-end mt-3 mt-lg-0">
                    <a href="https://wa.me/6281234567890" class="btn btn-success btn-lg rounded-pill">
<i class="fab fa-whatsapp me-2"></i>Contact Now
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-5">
        <div class="container">
            <div class="text-center mb-5">
<h2 class="fw-bold">Frequently Asked Questions (FAQ)</h2>
<p class="text-muted">Answers to frequently asked questions</p>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="accordion" id="faqAccordion">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
How to order laundry?
                                </button>
                            </h2>
                            <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
It's easy! Simply contact us via WhatsApp, select your desired service, and choose a pickup time. Our team will come to your location.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
Is there a minimum order?
                                </button>
                            </h2>
                            <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
Yes, the minimum order for dry cleaning and ironing is 3 kg. For express orders, the minimum is 2 kg.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
How long does the laundry process take?
                                </button>
                            </h2>
                            <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
Depending on the package selected, dry cleaning takes 2 days, ironing takes 3 days, and express takes 24 hours. Special services like shoes and carpets take 3-4 days.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
Is it safe for sensitive clothing?
                                </button>
                            </h2>
                            <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
Completely safe! We use premium detergents that are gentle on all fabrics and sensitive skin. Our team is experienced in handling a wide variety of garments.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer id="footer">
        <div class="container">
            <div class="row g-4 mb-4">
                <div class="col-lg-4">
                    <h4 class="fw-bold mb-3"><i class="fas fa-sparkles me-2"></i>Safi Laundry</h4>
<p class="text-muted">A trusted professional laundry service ready to serve your laundry needs with the best quality and affordable prices.</p>
                    <div class="d-flex gap-3 mt-3">
                        <a href="#" class="text-white"><i class="fab fa-facebook fa-lg"></i></a>
                        <a href="#" class="text-white"><i class="fab fa-instagram fa-lg"></i></a>
                        <a href="#" class="text-white"><i class="fab fa-twitter fa-lg"></i></a>
                        <a href="#" class="text-white"><i class="fab fa-tiktok fa-lg"></i></a>
                    </div>
                </div>
                <div class="col-lg-2 col-md-4">
                    <h5 class="fw-bold mb-3">Layanan</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2"><a href="produk.html" class="footer-link">Cuci Kering</a></li>
<li class="mb-2"><a href="produk.html" class="footer-link">Washing and Ironing</a></li>
                        <li class="mb-2"><a href="produk.html" class="footer-link">Express</a></li>
                        <li class="mb-2"><a href="produk.html" class="footer-link">Premium Care</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-4">
<h5 class="fw-bold mb-3">Company</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2"><a href="#" class="footer-link">Tentang Kami</a></li>
                        <li class="mb-2"><a href="#" class="footer-link">Karir</a></li>
                        <li class="mb-2"><a href="#" class="footer-link">Mitra</a></li>
                        <li class="mb-2"><a href="#" class="footer-link">Testimoni</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-4">
                    <h5 class="fw-bold mb-3">Bantuan</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2"><a href="#" class="footer-link">FAQ</a></li>
                        <li class="mb-2"><a href="#" class="footer-link">Cara Order</a></li>
                        <li class="mb-2"><a href="#" class="footer-link">Syarat & Ketentuan</a></li>
<li class="mb-2"><a href="#" class="footer-link">Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-4">
<h5 class="fw-bold mb-3">Contact Us</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2 text-muted"><i class="fas fa-phone me-2"></i>0812-3456-7890</li>
                        <li class="mb-2 text-muted"><i class="fas fa-envelope me-2"></i>info@saficleaningco.net.id</li>
                        <li class="mb-2 text-muted"><i class="fas fa-map-marker-alt me-2"></i>Bandung, Indonesia</li>
                        <li class="mb-2 text-muted"><i class="fas fa-clock me-2"></i>24/7 Service</li>
                    </ul>
                </div>
            </div>
            <hr style="border-color: #333;">
            <div class="text-center py-3">
                <p class="text-muted mb-0">&copy; 2025 Doni Sw. All Rights Reserved. Made with <i class="fas fa-heart text-danger"></i> in Indonesia</p>
            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        // Active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            const href = link.getAttribute('href');
            if (href === 'produk.html' || (href && href.includes('produk.html'))) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Filter functionality
        const filterButtons = document.querySelectorAll('#serviceFilter button');
        const serviceItems = document.querySelectorAll('.service-item');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Filter items
                const filter = button.getAttribute('data-filter');
                
                serviceItems.forEach(item => {
                    if (filter === 'all') {
                        item.style.display = 'block';
setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        const categories = item.getAttribute('data-category').split(' ');
                        if (categories.includes(filter)) {
                            item.style.display = 'block';
setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'translateY(0)';
                            }, 10);
                        } else {
                            item.style.opacity = '0';
                            item.style.transform = 'translateY(30px)';
setTimeout(() => {
                                item.style.display = 'none';
                            }, 300);
                        }
                    }
                });
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            } else {
                navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
            }
        });

        // Animation on scroll
        const observerOptions = {
            threshold: 0.1,
rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.service-card').forEach(el => {
            el.parentElement.style.opacity = '0';
            el.parentElement.style.transform = 'translateY(30px)';
            el.parentElement.style.transition = 'all 0.6s ease';
observer.observe(el.parentElement);
        });
    </script>
</body>
</html>

