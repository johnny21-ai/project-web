const houses = [

{
    id: 1,
    name: "سكن النخيل",
    governorate: "minya",
    university: "جامعة المنيا",
    type: "male",
    price: 1200,
    status: "available",
    image: "../image/D Image 2026-06-27 at 4.19.14 PM.jpeg",
    description: "غرفة مزدوجة مكيفة، شاملة الإنترنت والكهرباء، تبعد 5 دقائق عن الحرم الجامعي."
},

{
    id: 2,
    name: "سكن الياسمين",
    governorate: "minya",
    university: "جامعة المنيا",
    type: "female",
    price: 1500,
    status: "available",
    image: "../image/S Image 2026-06-27 at 4.19.15 PM.jpeg",
    description: "غرفة مفردة مستقلة، إطلالة مميزة، صالة ألعاب رياضية مشتركة، وخدمة أمن 24 ساعة."
},

{
    id: 3,
    name: "جناح الأمل الطلابي",
    governorate: "assiut",
    university: "جامعة أسيوط",
    type: "male",
    price: 950,
    status: "warning",
    image: "../image/triple Image 2026-06-27 at 4.18.58 PM.jpeg",
    description: "غرفة مشتركة لـ3 طلاب، بيئة دراسية هادئة، قريبة من الجامعة."
},

{
    id: 4,
    name: "سكن الريان",
    governorate: "minya",
    university: "جامعة المنيا",
    type: "male",
    price: 900,
    status: "available",
    image: "../image/D Image 2026-06-27 at 4.19.15 PM (1).jpeg",
    description: "غرفة مشتركة لطالبين، قريبة من الحرم الجامعي."
},

{
    id: 5,
    name: "سكن الأندلس",
    governorate: "beni-suef",
    university: "جامعة بني سويف",
    type: "female",
    price: 600,
    status: "warning",
    image: "../image/S Image 2026-06-27 at 4.19.16 PM (1).jpeg",
    description: "غرفة سنجل، بيئة دراسية هادئة، قريبة من محطة دماريس."
},

{
    id: 6,
    name: "سكن الفردوس",
    governorate: "assiut",
    university: "جامعة أسيوط",
    type: "male",
    price: 500,
    status: "warning",
    image: "../image/triple Image 2026-06-27 at 4.18.59 PM.jpeg",
    description: "غرفة مشتركة لـ3 طلاب، مناسبة للطلاب محدودي الميزانية."
},

{
    id: 7,
    name: "سكن الروضة",
    governorate: "beni-suef",
    university: "جامعة بني سويف",
    type: "male",
    price: 1600,
    status: "available",
    image: "../image/D Image 2026-06-27 at 4.19.15 PM (2).jpeg",
    description: "غرفة مشتركة لطالبين، قريبة من الجامعة."
},

{
    id: 8,
    name: "سكن السلام",
    governorate: "assiut",
    university: "جامعة أسيوط",
    type: "male",
    price: 1000,
    status: "available",
    image: "../image/triple Image 2026-06-27 at 4.19.07 PM.jpeg",
    description: "غرفة مشتركة لـ3 طلاب، قريبة من وسائل المواصلات."
},

{
    id: 9,
    name: "سكن الأمل",
    governorate: "cairo",
    university: "جامعة القاهرة",
    type: "female",
    price: 2000,
    status: "available",
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=600",
    description: "غرفة مفردة، بيئة هادئة وآمنة للدراسة."
},

{
    id: 10,
    name: "سكن النور",
    governorate: "assiut",
    university: "جامعة أسيوط",
    type: "male",
    price: 950,
    status: "available",
    image: "../image/triple Image 2026-06-27 at 4.19.08 PM (1).jpeg",
    description: "غرفة مشتركة لـ3 طلاب، قريبة من الجامعة."
},
{
    id: 11,
    name: "سكن الواحة",
    governorate: "cairo",
    university: "جامعة القاهرة",
    type: "female",
    price: 2500,
    status: "warning",
    image: "../image/S Image 2026-06-27 at 4.19.18 PM (1).jpeg",
    description: "غرفة مفردة، قريبة من جامعة القاهرة، مناسبة للدراسة."
},

{
    id: 12,
    name: "سكن الصفوة",
    governorate: "minya",
    university: "جامعة المنيا",
    type: "male",
    price: 1100,
    status: "available",
    image: "../image/D Image 2026-06-27 at 4.19.16 PM.jpeg",
    description: "غرفة مشتركة لطالبين، قريبة من محطة دماريس."
},

{
    id: 13,
    name: "سكن المستقبل",
    governorate: "minya",
    university: "جامعة المنيا",
    type: "male",
    price: 700,
    status: "available",
    image: "../image/triple Image 2026-06-27 at 4.19.11 PM.jpeg",
    description: "غرفة مشتركة لـ3 طلاب في المنيا الجديدة."
},

{
    id: 14,
    name: "سكن الزهور",
    governorate: "beni-suef",
    university: "جامعة بني سويف",
    type: "female",
    price: 1300,
    status: "available",
    image: "../image/D Image 2026-06-27 at 4.19.16 PM (3).jpeg",
    description: "غرفة مشتركة لطالبين، قريبة من الجامعة."
},

{
    id: 15,
    name: "سكن الإخلاص",
    governorate: "alexandria",
    university: "جامعة الإسكندرية",
    type: "female",
    price: 1900,
    status: "warning",
    image: "../image/S Image 2026-06-27 at 4.19.18 PM (2).jpeg",
    description: "غرفة مفردة، مكان هادئ وآمن."
},

{
    id: 16,
    name: "سكن اللوتس",
    governorate: "alexandria",
    university: "جامعة الإسكندرية",
    type: "male",
    price: 950,
    status: "available",
    image: "../image/triple Image 2026-06-27 at 4.19.11 PM.jpeg",
    description: "غرفة مشتركة لـ3 طلاب، قريبة من الجامعة."
},

{
    id: 17,
    name: "جولدن هاوس",
    governorate: "cairo",
    university: "جامعة القاهرة",
    type: "male",
    price: 1400,
    status: "available",
    image: "../image/D Image 2026-06-27 at 4.19.17 PM (1).jpeg",
    description: "غرفة مشتركة لطالبين، خدمات متكاملة."
},

{
    id: 18,
    name: "سكن إيليت",
    governorate: "cairo",
    university: "جامعة القاهرة",
    type: "female",
    price: 2100,
    status: "warning",
    image: "../image/S Image 2026-06-27 at 4.19.18 PM (3).jpeg",
    description: "غرفة مفردة، قريبة من الجامعة."
},

{
    id: 19,
    name: "سكن بارك فيو",
    governorate: "alexandria",
    university: "جامعة الإسكندرية",
    type: "male",
    price: 800,
    status: "available",
    image: "../image/triple Image 2026-06-27 at 4.19.12 PM (1).jpeg",
    description: "غرفة مشتركة لـ3 طلاب، مناسبة للطلاب."
},

{
    id: 20,
    name: "سكن سيتي هاوس",
    governorate: "cairo",
    university: "جامعة القاهرة",
    type: "female",
    price: 2200,
    status: "available",
    image: "../image/S Image 2026-06-27 at 4.19.17 PM (2).jpeg",
    description: "غرفة مفردة، قريبة من وسائل المواصلات."
},
{
    id: 21,
    name: "سكن جرين هاوس",
    governorate: "beni-suef",
    university: "جامعة بني سويف",
    type: "male",
    price: 1250,
    status: "warning",
    image: "../image/D Image 2026-06-27 at 4.19.15 PM (2).jpeg",
    description: "غرفة مشتركة لطالبين، قريبة من جامعة بني سويف."
},

{
    id: 22,
    name: "سكن بالم ريزيدنس",
    governorate: "alexandria",
    university: "جامعة الإسكندرية",
    type: "female",
    price: 1050,
    status: "available",
    image: "../image/D Image 2026-06-27 at 4.19.17 PM (1).jpeg",
    description: "غرفة مشتركة لطالبين، مكان هادئ وآمن."
},

{
    id: 23,
    name: "سكن الرحاب",
    governorate: "assiut",
    university: "جامعة أسيوط",
    type: "male",
    price: 950,
    status: "warning",
    image: "../image/triple Image 2026-06-27 at 4.19.14 PM (1).jpeg",
    description: "غرفة مشتركة لـ3 طلاب، قريبة من المواصلات."
},

{
    id: 24,
    name: "سكن الرواد",
    governorate: "minya",
    university: "جامعة المنيا",
    type: "female",
    price: 2300,
    status: "available",
    image: "../image/S Image 2026-06-27 at 4.19.18 PM (2).jpeg",
    description: "غرفة مفردة، تبعد دقائق عن جامعة المنيا."
},

{
    id: 25,
    name: "سكن النخبة",
    governorate: "minya",
    university: "جامعة المنيا",
    type: "male",
    price: 1200,
    status: "available",
    image: "../image/D Image 2026-06-27 at 4.19.16 PM (3).jpeg",
    description: "غرفة مشتركة لطالبين، خدمات متكاملة."
}

];