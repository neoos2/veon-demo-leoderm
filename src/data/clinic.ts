// All facts come from veon/client.json (ids in comments). Nothing here is invented.

export const PHONE_TEXT = "+38 (097) 243-01-23"; // company.contacts.phones[0]
export const PHONE_HREF = "tel:+380972430123";
export const EMAIL = "info@leoderm.com.ua"; // company.contacts.emails[0]
export const HOURS = "Пн–Сб 9:00–20:00, неділя вихідний"; // C-102
export const LEGAL = "ТОВ «ЛЕОДЕРМ-УКРАЇНА»"; // C-001
export const EDRPOU = "44547445"; // C-001
export const DOC_UA_URL = "https://doc.ua/ua/klinika/lviv/medichnij-centr-leoderm/review"; // C-004 source

const maps = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export interface Clinic { id: string; short: string; street: string; landmark: string; note?: string; photo: string; alt: string; map: string; }
export const clinics: Clinic[] = [
  {
    id: "sykhiv", short: "Сихів", street: "пр. Червоної Калини, 29А",
    landmark: "Сихівський район, біля ТВК «Шувар»", // company.geography[0]
    photo: "clinic-sykhiv", alt: "Будівля клініки ЛеоДерм на проспекті Червоної Калини, 29А",
    map: maps("Львів, проспект Червоної Калини, 29А"),
  },
  {
    id: "vokzal", short: "Вокзал", street: "вул. Залізнична, 7",
    landmark: "біля Головного залізничного вокзалу", note: "працює з лютого 2022 року", // company.geography[1], C-003
    photo: "clinic-vokzal", alt: "Фасад клініки ЛеоДерм з вивіскою на вулиці Залізничній, 7",
    map: maps("Львів, вулиця Залізнична, 7"),
  },
];

export interface Row { name: string; price: string; }
// products_services[0]
export const mainConsultation: Row = { name: "Консультація дерматолога", price: "1100" };
export const consultations: Row[] = [
  { name: "Повторна консультація", price: "850" },
  { name: "Дитячий дерматолог", price: "1300" },
  { name: "Дерматолог-трихолог", price: "1400" },
  { name: "Провідний дерматолог", price: "1800" },
  { name: "Англомовна консультація", price: "2100" },
];
// products_services[1]
export const diagnostics: Row[] = [
  { name: "Цифрова дерматоскопія, 1–3 новоутвори", price: "1600" },
  { name: "Лазерне видалення родимки, 1 ст.", price: "2300" },
];

export const directions = [
  // company.business_lines
  { name: "Дерматологія", detail: "дитячий дерматолог, дерматоскопія FotoFinder, видалення новоутворень", img: "dir-dermatology", widths: [350, 500], alt: "Знімки родимок у програмі цифрової дерматоскопії FotoFinder" },
  { name: "Трихологія", img: "dir-trichology", widths: [350], alt: "Лікарка-трихологиня оглядає шкіру голови трихоскопом" },
  { name: "Апаратна та лазерна косметологія", img: "dir-apparatus", widths: [350], alt: "Фахівчиня клініки з насадкою апарата для ліфтингу" },
  { name: "Ін'єкційна косметологія", img: "dir-injection", widths: [350], alt: "Ін'єкційна процедура в зоні губ" },
  { name: "Косметологія обличчя і тіла", img: "dir-cosmetology", widths: [350], alt: "Косметологиня наносить маску на обличчя пацієнтки" },
  { name: "Епіляція", img: "dir-epilation", widths: [350, 700], alt: "Апарат для лазерної епіляції з сенсорним екраном" },
  { name: "Гінекологія", img: "dir-gynecology", widths: [350, 700], alt: "Лікарка в гінекологічному кабінеті поруч із кольпоскопом" },
  { name: "Ендокринологія, дієтологія", img: "dir-endocrinology", widths: [210], alt: "Пацієнтка торкається шиї в зоні щитоподібної залози" },
];

export interface Step { zone: string; price: string; }
export interface Scale { name: string; device: string; from: boolean; steps: Step[]; }
// products_services[2..4]
export const scales: Scale[] = [
  { name: "Мікроголковий RF-ліфтинг", device: "Morpheus 8", from: false, steps: [{ zone: "очі", price: "12 500" }, { zone: "обличчя", price: "15 000" }, { zone: "обличчя + шия", price: "20 000" }] },
  { name: "Endolift", device: "Endolift", from: false, steps: [{ zone: "очі", price: "23 000" }, { zone: "обличчя", price: "34 000" }, { zone: "обличчя + ліполіз", price: "45 000" }] },
  { name: "SMAS-ліфтинг", device: "Ulthera / Ultraformer MPT", from: true, steps: [{ zone: "очі", price: "16 000" }, { zone: "обличчя повністю, середній протокол", price: "40 000" }] },
];
// products_services[5]
export const apparatusRows: Row[] = [
  { name: "IPL Lumecca: фотоомолодження, видалення судин обличчя", price: "3700" },
  { name: "Candela Frax, обличчя", price: "9000" },
  { name: "Лазерний холодний пілінг обличчя", price: "3500" },
];
// products_services[6]
export const injectionRows: (Row & { unit?: string })[] = [
  { name: "Ботокс", price: "190", unit: "грн/од." },
  { name: "Rejuran Skin Booster", price: "3700" },
  { name: "Rejuran I", price: "4950" },
  { name: "Plinest One, 4 мл", price: "2900" },
  { name: "Belotero Lips Contour, 0,65 мл", price: "8050" },
];

// products_services[7]; captions only where the price list names a procedure on that device
export const devices: { name: string; caption?: string }[] = [
  { name: "Ulthera", caption: "SMAS-ліфтинг від 16 000 грн" },
  { name: "Ultraformer MPT", caption: "SMAS-ліфтинг від 16 000 грн" },
  { name: "Morpheus 8", caption: "RF-ліфтинг, очі 12 500 грн" },
  { name: "Endolift", caption: "очі 23 000 грн, обличчя 34 000 грн" },
  { name: "Candela Vbeam Perfecta" },
  { name: "Candela Frax Pro", caption: "Candela Frax, обличчя 9000 грн" },
  { name: "Lumecca IPL", caption: "фотоомолодження 3700 грн" },
  { name: "FotoFinder", caption: "дерматоскопія 1600 грн" },
  { name: "Icoone Laser" },
  { name: "Stratosphere" },
  { name: "10THERMA" },
];

export const socials = {
  instagram: { url: "https://www.instagram.com/leoderm/", label: "Instagram", count: "22,4 тис. підписників" },
  tiktok: { url: "https://www.tiktok.com/@leoderm", label: "TikTok", count: "10,3 тис. підписників" },
  youtube: { url: "https://www.youtube.com/@LeodermUaDoc", label: "YouTube", count: "316 відео" },
  facebook: { url: "https://www.facebook.com/people/Leoderm/61555612169871/", label: "Facebook" },
};
