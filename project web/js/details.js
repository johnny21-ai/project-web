const LISTINGS = [
  {
    id: 1,
    title: "سكن النخيل",
    type: "طلاب",
    city: "المنيا",
    district: "مدينة المنيا",
    near: "بعد 5 دقائق عن الحرم الجامعي",
    map: "https://www.google.com/maps?q=Minia%20University&output=embed",
    price: 1200,
    status: "available",
    rooms: 2,
    beds: 4,
    bathrooms: 1,
    area: 90,
    floor: "الأول",
    images: [
      "../image/D Image 2026-06-27 at 4.19.14 PM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM (1).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM (1).jpeg",
    ],
    amenities: ["wifi", "ac", "security", "cleaning"],
    features: [
      "إشراف وأمن على مدار اليوم",
      "إنترنت فائق السرعة",
      "قريب من مواقف المواصلات",
      "غرف مكيفة بالكامل",
    ],
    desc: "غرفة مزدوجة مكيفة، شاملة الإنترنت والكهرباء، تبعد 5 دقائق عن الحرم الجامعي.",
  },
  {
    id: 2,
    title: "سكن الياسمين",
    type: "طلاب",
    city: "بني سويف",
    district: "مدينة بني سويف",
    near: "قريب من الحرم الجامعي",
    map: "https://www.google.com/maps?q=Beni%20Suef%20University&output=embed",
    price: 1500,
    status: "available",
    rooms: 1,
    beds: 1,
    bathrooms: 1,
    area: 70,
    floor: "الثاني",
    images: [
      "../image/S Image 2026-06-27 at 4.19.15 PM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM (1).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM (1).jpeg",
    ],
    amenities: ["wifi", "security", "furnished"],
    features: [
      "صالة ألعاب رياضية مشتركة",
      "خدمة أمن 24 ساعة",
      "إطلالة مميزة",
      "غرفة مفردة مستقلة",
    ],
    desc: "غرفة مفردة مستقلة، إطلالة مميزة، صالة ألعاب رياضية مشتركة، وخدمة أمن 24 ساعة.",
  },
  {
    id: 3,
    title: "جناح الأمل الطلابي",
    type: "طلاب",
    city: "اسيوط",
    district: "",
    near: "بعد 5 دقائق عن جامعة أسيوط",
    map: "https://www.google.com/maps?q=Assiut%20University&output=embed",
    price: 950,
    status: "warning",
    rooms: 1,
    beds: 3,
    bathrooms: 1,
    area: 80,
    floor: "الأرضي",
    images: [
      "../image/triple Image 2026-06-27 at 4.18.58 PM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM (1).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM (1).jpeg",
    ],
    amenities: ["wifi", "cleaning"],
    features: [
      "بيئة دراسية هادئة",
      "قريب من محطة القطار",
      "غرفة مشتركة لـ 3 طلاب",
      "إنترنت متوفر",
    ],
    desc: "غرفة مشتركة لـ 3 طلاب، بيئة دراسية هادئة، قريبة جداً من محطة قطار دماريس.",
  },
  {
    id: 4,
    title: "سكن الريان",
    type: "طلاب",
    city: "المنيا",
    district: "قريب من الحرم الجامعي",
    near: "قريب جداً من الحرم الجامعي",
    map: "https://www.google.com/maps?q=Minia%20University&output=embed",
    price: 900,
    status: "available",
    rooms: 1,
    beds: 2,
    bathrooms: 1,
    area: 75,
    floor: "الأول",
    images: [
      "../image/D Image 2026-06-27 at 4.19.15 PM (1).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM (1).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM (1).jpeg",
    ],
    amenities: ["wifi", "ac"],
    features: [
      "بيئة دراسية هادئة",
      "قريب من الحرم الجامعي",
      "غرفة مشتركة لـ 2 طلاب",
      "تكييف",
    ],
    desc: "غرفة مشتركة لـ 2 طلاب، بيئة دراسية هادئة، قريبة جداً من الحرم الجامعى.",
  },
  {
    id: 5,
    title: "سكن الأندلس",
    type: "طلاب",
    city: "دماريس",
    district: "قريب من محطة قطار دماريس",
    near: "قريب جداً من محطة قطار دماريس",
    price: 600,
    status: "warning",
    rooms: 1,
    beds: 1,
    bathrooms: 1,
    area: 45,
    floor: "الثاني",
    images: [
      "../image/S Image 2026-06-27 at 4.19.16 PM (1).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM (1).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM (1).jpeg",
    ],
    amenities: ["wifi"],
    features: [
      "غرفة سنجل",
      "بيئة دراسية هادئة",
      "قريب من محطة القطار",
      "سعر اقتصادي",
    ],
    desc: "غرفة سنجل، بيئة دراسية هادئة، قريبة جداً من محطة قطار دماريس.",
  },
  {
    id: 6,
    title: "سكن الفردوس",
    type: "طلاب",
    city: "المنيا",
    district: "",
    near: "بعد 5 دقائق عن جامعة أسيوط",
    map: "https://www.google.com/maps?q=Assiut%20University&output=embed",
    price: 500,
    status: "warning",
    rooms: 1,
    beds: 3,
    bathrooms: 1,
    area: 78,
    floor: "الأرضي",
    images: [
      "../image/triple Image 2026-06-27 at 4.18.59 PM.jpeg",
     "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM (1).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM (1).jpeg",
    ],
    amenities: ["wifi", "cleaning"],
    features: [
      "غرفة مشتركة لـ 3 طلاب",
      "بيئة دراسية هادئة",
      "قريب من محطة المترو",
      "سعر اقتصادي",
    ],
    desc: "غرفة مشتركة لـ 3 طلاب، بيئة دراسية هادئة، قريبة جداً من محطة المترو الرئيسية.",
  },
  {
    id: 7,
    title: "سكن الروضة",
    type: "طلاب",
    city: "المنيا",
    district: "قريب من الحرم الجامعي",
    near: "قريب جداً من جامعه بني سويف",
    map: "https://www.google.com/maps?q=Beni%20Suef%20University&output=embed",
    price: 1600,
    status: "available",
    rooms: 1,
    beds: 2,
    bathrooms: 1,
    area: 82,
    floor: "الثالث",
    images: [
      "../image/D Image 2026-06-27 at 4.19.15 PM (2).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM (1).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM (1).jpeg",
    ],
    amenities: ["wifi", "ac", "security"],
    features: [
      "غرفة مشتركة لـ 2 طلاب",
      "بيئة دراسية هادئة",
      "قريب من الحرم الجامعي",
      "تكييف",
    ],
    desc: "غرفة مشتركة لـ 2 طلاب، بيئة دراسية هادئة، قريبة جداً من الحرم الجامعى.",
  },
  {
    id: 8,
    title: "سكن السلام",
    type: "طلاب",
    city: "المنيا",
    district: "",
    near: "بعد 5 دقائق عن جامعة أسيوط",
    map: "https://www.google.com/maps?q=Assiut%20University&output=embed",
    price: 1000,
    status: "available",
    rooms: 1,
    beds: 3,
    bathrooms: 1,
    area: 85,
    floor: "الثاني",
    images: [
      "../image/triple Image 2026-06-27 at 4.19.07 PM.jpeg",
     "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM (1).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM (1).jpeg",
    ],
    amenities: ["wifi", "cleaning"],
    features: [
      "غرفة مشتركة لـ 3 طلاب",
      "بيئة دراسية هادئة",
      "قريب من محطة المترو",
      "نظافة دورية",
    ],
    desc: "غرفة مشتركة لـ 3 طلاب، بيئة دراسية هادئة، قريبة جداً من محطة المترو الرئيسية.",
  },
  {
    id: 9,
    title: "سكن الأمل",
    type: "طلاب",
    city: "القاهرة",
    district: "قريب من الحرم الجامعي",
    near: "قريب جداً من الحرم الجامعي",
    map: "https://www.google.com/maps?q=Cairo%20University&output=embed",
    price: 2000,
    status: "available",
    rooms: 1,
    beds: 1,
    bathrooms: 1,
    area: 60,
    floor: "الأول",
    images: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=600",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM (1).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM (1).jpeg",
    ],
    amenities: ["wifi", "ac", "furnished"],
    features: [
      "غرفة مفردة",
      "بيئة دراسية هادئة",
      "قريب من الحرم الجامعي",
      "مفروشة بالكامل",
    ],
    desc: "غرفة مفردة بيئة دراسية هادئة، قريبة جداً من الحرم الجامعى.",
  },
  {
    id: 10,
    title: "سكن النور",
    type: "طلاب",
    city: "المنيا",
    district: "",
    near: "بعد 5 دقائق عن جامعة أسيوط",
    map: "https://www.google.com/maps?q=Assiut%20University&output=embed",
    price: 950,
    status: "available",
    rooms: 1,
    beds: 3,
    bathrooms: 1,
    area: 80,
    floor: "الأرضي",
    images: [
      "../image/triple Image 2026-06-27 at 4.19.08 PM (1).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM (1).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM (1).jpeg",
    ],
    amenities: ["wifi", "cleaning"],
    features: [
      "غرفة مشتركة لـ 3 طلاب",
      "بيئة دراسية هادئة",
      "قريب من محطة المترو",
      "نظافة دورية",
    ],
    desc: "غرفة مشتركة لـ 3 طلاب، بيئة دراسية هادئة، قريبة جداً من محطة المترو الرئيسية.",
  },
  {
    id: 11,
    title: "سكن الواحة",
    type: "طلاب",
    city: "القاهرة",
    district: "قريب من الحرم الجامعي",
    near: "قريب جداً من الحرم الجامعي",
    map: "https://www.google.com/maps?q=Cairo%20University&output=embed",
    price: 2500,
    status: "warning",
    rooms: 1,
    beds: 1,
    bathrooms: 1,
    area: 65,
    floor: "الرابع",
    images: [
      "../image/S Image 2026-06-27 at 4.19.18 PM (1).jpeg",
     "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM (1).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM (1).jpeg",
    ],
    amenities: ["wifi", "ac", "security", "furnished"],
    features: [
      "غرفة مفردة",
      "بيئة دراسية هادئة",
      "قريب من الحرم الجامعي",
      "تشطيب فاخر",
    ],
    desc: "غرفة مشتركة مفردة بيئة دراسية هادئة، قريبة جداً من الحرم الجامعى.",
  },
  {
    id: 12,
    title: "سكن الصفوة",
    type: "طلاب",
    city: "دماريس",
    district: "قريب من محطة قطار دماريس",
    near: "قريب جداً من محطة قطار دماريس",
    map: "https://www.google.com/maps?q=Minia%20University&output=embed",
    price: 1100,
    status: "available",
    rooms: 1,
    beds: 2,
    bathrooms: 1,
    area: 76,
    floor: "الثاني",
    images: [
      "../image/D Image 2026-06-27 at 4.19.16 PM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM (1).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM (1).jpeg",
    ],
    amenities: ["wifi", "ac"],
    features: [
      "غرفة مشتركة لـ 2 طلاب",
      "بيئة دراسية هادئة",
      "قريب من محطة القطار",
      "تكييف",
    ],
    desc: "غرفة مشتركة لـ 2 طلاب، بيئة دراسية هادئة، قريبة جداً من محطة قطار دماريس.",
  },
  {
    id: 13,
    title: "سكن المستقبل",
    type: "طلاب",
    city: "المنيا الجديدة",
    district: "المنيا الجديدة",
    near: "المنيا الجديدة",
    map: "https://www.google.com/maps?q=Minia%20University&output=embed",
    price: 700,
    status: "available",
    rooms: 1,
    beds: 3,
    bathrooms: 1,
    area: 79,
    floor: "الأول",
    images: [
      "../image/triple Image 2026-06-27 at 4.19.11 PM.jpeg",
     "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM (1).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM (1).jpeg",
    ],
    amenities: ["wifi"],
    features: [
      "غرفة مشتركة لـ 3 طلاب",
      "بيئة دراسية هادئة",
      "المنيا الجديدة",
      "سعر اقتصادي",
    ],
    desc: "غرفة مشتركة لـ 3 طلاب، بيئة دراسية هادئة، المنيا الجديدة.",
  },
  {
    id: 14,
    title: "سكن الزهور",
    type: "طلاب",
    city: "المنيا",
    district: "قريب من محطة المترو الرئيسية",
    near: "قريب جداً من محطة المترو الرئيسية",
    price: 1300,
    status: "available",
    rooms: 1,
    beds: 2,
    bathrooms: 1,
    area: 81,
    floor: "الثالث",
    images: [
      "../image/D Image 2026-06-27 at 4.19.16 PM (3).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM (1).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM (1).jpeg",
    ],
    amenities: ["wifi", "ac", "cleaning"],
    features: [
      "غرفة مشتركة لـ 2 طلاب",
      "بيئة دراسية هادئة",
      "قريب من محطة المترو",
      "نظافة دورية",
    ],
    desc: "غرفة مشتركة لـ 2 طلاب، بيئة دراسية هادئة، قريبة جداً من محطة المترو الرئيسية.",
  },
  {
    id: 15,
    title: "سكن الإخلاص",
    type: "طلاب",
    city: "اسكندريه",
    district: "اسكندريه",
    near: "بعد 5 دقائق عن جامعة أسكندريه",
    map: "https://www.google.com/maps?q=Alexandria%20University&output=embed",
    price: 1900,
    status: "warning",
    rooms: 1,
    beds: 1,
    bathrooms: 1,
    area: 62,
    floor: "الثاني",
    images: [
      "../image/S Image 2026-06-27 at 4.19.18 PM (2).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM (1).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM (1).jpeg",
    ],
    amenities: ["wifi", "ac"],
    features: ["غرفة مفردة", "بيئة دراسية هادئة", "دماريس", "تكييف"],
    desc: "غرفة مفردة بيئة دراسية هادئة، دماريس.",
  },
  {
    id: 16,
    title: "سكن اللوتس",
    type: "طلاب",
    city: "اسكندريه",
    district: "قريب من جامعة الاسكندريه",
    near: "قريب جداً من جامعة الاسكندريه",
    map: "https://www.google.com/maps?q=Alexandria%20University&output=embed",
    price: 950,
    status: "available",
    rooms: 1,
    beds: 3,
    bathrooms: 1,
    area: 80,
    floor: "الأرضي",
    images: [
      "../image/triple Image 2026-06-27 at 4.19.11 PM.jpeg",
    "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM (1).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM (1).jpeg",
    ],
    amenities: ["wifi", "cleaning"],
    features: [
      "غرفة مشتركة لـ 3 طلاب",
      "بيئة دراسية هادئة",
      "قريب من جامعة اللوتس",
      "نظافة دورية",
    ],
    desc: "غرفة مشتركة لـ 3 طلاب، بيئة دراسية هادئة، قريبة جداً من جامعة اللوتس.",
  },
  {
    id: 17,
    title: "سكن جولدن هاوس",
    type: "طلاب",
    city: "القاهرة",
    district: "قريب من محطة المترو الرئيسية",
    near: "قريب جداً من جامعه القاهرة  ",
    map: "https://www.google.com/maps?q=Cairo%20University&output=embed",
    price: 1400,
    status: "available",
    rooms: 1,
    beds: 2,
    bathrooms: 1,
    area: 83,
    floor: "الثاني",
    images: [
      "../image/D Image 2026-06-27 at 4.19.17 PM (1).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM (1).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM (1).jpeg",
    ],
    amenities: ["wifi", "ac", "furnished"],
    features: [
      "غرفة مشتركة لـ 2 طلاب",
      "بيئة دراسية هادئة",
      "قريب من محطة المترو",
      "مفروشة",
    ],
    desc: "غرفة مشتركة لـ 2 طلاب، بيئة دراسية هادئة، قريبة جداً من محطة المترو الرئيسية.",
  },
  {
    id: 18,
    title: "سكن إيليت",
    type: "طلاب",
    city: "القاهرة",
    district: "قريب من جامعة القاهرة",
    near: "قريب جداً من جامعة القاهرة",
    map: "https://www.google.com/maps?q=Cairo%20University&output=embed",
    price: 2100,
    status: "warning",
    rooms: 1,
    beds: 1,
    bathrooms: 1,
    area: 64,
    floor: "الرابع",
    images: [
      "../image/S Image 2026-06-27 at 4.19.18 PM (3).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM (1).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM (1).jpeg",
    ],
    amenities: ["wifi", "ac", "security", "furnished"],
    features: [
      "غرفة مفردة",
      "بيئة دراسية هادئة",
      "قريب من جامعة المنيا",
      "تشطيب فاخر",
    ],
    desc: "غرفة مفردة بيئة دراسية هادئة، قريبة جدا من جامعة المنيا.",
  },
  {
    id: 19,
    title: "سكن بارك فيو",
    type: "طلاب",
    city: "اسكندريه",
    district: "قريب من محطة المترو الرئيسية",
    near: "قريب جداً من جامعه الاسكندلريه  ",
    map: "https://www.google.com/maps?q=Alexandria%20University&output=embed",
    price: 800,
    status: "available",
    rooms: 1,
    beds: 3,
    bathrooms: 1,
    area: 80,
    floor: "الأرضي",
    images: [
      "../image/triple Image 2026-06-27 at 4.19.12 PM (1).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM (1).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM (1).jpeg",
    ],
    amenities: ["wifi", "cleaning"],
    features: [
      "غرفة مشتركة لـ 3 طلاب",
      "بيئة دراسية هادئة",
      "قريب من محطة المترو",
      "نظافة دورية",
    ],
    desc: "غرفة مشتركة لـ 3 طلاب، بيئة دراسية هادئة، قريبة جداً من محطة المترو الرئيسية.",
  },
  {
    id: 20,
    title: "سكن سيتي هاوس",
    type: "طلاب",
    city: "القاهرة",
    district: "قريب من جامعه القاهرة ",
    near: "قريب جداً من جامعه القاهرة ",
    map: "https://www.google.com/maps?q=Cairo%20University&output=embed",
    price: 2200,
    status: "available",
    rooms: 1,
    beds: 1,
    bathrooms: 1,
    area: 66,
    floor: "الثالث",
    images: [
      "../image/S Image 2026-06-27 at 4.19.17 PM (2).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM (1).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM (1).jpeg",
    ],
    amenities: ["wifi", "ac", "security"],
    features: [
      "غرفة مفردة",
      "بيئة دراسية هادئة",
      "قريب من محطة دماريس",
      "تكييف",
    ],
    desc: "غرفة مفردة بيئة دراسية هادئة، قريبة جداً من محطة دماريس.",
  },
  {
    id: 21,
    title: "سكن جرين هاوس",
    type: "طلاب",
    city: "المنيا",
    district: "",
    near: "قريب جداً من جامعة بني سويف",
    map: "https://www.google.com/maps?q=Beni%20Suef%20University&output=embed",
    price: 1250,
    status: "warning",
    rooms: 1,
    beds: 2,
    bathrooms: 1,
    area: 77,
    floor: "الثاني",
    images: [
      "../image/D Image 2026-06-27 at 4.19.15 PM (2).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM (1).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM (1).jpeg",
    ],
    amenities: ["wifi", "ac"],
    features: [
      "غرفة مشتركة لـ 2 طلاب",
      "بيئة دراسية هادئة",
      "قريب من جامعة المنيا",
      "تكييف",
    ],
    desc: "غرفة مشتركة لـ 2 طلاب، بيئة دراسية هادئة، قريب من جامعة المنيا.",
  },
  {
    id: 22,
    title: "سكن بالم ريزيدنس",
    type: "طلاب",
    city: "اسكندريه",
    district: "قريب من محطة المترو الرئيسية",
    near: "قريب جداً من جامعه الاسكندريه  ",
    map: "https://www.google.com/maps?q=Alexandria%20University&output=embed",
    price: 1050,
    status: "available",
    rooms: 1,
    beds: 2,
    bathrooms: 1,
    area: 78,
    floor: "الأول",
    images: [
      "../image/D Image 2026-06-27 at 4.19.17 PM (1).jpeg",
    "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM (1).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM (1).jpeg",
    ],
    amenities: ["wifi", "cleaning"],
    features: [
      "غرفة مشتركة لـ 2 طلاب",
      "بيئة دراسية هادئة",
      "قريب من محطة المترو",
      "نظافة دورية",
    ],
    desc: "غرفة مشتركة لـ 2 طلاب، بيئة دراسية هادئة، قريبة جداً من محطة المترو الرئيسية.",
  },
  {
    id: 23,
    title: "سكن الرحاب",
    type: "طلاب",
    city: "دماريس",
    district: "",
    near: "بعد 5 دقائق عن جامعة أسيوط",
    map: "https://www.google.com/maps?q=Assiut%20University&output=embed",
    price: 950,
    status: "warning",
    rooms: 1,
    beds: 3,
    bathrooms: 1,
    area: 80,
    floor: "الأرضي",
    images: [
      "../image/triple Image 2026-06-27 at 4.19.14 PM (1).jpeg",
     "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM (1).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM (1).jpeg",
    ],
    amenities: ["wifi", "cleaning"],
    features: [
      "غرفة مشتركة لـ 3 طلاب",
      "بيئة دراسية هادئة",
      "قريب من محطة دماريس",
      "نظافة دورية",
    ],
    desc: "غرفة مشتركة لـ 3 طلاب، بيئة دراسية هادئة، قريبة جداً من محطة دماريس.",
  },
  {
    id: 24,
    title: "سكن الرواد",
    type: "طلاب",
    city: "المنيا",
    district: "",
    near: "قريب جداً من جامعة بني سويف",
    map: "https://www.google.com/maps?q=Beni%20Suef%20University&output=embed",
    price: 2300,
    status: "available",
    rooms: 1,
    beds: 1,
    bathrooms: 1,
    area: 68,
    floor: "الرابع",
    images: [
      "../image/S Image 2026-06-27 at 4.19.18 PM (2).jpeg",
     "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM (1).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM (1).jpeg",
    ],
    amenities: ["wifi", "ac", "security", "furnished"],
    features: [
      "غرفة مفردة",
      "بيئة دراسية هادئة",
      "قريب من جامعة دراية",
      "تشطيب فاخر",
    ],
    desc: "غرفة مفردة بيئة دراسية هادئة، قريبة جداً من جامعة دراية.",
  },
  {
    id: 25,
    title: "سكن النخبة",
    type: "طلاب",
    city: "المنيا",
    district: "قريب من محطة المترو الرئيسية",
    near: "قريب جداً من محطة المترو الرئيسية",
    map: "https://www.google.com/maps?q=Minia%20University&output=embed",
    price: 1200,
    status: "available",
    rooms: 1,
    beds: 2,
    bathrooms: 1,
    area: 80,
    floor: "الثاني",
    images: [
      "../image/D Image 2026-06-27 at 4.19.16 PM (3).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.52 AM (1).jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM.jpeg",
      "../image/WhatsApp Image 2026-07-05 at 11.41.51 AM (1).jpeg",
    ],
    amenities: ["wifi", "ac", "cleaning"],
    features: [
      "غرفة مشتركة لـ 2 طلاب",
      "بيئة دراسية هادئة",
      "قريب من محطة المترو",
      "نظافة دورية",
    ],
    desc: "غرفة مشتركة لـ 2 طلاب، بيئة دراسية هادئة، قريبة جداً من محطة المترو الرئيسية.",
  },
];

const AMENITY_INFO = {
  wifi: { label: "واي فاي", icon: "fa-wifi" },
  ac: { label: "تكييف", icon: "fa-wind" },
  security: { label: "أمن وحراسة", icon: "fa-shield-halved" },
  cleaning: { label: "نظافة دورية", icon: "fa-broom" },
  furnished: { label: "مفروشة بالكامل", icon: "fa-couch" },
  kitchen: { label: "مطبخ مشترك", icon: "fa-kitchen-set" },
  laundry: { label: "غسالة ملابس", icon: "fa-shirt" },
};
function money(n) {
  return n.toLocaleString("ar-EG");
}

function initHousingPage() {
  const grid = document.querySelector(".housing-grid");
  if (!grid) return;
  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".housing-card");
    if (!card) return;
    const id = card.dataset.id;
    if (!id) return;
    window.location.href = `details.html?id=${id}`;
  });
}

function initDetailsPage() {
  const mainImg = document.getElementById("mainImage");
  if (!mainImg) return;
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id")) || 1;
  const listing = LISTINGS.find((l) => l.id === id) || LISTINGS[0];
  const mapFrame = document.getElementById("mapFrame");
  if (mapFrame) {
      mapFrame.src = listing.map;
  }
  let currentIdx = 0;

  function setImage(idx) {
    currentIdx = idx;
    mainImg.src = listing.images[idx];
    mainImg.alt = listing.title;
    const counter = document.getElementById("counterText");
    if (counter) counter.textContent = `${idx + 1} / ${listing.images.length}`;
    document.querySelectorAll("#thumbsRow img").forEach((t, i) => {
      t.classList.toggle("active", i === idx);
    });
  }

  const thumbsRow = document.getElementById("thumbsRow");
  if (thumbsRow) {
    thumbsRow.innerHTML = listing.images
      .map(
        (src, idx) => `
      <img src="${src}" data-idx="${idx}" class="${idx === 0 ? "active" : ""}" alt="صورة ${idx + 1}">
    `,
      )
      .join("");
    thumbsRow.addEventListener("click", (e) => {
      const img = e.target.closest("img[data-idx]");
      if (!img) return;
      setImage(Number(img.dataset.idx));
    });
  }
  setImage(0);

  const arrowLeft = document.querySelector(".gallery-arrow.left");
  const arrowRight = document.querySelector(".gallery-arrow.right");
  if (arrowLeft)
    arrowLeft.addEventListener("click", () => {
      setImage(
        (currentIdx - 1 + listing.images.length) % listing.images.length,
      );
    });
  if (arrowRight)
    arrowRight.addEventListener("click", () => {
      setImage((currentIdx + 1) % listing.images.length);
    });

  const currentCrumb = document.querySelector(".breadcrumb .current");
  if (currentCrumb) currentCrumb.textContent = listing.title;

  document.querySelector(".title-row h1").textContent = listing.title;
  const metaLines = document.querySelectorAll(".meta-line");
  if (metaLines[0])
    metaLines[0].innerHTML = `<i class="fa-solid fa-location-dot"></i> ${listing.city} - ${listing.district}`;
  if (metaLines[1])
    metaLines[1].innerHTML = `<i class="fa-solid fa-graduation-cap"></i> ${listing.near}`;

  document.querySelector(".about-text").textContent = listing.desc;

  const featureGrid = document.querySelector(".feature-grid");
  if (featureGrid) {
    featureGrid.innerHTML = listing.features
      .map(
        (f) => `
      <div class="feature-item"><span class="tick"><i class="fa-solid fa-check"></i></span> ${f}</div>
    `,
      )
      .join("");
  }

  const amenitiesGrid = document.querySelector(".amenities-grid");
  if (amenitiesGrid) {
    amenitiesGrid.innerHTML = listing.amenities
      .map((key) => {
        const info = AMENITY_INFO[key];
        if (!info) return "";
        return `
        <div class="amenity"><span class="icon-circle"><i class="fa-solid ${info.icon}"></i></span><span>${info.label}</span></div>
      `;
      })
      .join("");
  }

  const locList = document.querySelectorAll(".loc-list li");
  if (locList[0])
    locList[0].innerHTML = `${listing.city} - ${listing.district} <i class="fa-solid fa-location-dot"></i>`;
  if (locList[1])
    locList[1].innerHTML = `${listing.near} <i class="fa-solid fa-graduation-cap"></i>`;

  document.querySelector(".price-amount").textContent = money(listing.price);
  const statusPill = document.querySelector(".status-pill");
  const isAvailable = listing.status === "available";
  statusPill.innerHTML = `<span class="dot"></span> ${isAvailable ? "متاح الآن" : "مقاعد محدودة"}`;
  statusPill.style.background = isAvailable ? "#e6f7ef" : "#fef3e0";
  statusPill.style.color = isAvailable ? "#1fa971" : "#c8830a";
  statusPill.querySelector(".dot").style.background = isAvailable
    ? "#1fa971"
    : "#c8830a";

  const detailsValues = document.querySelectorAll(
    ".details-card .details-value",
  );
  if (detailsValues[0]) detailsValues[0].textContent = listing.type;
  if (detailsValues[1]) detailsValues[1].textContent = `${listing.rooms} غرف`;
  if (detailsValues[2]) detailsValues[2].textContent = `${listing.beds} أسرة`;
  if (detailsValues[3])
    detailsValues[3].textContent = `${listing.bathrooms} حمام`;
  if (detailsValues[4]) detailsValues[4].textContent = `${listing.area} م²`;
  if (detailsValues[5]) detailsValues[5].textContent = `الدور ${listing.floor}`;

  const deposit = listing.price;
  const commission = Math.round((listing.price * 0.12) / 10) * 10; // عمولة تقريبية 12%
  const total = deposit + commission;

  document.querySelector(".booking-price").textContent =
    `${money(listing.price)} جنيه / شهر`;
  const bookingLines = document.querySelectorAll(".booking-line .val");
  if (bookingLines[0]) bookingLines[0].textContent = `${money(deposit)} جنيه`;
  if (bookingLines[1])
    bookingLines[1].textContent = `${money(commission)} جنيه`;
  document.querySelector(".booking-total .amount").textContent =
    `${money(total)} جنيه`;

  // ==================== Book Now ====================
const bookBtn = document.querySelector(".booking-box .btn-primary");

if (bookBtn) {
  bookBtn.addEventListener("click", () => {

    const reservation = {
      id: Date.now(),
      student: "Current Student",
      room: listing.title,
      price: listing.price,
      checkIn: new Date().toLocaleDateString("en-CA"),
      checkOut: "-",
      amount: listing.price,
      status: "Pending"
    };

    let reservations = JSON.parse(localStorage.getItem("reservations")) || [];

    reservations.push(reservation);

    localStorage.setItem("reservations", JSON.stringify(reservations));

    alert("تم إرسال طلب الحجز بنجاح ✅");

    window.location.href = "reservations.html";
  });
}

// ==================== Calculator ====================
const calcBtn = document.querySelector(".booking-box .btn-secondary");

if (calcBtn) {
  calcBtn.addEventListener("click", () => {
    window.location.href = `calculator.html?id=${listing.id}`;
  });
}
}

document.addEventListener("DOMContentLoaded", () => {
  initHousingPage();
  initDetailsPage();
});