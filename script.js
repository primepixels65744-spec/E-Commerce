/* ------------- DATA ------------- */
const PRODUCTS = [
  { id: "p1", title: "Wireless Headphones", cat: "Electronics", price: 119.00, img: "https://png.pngtree.com/thumb_back/fh260/background/20230621/pngtree-wireless-headphones-in-3d-image_3650766.jpg", colors: ["Black", "Silver"], sizes: ["Std"], rating: 4.8, sku: "AUD-301", popular: true, desc: "Active noise cancellation, 30h battery life, fast USB-C charging, low-latency Bluetooth 5.3." },
  { id: "p2", title: "Aero Knit Sneakers", cat: "Fashion", price: 79.99, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop", colors: ["Black", "White", "Blue"], sizes: ["40", "41", "42", "43"], rating: 4.6, sku: "SNK-001", popular: true, desc: "Breathable knit upper, cushioned EVA midsole, and anti-slip outsole for all-day comfort." },
  { id: "p3", title: "Smartwatch Active", cat: "Electronics", price: 149.00, img: "https://img.freepik.com/fotos-premium/eine-intelligente-uhr-mit-einem-schwarzen-band-und-einem-neonlicht-im-hintergrund_843415-1338.jpg", colors: ["Black", "Rose Gold"], sizes: ["S", "M", "L"], rating: 4.5, sku: "WCH-550", popular: true, desc: "AMOLED display, heart-rate & SpO₂ tracking, GPS, 5-ATM water resistance, 7-day battery." },
  { id: "p4", title: "Minimal Backpack", cat: "Accessories", price: 59.50, img: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=400&auto=format&fit=crop", colors: ["Charcoal", "Tan"], sizes: ["S", "M", "L"], rating: 4.2, sku: "BAG-114", popular: false, desc: "Water-resistant fabric, laptop sleeve up to 15”, ergonomic straps, and hidden anti-theft pocket." },
  { id: "p5", title: "Ceramic Mug Set", cat: "Home", price: 24.99, img: "https://png.pngtree.com/thumb_back/fh260/background/20231009/pngtree-pair-of-3d-rendered-realistic-black-mugs-mockup-image_13579229.png", colors: ["Cream", "Olive"], sizes: ["300ml", "400ml"], rating: 4.1, sku: "MUG-009", popular: false, desc: "Matte glazed finish with ergonomic handle; microwave and dishwasher safe." },
  { id: "p6", title: "Soft Cotton Tee", cat: "Fashion", price: 18.00, img: "https://img.freepik.com/premium-photo/gray-tshirt-black-background_812426-166924.jpg", colors: ["Black", "White", "Grey"], sizes: ["S", "M", "L", "XL"], rating: 4.0, sku: "TEE-072", popular: false, desc: "100% combed cotton, pre-shrunk, breathable and durable everyday staple." }
];

const CATEGORIES = ["All", "Fashion", "Accessories", "Electronics", "Home"];
const FX = { USD: 1, EUR: 0.92, GBP: 0.78, PKR: 279, INR: 84, CNY: 7.1, JPY: 156, AED: 3.67 };
let state = {
  currency: "USD",
  lang: "en",
  cart: JSON.parse(localStorage.getItem("cart") || "[]"),
  wish: JSON.parse(localStorage.getItem("wish") || "[]"),
  coupon: null
};

/* ------------- TRANSLATIONS ------------- */
const I18N = {
  en: {
    heroTitle: "Discover Quality. Designed to Impress.",
    heroDesc: "Shop curated essentials with fast shipping, easy returns, and premium support.",
    shopNow: "Shop Now",
    browse: "Browse Categories",
    newsletterTitle: "Join our newsletter",
    newsletterDesc: "Exclusive discounts and early access.",
    join: "Join",
    chat: "Chat on WhatsApp",
    searchPlaceholder: "Search products…",
    saleLabel: "SALE ENDS SOON",
    days: "Days", hours: "Hours", mins: "Mins", secs: "Secs",
    categories: { all: "All", fashion: "Fashion", accessories: "Accessories", electronics: "Electronics", home: "Home" },
    sort: { pop: "Sort: Popular", "price-asc": "Sort: Price ↑", "price-desc": "Sort: Price ↓" },
    openCart: "Cart",
    cartTitle: "🛒 Your Cart",
    couponPlaceholder: "Coupon code (SAVE10)",
    applyCoupon: "Apply",
    subtotalLabel: "Subtotal",
    checkout: "Proceed to Checkout",
    completePurchase: "Complete Purchase",
    checkoutName: "Full Name",
    checkoutAddress: "Shipping Address",
    checkoutPayment: "Payment Method",
    checkoutNameError: "Please enter your full name",
    checkoutAddressError: "Please enter a valid shipping address",
    checkoutPaymentError: "Please select a payment method",
    cartEmpty: "Your cart is empty",
    inStock: "In stock",
    chooseColor: "Choose color",
    chooseSize: "Choose size",
    addToCart: "Add to Cart",
    viewAll: "View All",
    footer: "© {yr} Shoppie • All rights reserved.",
    addedToast: "added to cart!",
    couponSuccess: "Coupon applied: 10% off",
    couponInvalid: "Invalid coupon"
  },
  es: {
    heroTitle: "Descubre la calidad. Diseñado para impresionar.",
    heroDesc: "Compra esenciales seleccionados con envío rápido, devoluciones fáciles y soporte premium.",
    shopNow: "Comprar ahora",
    browse: "Explorar categorías",
    newsletterTitle: "Únete a nuestro boletín",
    newsletterDesc: "Descuentos exclusivos y acceso anticipado.",
    join: "Unirse",
    chat: "Chatear en WhatsApp",
    searchPlaceholder: "Buscar productos…",
    saleLabel: "¡LA VENTA TERMINA PRONTO!",
    days: "Días", hours: "Horas", mins: "Minutos", secs: "Segundos",
    categories: { all: "Todo", fashion: "Moda", accessories: "Accesorios", electronics: "Electrónica", home: "Hogar" },
    sort: { pop: "Ordenar: Popular", "price-asc": "Ordenar: Precio ↑", "price-desc": "Ordenar: Precio ↓" },
    openCart: "Carrito",
    cartTitle: "🛒 Tu carrito",
    couponPlaceholder: "Código de cupón (SAVE10)",
    applyCoupon: "Aplicar",
    subtotalLabel: "Subtotal",
    checkout: "Proceder al pago",
    completePurchase: "Completar compra",
    checkoutName: "Nombre completo",
    checkoutAddress: "Dirección de envío",
    checkoutPayment: "Método de pago",
    checkoutNameError: "Por favor, ingresa tu nombre completo",
    checkoutAddressError: "Por favor, ingresa una dirección de envío válida",
    checkoutPaymentError: "Por favor, selecciona un método de pago",
    cartEmpty: "Tu carrito está vacío",
    inStock: "En stock",
    chooseColor: "Elegir color",
    chooseSize: "Elegir talla",
    addToCart: "Añadir al carrito",
    viewAll: "Ver todo",
    footer: "© {yr} Shoppie • Todos los derechos reservados.",
    addedToast: "¡añadido al carrito!",
    couponSuccess: "Cupón aplicado: 10% de descuento",
    couponInvalid: "Cupón no válido"
  },
  zh: {
    heroTitle: "发现品质。设计令人印象深刻。",
    heroDesc: "购买精选必需品，快速发货，轻松退货，优质支持。",
    shopNow: "立即购买",
    browse: "浏览分类",
    newsletterTitle: "加入我们的新闻通讯",
    newsletterDesc: "独家折扣和优先访问。",
    join: "加入",
    chat: "在WhatsApp上聊天",
    searchPlaceholder: "搜索产品…",
    saleLabel: "促销即将结束！",
    days: "天", hours: "小时", mins: "分钟", secs: "秒",
    categories: { all: "全部", fashion: "时尚", accessories: "配件", electronics: "电子产品", home: "家居" },
    sort: { pop: "排序：热门", "price-asc": "排序：价格 ↑", "price-desc": "排序：价格 ↓" },
    openCart: "购物车",
    cartTitle: "🛒 你的购物车",
    couponPlaceholder: "优惠券代码 (SAVE10)",
    applyCoupon: "应用",
    subtotalLabel: "小计",
    checkout: "前往结账",
    completePurchase: "完成购买",
    checkoutName: "全名",
    checkoutAddress: "送货地址",
    checkoutPayment: "支付方式",
    checkoutNameError: "请输入你的全名",
    checkoutAddressError: "请输入有效的送货地址",
    checkoutPaymentError: "请选择支付方式",
    cartEmpty: "你的购物车是空的",
    inStock: "有货",
    chooseColor: "选择颜色",
    chooseSize: "选择尺寸",
    addToCart: "加入购物车",
    viewAll: "查看全部",
    footer: "© {yr} Shoppie • 保留所有权利。",
    addedToast: "已加入购物车！",
    couponSuccess: "优惠券已应用：10%折扣",
    couponInvalid: "无效优惠券"
  },
  ja: {
    heroTitle: "品質を発見。印象を与えるデザイン。",
    heroDesc: "厳選された必需品を迅速な配送、簡単な返品、プレミアムサポートで購入。",
    shopNow: "今すぐ購入",
    browse: "カテゴリを閲覧",
    newsletterTitle: "ニュースレターに参加",
    newsletterDesc: "限定割引と先行アクセス。",
    join: "参加",
    chat: "WhatsAppでチャット",
    searchPlaceholder: "製品を検索…",
    saleLabel: "セールはまもなく終了！",
    days: "日", hours: "時間", mins: "分", secs: "秒",
    categories: { all: "すべて", fashion: "ファッション", accessories: "アクセサリー", electronics: "電子機器", home: "ホーム" },
    sort: { pop: "並べ替え：人気", "price-asc": "並べ替え：価格 ↑", "price-desc": "並べ替え：価格 ↓" },
    openCart: "カート",
    cartTitle: "🛒 あなたのカート",
    couponPlaceholder: "クーポンコード (SAVE10)",
    applyCoupon: "適用",
    subtotalLabel: "小計",
    checkout: "チェックアウトに進む",
    completePurchase: "購入を完了",
    checkoutName: "フルネーム",
    checkoutAddress: "配送先住所",
    checkoutPayment: "支払い方法",
    checkoutNameError: "フルネームを入力してください",
    checkoutAddressError: "有効な配送先住所を入力してください",
    checkoutPaymentError: "支払い方法を選択してください",
    cartEmpty: "カートが空です",
    inStock: "在庫あり",
    chooseColor: "色を選択",
    chooseSize: "サイズを選択",
    addToCart: "カートに追加",
    viewAll: "すべて見る",
    footer: "© {yr} Shoppie • すべての権利を保持。",
    addedToast: "カートに追加されました！",
    couponSuccess: "クーポンが適用されました：10%オフ",
    couponInvalid: "無効なクーポン"
  },
  fr: {
    heroTitle: "Découvrez la qualité. Conçu pour impressionner.",
    heroDesc: "Achetez des essentiels soigneusement sélectionnés avec une livraison rapide, des retours faciles et un support premium.",
    shopNow: "Acheter maintenant",
    browse: "Parcourir les catégories",
    newsletterTitle: "Inscrivez-vous à notre newsletter",
    newsletterDesc: "Réductions exclusives et accès anticipé.",
    join: "S'inscrire",
    chat: "Discuter sur WhatsApp",
    searchPlaceholder: "Rechercher des produits…",
    saleLabel: "LA VENTE SE TERMINE BIENTÔT !",
    days: "Jours", hours: "Heures", mins: "Minutes", secs: "Secondes",
    categories: { all: "Tous", fashion: "Mode", accessories: "Accessoires", electronics: "Électronique", home: "Maison" },
    sort: { pop: "Trier : Populaire", "price-asc": "Trier : Prix ↑", "price-desc": "Trier : Prix ↓" },
    openCart: "Panier",
    cartTitle: "🛒 Votre panier",
    couponPlaceholder: "Code promo (SAVE10)",
    applyCoupon: "Appliquer",
    subtotalLabel: "Sous-total",
    checkout: "Passer à la caisse",
    completePurchase: "Finaliser l'achat",
    checkoutName: "Nom complet",
    checkoutAddress: "Adresse de livraison",
    checkoutPayment: "Méthode de paiement",
    checkoutNameError: "Veuillez entrer votre nom complet",
    checkoutAddressError: "Veuillez entrer une adresse de livraison valide",
    checkoutPaymentError: "Veuillez sélectionner une méthode de paiement",
    cartEmpty: "Votre panier est vide",
    inStock: "En stock",
    chooseColor: "Choisir la couleur",
    chooseSize: "Choisir la taille",
    addToCart: "Ajouter au panier",
    viewAll: "Voir tout",
    footer: "© {yr} Shoppie • Tous droits réservés.",
    addedToast: "ajouté au panier !",
    couponSuccess: "Coupon appliqué : 10% de réduction",
    couponInvalid: "Coupon non valide"
  },
  ar: {
    heroTitle: "اكتشف الجودة. مصمم لإثارة الإعجاب.",
    heroDesc: "تسوق المنتجات الأساسية المختارة بعناية مع شحن سريع، إرجاع سهل، ودعم مميز.",
    shopNow: "تسوق الآن",
    browse: "تصفح الفئات",
    newsletterTitle: "اشترك في نشرتنا الإخبارية",
    newsletterDesc: "خصومات حصرية والوصول المبكر.",
    join: "اشترك",
    chat: "الدردشة على واتساب",
    searchPlaceholder: "ابحث عن المنتجات…",
    saleLabel: "البيع ينتهي قريبًا!",
    days: "أيام", hours: "ساعات", mins: "دقائق", secs: "ثوانٍ",
    categories: { all: "الكل", fashion: "الأزياء", accessories: "الإكسسوارات", electronics: "الإلكترونيات", home: "المنزل" },
    sort: { pop: "الترتيب: الأكثر شعبية", "price-asc": "الترتيب: السعر ↑", "price-desc": "الترتيب: السعر ↓" },
    openCart: "السلة",
    cartTitle: "🛒 سلة التسوق الخاصة بك",
    couponPlaceholder: "كود الخصم (SAVE10)",
    applyCoupon: "تطبيق",
    subtotalLabel: "المجموع الفرعي",
    checkout: "المتابعة إلى الدفع",
    completePurchase: "إتمام الشراء",
    checkoutName: "الاسم الكامل",
    checkoutAddress: "عنوان الشحن",
    checkoutPayment: "طريقة الدفع",
    checkoutNameError: "يرجى إدخال اسمك الكامل",
    checkoutAddressError: "يرجى إدخال عنوان شحن صالح",
    checkoutPaymentError: "يرجى اختيار طريقة دفع",
    cartEmpty: "سلة التسوق الخاصة بك فارغة",
    inStock: "متوفر في المخزون",
    chooseColor: "اختر اللون",
    chooseSize: "اختر الحجم",
    addToCart: "إضافة إلى السلة",
    viewAll: "عرض الكل",
    footer: "© {yr} Shoppie • جميع الحقوق محفوظة.",
    addedToast: "تمت الإضافة إلى السلة!",
    couponSuccess: "تم تطبيق الكوبون: خصم 10%",
    couponInvalid: "كوبون غير صالح"
  },
  de: {
    heroTitle: "Entdecken Sie Qualität. Entworfen, um zu beeindrucken.",
    heroDesc: "Kaufen Sie sorgfältig ausgewählte Essentials mit schnellem Versand, einfachen Rückgaben und Premium-Support.",
    shopNow: "Jetzt kaufen",
    browse: "Kategorien durchstöbern",
    newsletterTitle: "Abonnieren Sie unseren Newsletter",
    newsletterDesc: "Exklusive Rabatte und frühzeitiger Zugang.",
    join: "Abonnieren",
    chat: "Auf WhatsApp chatten",
    searchPlaceholder: "Produkte suchen…",
    saleLabel: "VERKAUF ENDET BALD!",
    days: "Tage", hours: "Stunden", mins: "Minuten", secs: "Sekunden",
    categories: { all: "Alle", fashion: "Mode", accessories: "Accessoires", electronics: "Elektronik", home: "Zuhause" },
    sort: { pop: "Sortieren: Beliebt", "price-asc": "Sortieren: Preis ↑", "price-desc": "Sortieren: Preis ↓" },
    openCart: "Warenkorb",
    cartTitle: "🛒 Ihr Warenkorb",
    couponPlaceholder: "Gutscheincode (SAVE10)",
    applyCoupon: "Anwenden",
    subtotalLabel: "Zwischensumme",
    checkout: "Zur Kasse gehen",
    completePurchase: "Kauf abschließen",
    checkoutName: "Vollständiger Name",
    checkoutAddress: "Lieferadresse",
    checkoutPayment: "Zahlungsmethode",
    checkoutNameError: "Bitte geben Sie Ihren vollständigen Namen ein",
    checkoutAddressError: "Bitte geben Sie eine gültige Lieferadresse ein",
    checkoutPaymentError: "Bitte wählen Sie eine Zahlungsmethode aus",
    cartEmpty: "Ihr Warenkorb ist leer",
    inStock: "Auf Lager",
    chooseColor: "Farbe wählen",
    chooseSize: "Größe wählen",
    addToCart: "In den Warenkorb",
    viewAll: "Alle anzeigen",
    footer: "© {yr} Shoppie • Alle Rechte vorbehalten.",
    addedToast: "zum Warenkorb hinzugefügt!",
    couponSuccess: "Gutschein angewendet: 10% Rabatt",
    couponInvalid: "Ungültiger Gutschein"
  },
  ru: {
    heroTitle: "Откройте для себя качество. Создано, чтобы впечатлять.",
    heroDesc: "Покупайте тщательно отобранные товары с быстрой доставкой, легким возвратом и премиальной поддержкой.",
    shopNow: "Купить сейчас",
    browse: "Просмотреть категории",
    newsletterTitle: "Подпишитесь на нашу рассылку",
    newsletterDesc: "Эксклюзивные скидки и ранний доступ.",
    join: "Подписаться",
    chat: "Чат в WhatsApp",
    searchPlaceholder: "Поиск товаров…",
    saleLabel: "РАСПРОДАЖА СКОРО ЗАКОНЧИТСЯ!",
    days: "Дни", hours: "Часы", mins: "Минуты", secs: "Секунды",
    categories: { all: "Все", fashion: "Мода", accessories: "Аксессуары", electronics: "Электроника", home: "Дом" },
    sort: { pop: "Сортировка: Популярное", "price-asc": "Сортировка: Цена ↑", "price-desc": "Сортировка: Цена ↓" },
    openCart: "Корзина",
    cartTitle: "🛒 Ваша корзина",
    couponPlaceholder: "Код купона (SAVE10)",
    applyCoupon: "Применить",
    subtotalLabel: "Промежуточный итог",
    checkout: "Перейти к оформлению",
    completePurchase: "Завершить покупку",
    checkoutName: "Полное имя",
    checkoutAddress: "Адрес доставки",
    checkoutPayment: "Способ оплаты",
    checkoutNameError: "Пожалуйста, введите ваше полное имя",
    checkoutAddressError: "Пожалуйста, введите действительный адрес доставки",
    checkoutPaymentError: "Пожалуйста, выберите способ оплаты",
    cartEmpty: "Ваша корзина пуста",
    inStock: "В наличии",
    chooseColor: "Выберите цвет",
    chooseSize: "Выберите размер",
    addToCart: "Добавить в корзину",
    viewAll: "Посмотреть все",
    footer: "© {yr} Shoppie • Все права защищены.",
    addedToast: "добавлено в корзину!",
    couponSuccess: "Купон применен: скидка 10%",
    couponInvalid: "Недействительный купон"
  }
};

/* ------------- HELPERS ------------- */
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const fmt = (n, cur) => {
  try { return new Intl.NumberFormat(undefined, { style: "currency", currency: cur }).format(n); }
  catch (e) { return `${cur} ${n.toFixed(2)}`; }
};
const priceIn = (usd, cur) => usd * (FX[cur] || 1);
const setBodyLock = lock => document.body.style.overflow = lock ? "hidden" : "";
const debounce = (fn, ms) => { let h; return (...a) => { clearTimeout(h); h = setTimeout(() => fn(...a), ms); } };
const showToast = (msg) => {
  const n = document.createElement('div');
  n.textContent = msg;
  Object.assign(n.style, { position:'fixed',bottom:'90px',right:'20px',background:'#0d1526',padding:'10px 14px',borderRadius:'10px',border:'1px solid #24314a',zIndex:120,color:'#eaf2ff' });
  document.body.appendChild(n);
  setTimeout(() => n.remove(), 1500);
};

/* safe i18n getter */
function t(key, fallback = "") {
  const langObj = I18N[state.lang] || I18N.en;
  if (!key) return fallback;
  const parts = key.split('.');
  let cur = langObj;
  for (const p of parts) {
    if (cur && Object.prototype.hasOwnProperty.call(cur, p)) cur = cur[p];
    else { cur = undefined; break; }
  }
  if (cur !== undefined) return cur;
  cur = I18N.en;
  for (const p of parts) {
    if (cur && Object.prototype.hasOwnProperty.call(cur, p)) cur = cur[p];
    else { cur = undefined; break; }
  }
  return cur !== undefined ? cur : fallback;
}

/* ------------- RENDER GRID & MODAL ------------- */
function renderGrid() {
  const q = $("#search").value.trim().toLowerCase();
  const cat = $("#category").value;
  const sort = $("#sort").value;

  let list = PRODUCTS.filter(p => (!q || (p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q))) && (cat === "all" || p.cat.toLowerCase() === cat));

  if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
  else if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
  else list.sort((a, b) => ((b.popular ? 1 : 0) - (a.popular ? 1 : 0)) || (b.rating - a.rating));

  const grid = $("#grid");
  grid.innerHTML = "";
  list.forEach((p, i) => {
    const price = fmt(priceIn(p.price, state.currency), state.currency);
    const card = document.createElement("div");
    card.className = "card";
    card.style.animationDelay = `${i * 0.03}s`;
    card.innerHTML = `
      ${p.popular ? `<span class="badge">${t('sort.pop') || 'Popular'}</span>` : ""}
      <button class="wish ${state.wish.includes(p.id) ? "active" : ""}" title="Toggle wishlist" data-id="${p.id}" aria-label="Toggle wishlist for ${p.title}">❤</button>
      <div class="imgWrap"><img loading="lazy" src="${p.img}" alt="${p.title}" style="width:100%;height:100%;object-fit:cover;"></div>
      <div class="meta">
        <div>
          <div style="font-weight:700">${p.title}</div>
          <div style="color:var(--muted)">${p.cat} • ★ ${p.rating.toFixed(1)}</div>
        </div>
        <div class="price">${price}</div>
      </div>
      <div class="actions">
        <button class="btn small" data-view="${p.id}" aria-label="View details for ${p.title}">${t('viewAll') || 'View'}</button>
        <button class="btn subtle small" data-add="${p.id}" aria-label="Add ${p.title} to cart">${t('addToCart') || 'Add'}</button>
      </div>
      <div class="quick-view" aria-hidden="true">
        <strong>${p.title}</strong>
        <p style="color:var(--muted);font-size:.9rem;margin:8px 0">${p.desc.substring(0, 80)}...</p>
        <button class="btn small" data-view="${p.id}" aria-label="Quick view ${p.title}">${t('viewAll') || 'View'}</button>
      </div>
    `;
    grid.appendChild(card);
  });

  $$("#grid [data-view]").forEach(b => b.addEventListener("click", (ev) => openModal(ev.currentTarget.dataset.view)));
  $$("#grid [data-add]").forEach(b => b.addEventListener("click", (ev) => addToCart(ev.currentTarget.dataset.add)));
  $$("#grid .wish").forEach(w => w.addEventListener("click", (ev) => {
    const id = ev.currentTarget.dataset.id;
    toggleWish(id, ev.currentTarget);
  }));
}

/* wishlist toggle */
function toggleWish(id, el) {
  const i = state.wish.indexOf(id);
  if (i > -1) state.wish.splice(i, 1);
  else state.wish.push(id);
  localStorage.setItem("wish", JSON.stringify(state.wish));
  el.classList.toggle("active");
}

/* modal */
let currentProduct = null, selectedColor = null, selectedSize = null;
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  currentProduct = p;
  selectedColor = p.colors?.[0] || null;
  selectedSize = p.sizes?.[0] || null;

  $("#modalTitle").textContent = p.title;
  $("#modalSku").textContent = p.sku;
  $("#modalPrice").textContent = fmt(priceIn(p.price, state.currency), state.currency);
  $("#modalDesc").textContent = p.desc;
  $("#modalImg").src = p.img;
  $("#modalRating").textContent = "★".repeat(Math.round(p.rating)) + "☆".repeat(5 - Math.round(p.rating));

  const colorWrap = $("#colorWrap");
  colorWrap.innerHTML = "";
  p.colors?.forEach(c => {
    const ch = document.createElement("button");
    ch.className = `chip ${c === selectedColor ? "active" : ""}`;
    ch.textContent = c;
    ch.setAttribute("aria-label", `Select color ${c}`);
    ch.addEventListener("click", () => {
      selectedColor = c;
      $$("#colorWrap .chip").forEach(x => x.classList.remove("active"));
      ch.classList.add("active");
    });
    colorWrap.appendChild(ch);
  });

  const sizeWrap = $("#sizeWrap");
  sizeWrap.innerHTML = "";
  p.sizes?.forEach(s => {
    const ch = document.createElement("button");
    ch.className = `chip ${s === selectedSize ? "active" : ""}`;
    ch.textContent = s;
    ch.setAttribute("aria-label", `Select size ${s}`);
    ch.addEventListener("click", () => {
      selectedSize = s;
      $$("#sizeWrap .chip").forEach(x => x.classList.remove("active"));
      ch.classList.add("active");
    });
    sizeWrap.appendChild(ch);
  });

  $("#addToCart").onclick = () => addToCart(p.id, { color: selectedColor, size: selectedSize });
  $("#viewAll").onclick = () => {
    closeModal();
    $("#category").value = p.cat.toLowerCase();
    renderGrid();
  };

  $("#overlay").classList.add("show");
  $("#modal").classList.add("show");
  setBodyLock(true);
}
function closeModal() {
  $("#overlay").classList.remove("show");
  $("#modal").classList.remove("show");
  setBodyLock(false);
}

/* ------------- CART ------------- */
function addToCart(id, opts = {}) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const key = id + "|" + (opts.color || "-") + "|" + (opts.size || "-");
  const existing = state.cart.find(x => x.key === key);
  if (existing) existing.qty++;
  else state.cart.push({ key, id, qty: 1, opts });
  localStorage.setItem("cart", JSON.stringify(state.cart));
  animateCartFeedback(p.title);
  renderCart();
}

function animateCartFeedback(title) {
  const cartCount = $("#cartCount");
  const stickyCartCount = $("#stickyCartCount");
  cartCount.classList.add("bounce");
  stickyCartCount.classList.add("bounce");
  setTimeout(() => {
    cartCount.classList.remove("bounce");
    stickyCartCount.classList.remove("bounce");
  }, 500);
  showToast(`${title} ${t('addedToast')}`);
}

function renderCart() {
  const list = $("#cartList");
  list.innerHTML = "";
  let subtotal = 0;
  state.cart.forEach(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    const price = priceIn(p.price, state.currency);
    const line = price * item.qty;
    subtotal += line;
    const div = document.createElement("div");
    div.className = "cartItem";
    div.innerHTML = `
      <img src="${p.img}" alt="${p.title}" style="width:64px;height:64px;object-fit:cover;border-radius:10px;border:1px solid #1e2a44">
      <div>
        <strong>${p.title}</strong>
        <div style="color:var(--muted);font-size:.9rem">${item.opts.color || ""} ${item.opts.size || ""}</div>
        <div style="color:var(--muted)">${fmt(price, state.currency)} × ${item.qty}</div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:end;gap:6px">
        <div class="qty">
          <button data-dec="${item.key}" aria-label="Decrease quantity">-</button>
          <span>${item.qty}</span>
          <button data-inc="${item.key}" aria-label="Increase quantity">+</button>
        </div>
        <button class="iconbtn" data-del="${item.key}" title="Remove item" aria-label="Remove ${p.title} from cart">🗑</button>
      </div>
    `;
    list.appendChild(div);
  });

  if (state.coupon === "SAVE10") subtotal *= 0.9;
  $("#subtotal").textContent = fmt(subtotal, state.currency);
  const count = state.cart.reduce((a, c) => a + c.qty, 0);
  $("#cartCount").textContent = count;
  $("#stickyCartCount").textContent = count;
  $$("#cartList [data-inc]").forEach(b => b.addEventListener("click", (ev) => updateQty(ev.currentTarget.dataset.inc, 1)));
  $$("#cartList [data-dec]").forEach(b => b.addEventListener("click", (ev) => updateQty(ev.currentTarget.dataset.dec, -1)));
  $$("#cartList [data-del]").forEach(b => b.addEventListener("click", (ev) => removeItem(ev.currentTarget.dataset.del)));

  $("#checkoutForm").style.display = count > 0 ? "none" : "none";
  $("#checkout").style.display = count > 0 ? "block" : "none";
  if (count === 0) {
    list.innerHTML = `<div style="text-align:center;color:var(--muted);padding:20px">${t('cartEmpty')}</div>`;
  }
}

function updateQty(key, delta) {
  const item = state.cart.find(x => x.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty < 1) state.cart = state.cart.filter(x => x.key !== key);
  localStorage.setItem("cart", JSON.stringify(state.cart));
  renderCart();
}

function removeItem(key) {
  state.cart = state.cart.filter(x => x.key !== key);
  localStorage.setItem("cart", JSON.stringify(state.cart));
  renderCart();
}

/* coupon */
function applyCoupon() {
  const v = $("#coupon").value.trim().toUpperCase();
  if (v === "SAVE10") {
    state.coupon = v;
    showToast(t('couponSuccess'));
  } else {
    state.coupon = null;
    showToast(t('couponInvalid'));
  }
  renderCart();
}

/* close cart */
function closeCart() {
  $("#drawer").classList.remove("open");
  $("#cartList").style.display = "block";
  $("#coupon").parentElement.style.display = "flex";
  $("#subtotal").parentElement.style.display = "flex";
  $("#checkout").style.display = state.cart.length > 0 ? "block" : "none";
  $("#checkoutForm").style.display = "none";
  setBodyLock(false);
}

/* checkout */
function initCheckout() {
  $("#checkout").addEventListener("click", () => {
    if (state.cart.length === 0) {
      showToast(t('cartEmpty'));
      return;
    }
    $("#cartList").style.display = "none";
    $("#coupon").parentElement.style.display = "none";
    $("#subtotal").parentElement.style.display = "none";
    $("#checkout").style.display = "none";
    $("#checkoutForm").style.display = "block";
    setBodyLock(true);
  });

  $("#submitCheckout").addEventListener("click", () => {
    const name = $("#checkoutName").value.trim();
    const address = $("#checkoutAddress").value.trim();
    const payment = $("#checkoutPayment").value;

    $("#checkoutNameError").textContent = "";
    $("#checkoutAddressError").textContent = "";
    $("#checkoutPaymentError").textContent = "";

    let valid = true;
    if (!name) {
      $("#checkoutNameError").textContent = t('checkoutNameError');
      valid = false;
    }
    if (!address) {
      $("#checkoutAddressError").textContent = t('checkoutAddressError');
      valid = false;
    }
    if (!payment) {
      $("#checkoutPaymentError").textContent = t('checkoutPaymentError');
      valid = false;
    }

    if (valid) {
      showToast(t('completePurchase') + " processing...");
      setTimeout(() => {
        state.cart = [];
        localStorage.setItem("cart", JSON.stringify(state.cart));
        renderCart();
        $("#cartList").style.display = "block";
        $("#coupon").parentElement.style.display = "flex";
        $("#subtotal").parentElement.style.display = "flex";
        $("#checkout").style.display = "block";
        $("#checkoutForm").style.display = "none";
        $("#checkoutName").value = "";
        $("#checkoutAddress").value = "";
        $("#checkoutPayment").value = "";
        setBodyLock(false);
        showToast("Purchase completed successfully!");
      }, 1000);
    }
  });
}

/* ------------- I18N APPLY ------------- */
function applyI18n() {
  $("#heroTitle").textContent = t('heroTitle');
  $("#heroDesc").textContent = t('heroDesc');
  $("#shopNow").textContent = t('shopNow');
  $("#browse").textContent = t('browse');
  $("#newsletterTitle").textContent = t('newsletterTitle');
  $("#newsletterDesc").textContent = t('newsletterDesc');
  $("#join").textContent = t('join');
  $("#chatLink").textContent = t('chat');
  $("#search").placeholder = t('searchPlaceholder');
  $("#coupon").placeholder = t('couponPlaceholder');
  $("#email").placeholder = t('lang') === 'zh' ? "ni@example.com" : "you@example.com";
  $("#saleLabel").textContent = t('saleLabel');
  $("#lblDays").textContent = t('days');
  $("#lblHours").textContent = t('hours');
  $("#lblMins").textContent = t('mins');
  $("#lblSecs").textContent = t('secs');
  $("#inStock").textContent = t('inStock');
  $("#labelColor").textContent = t('chooseColor');
  $("#labelSize").textContent = t('chooseSize');
  $("#addToCartLabel").textContent = t('addToCart');
  $("#viewAll").textContent = t('viewAll');
  $("#openCartLabel").textContent = t('openCart');
  $("#cartTitle").textContent = t('cartTitle');
  $("#applyCoupon").textContent = t('applyCoupon');
  $("#subtotalLabel").textContent = t('subtotalLabel');
  $("#checkout").textContent = t('checkout');
  $("#stickyCartLabel").textContent = "🛒 " + t('openCart');
  $("#checkoutName").previousElementSibling.textContent = t('checkoutName');
  $("#checkoutAddress").previousElementSibling.textContent = t('checkoutAddress');
  $("#checkoutPayment").previousElementSibling.textContent = t('checkoutPayment');
  $("#submitCheckout").textContent = t('completePurchase');
  $("#footerText").textContent = (t('footer') || "© {yr} Shoppie • All rights reserved.").replace("{yr}", new Date().getFullYear());

  const sort = $("#sort");
  sort.innerHTML = "";
  const sopts = [
    {v:"pop", t:t('sort.pop') || 'Sort: Popular'},
    {v:"price-asc", t:t('sort.price-asc') || 'Sort: Price ↑'},
    {v:"price-desc", t:t('sort.price-desc') || 'Sort: Price ↓'}
  ];
  sopts.forEach(o => {
    const opt = document.createElement("option");
    opt.value = o.v;
    opt.textContent = o.t;
    sort.appendChild(opt);
  });

  const catSel = $("#category");
  catSel.innerHTML = "";
  CATEGORIES.forEach(c => {
    const key = c.toLowerCase();
    const o = document.createElement("option");
    o.value = key;
    o.textContent = t(`categories.${key}`) || c;
    catSel.appendChild(o);
  });

  const cats = $("#cats");
  cats.innerHTML = "";
  CATEGORIES.slice(1).forEach(c => {
    const el = document.createElement("div");
    el.className = "cat";
    el.innerHTML = `<span class="cat-icon">🔍</span><strong>${t(`categories.${c.toLowerCase()}`) || c}</strong>`;
    el.addEventListener("click", () => {
      catSel.value = c.toLowerCase();
      renderGrid();
      window.scrollTo({ top: document.getElementById("grid").offsetTop - 60, behavior: "smooth" });
    });
    cats.appendChild(el);
  });

  renderGrid();
  renderCart();
}

/* ------------- INIT ------------- */
function init() {
  $("#yr").textContent = new Date().getFullYear();
  const catSel = $("#category");
  CATEGORIES.forEach(c => {
    const o = document.createElement("option");
    o.value = c.toLowerCase();
    o.textContent = c;
    catSel.appendChild(o);
  });

  $("#search").addEventListener("input", debounce(renderGrid, 120));
  $("#category").addEventListener("change", renderGrid);
  $("#sort").addEventListener("change", renderGrid);
  $("#currency").addEventListener("change", e => {
    state.currency = e.target.value;
    renderGrid();
    renderCart();
  });

  $("#lang").addEventListener("change", e => {
    state.lang = e.target.value;
    applyI18n();
    try { localStorage.setItem("lang", state.lang); } catch(e){}
  });

  try {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      state.lang = savedLang;
      $("#lang").value = savedLang;
    }
  } catch(e){}

  $("#openCart").addEventListener("click", () => {
    $("#drawer").classList.add("open");
    setBodyLock(true);
  });
  $("#closeCart").addEventListener("click", closeCart);
  $("#applyCoupon").addEventListener("click", applyCoupon);
  $("#shopNow").addEventListener("click", () => $("#grid").scrollIntoView({ behavior: "smooth" }));
  $("#browse").addEventListener("click", () => $("#cats").scrollIntoView({ behavior: "smooth" }));
  $("#overlay").addEventListener("click", closeModal);
  $("#modalClose").addEventListener("click", closeModal);
  $("#stickyCart").addEventListener("click", () => {
    $("#drawer").classList.add("open");
    setBodyLock(true);
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") { closeModal(); closeCart(); } });

  const deadline = Date.now() + 72 * 3600 * 1000;
  setInterval(() => {
    const t = Math.max(0, deadline - Date.now());
    const d = Math.floor(t / 86400000), h = Math.floor((t % 86400000) / 3600000), m = Math.floor((t % 3600000) / 60000), s = Math.floor((t % 60000) / 1000);
    $("#d").textContent = String(d).padStart(2, "0");
    $("#h").textContent = String(h).padStart(2, "0");
    $("#m").textContent = String(m).padStart(2, "0");
    $("#s").textContent = String(s).padStart(2, "0");
  }, 1000);

  // initial render & apply i18n
  renderGrid();
  renderCart();
  applyI18n();
}

document.addEventListener("DOMContentLoaded", init);