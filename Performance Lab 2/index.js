/**
 * PERFORMANCE LAB - index.js
 */

// ÜBERSETZUNGEN (Alle Sprachen, alle 3 Wörter im Kicker)
const translations = {
  de: {
    navServices: "Leistungen", navProcess: "Ablauf", navContact: "Kontakt",
    ctaTop: "Termin anfragen", ctaBack: "Zurück zur Startseite",
    kicker: "Präzision · Dokumentation · Kontrolle",
    heroTitle: "Mechanik. Auf höchstem Niveau.", heroSub: "Ruhige Abläufe, klare Entscheidungen und saubere Arbeit – vom ersten Kontakt bis zur Übergabe.",
    ctaWhatsApp: "WhatsApp Termin", ctaServices: "Leistungen ansehen",
    servicesTitle: "Leistungen", servicesSub: "Ausgewählte Services – sauber umgesetzt, klar dokumentiert.",
    sv1Chip: "Klima", sv1Title: "Klimaservice", sv1Sub: "Dichtheitsprüfung, Befüllung & Desinfektion für reine Luft.",
    sv2Chip: "OEM", sv2Title: "Diagnose", sv2Sub: "Systematisch, nachvollziehbar – ohne Rätselraten.",
    sv3Chip: "Care", sv3Title: "Service & Wartung", sv3Sub: "Werterhalt durch saubere, regelmäßige Pflege.",
    sv4Chip: "Logistik", sv4Title: "Hol & Bring Service", sv4Sub: "Bequemer Transport Ihres Fahrzeugs – sicher und verlässlich.",
    sv5Chip: "Legal", sv5Title: "§57a Überprüfung", sv5Sub: "Gesetzliche Begutachtung für Ihre Sicherheit und Zulassung.",
    sv6Chip: "Check", sv6Title: "Winter / Sommercheck", sv6Sub: "Bestens gerüstet für jede Jahreszeit und jede Witterung.",
    processTitle: "Ablauf", p1Title: "Anfrage", p1Sub: "Klärung der Details & Terminfindung.",
    p2Title: "Kosteneinschätzung", p2Sub: "Transparenter Überblick ohne Überraschungen.",
    p3Title: "Ausführung", p3Sub: "Saubere Arbeit mit Dokumentation.",
    p4Title: "Übergabe", p4Sub: "Finalcheck & Besprechung des Ergebnisses.",
    contactTitle: "Kontakt",
    contactNote: "WhatsApp bringt meist die schnellste Antwort.",
    directTitle: "Direkt", directLocLabel: "Standort:", directLocVal: "Münchendorf (AT)",
    directHoursLabel: "Zeiten:", directHoursVal: "Nur nach Termin",
    mapsBtn: "Route öffnen", footerImprint: "Impressum", footerPrivacy: "Datenschutz",
    waLink: "https://wa.me/436605621033?text=Hi%2C%20Ich%20br%C3%A4uchte%20einen%20Termin!%20Fahrzeug%3A%20(VIN)___%2C%20Kurze%20Problembeschreibung%3A%20___",
    
    imprintTitle: "Impressum", imprintIntro: "Informationspflicht laut §5 E-Commerce Gesetz.",
    imprintOwner: "Betreiber", imprintLegal: "Rechtliches", imprintJob: "Gegenstand:", imprintJobVal: "Kraftfahrzeugtechnik",
    imprintChamber: "Mitglied bei:", imprintAuth: "Aufsicht:", imprintLaw: "Recht:",
    imprintDisputeTitle: "Streitschlichtung", imprintDisputeText: "EU-Plattform zur Online-Streitbeilegung.",
    imprintLiabilityTitle: "Haftung", imprintLiabilityText: "Keine Gewähr für Richtigkeit.",
    imprintDisclaimer: "Rechtlich bindend ist die deutsche Fassung.",
    
    privacyTitle: "Datenschutzerklärung", privacyIntro: "Wir schützen Ihre Daten gemäß DSGVO.",
    privacyRespTitle: "Verantwortlicher", privacyRespText: "Verantwortlich für die Datenverarbeitung:",
    privacyHostTitle: "Hosting", privacyHostText: "Serverlogs zur Sicherheit.",
    privacyContactTitle: "Kontakt", privacyContactText: "Datenverarbeitung zur Anfragebearbeitung.",
    privacyWATitle: "WhatsApp", privacyWAText: "Datenübertragung an Meta.",
    privacyRightsTitle: "Rechte", privacyRightsText: "Recht auf Auskunft und Löschung."
  },
  en: {
    navServices: "Services", navProcess: "Process", navContact: "Contact",
    ctaTop: "Book Now", ctaBack: "Back to Home",
    kicker: "Precision · Documentation · Control",
    heroTitle: "Mechanics. At the highest level.", heroSub: "Smooth processes, clear decisions and clean work.",
    ctaWhatsApp: "WhatsApp Booking", ctaServices: "View Services",
    servicesTitle: "Services", servicesSub: "Selected services – cleanly implemented.",
    sv1Chip: "A/C", sv1Title: "A/C Service", sv1Sub: "Leak testing, refilling & disinfection.",
    sv2Chip: "OEM", sv2Title: "Diagnosis", sv2Sub: "Systematic and traceable.",
    sv3Chip: "Care", sv3Title: "Service & Maintenance", sv3Sub: "Value retention through care.",
    sv4Chip: "Logistics", sv4Title: "Pickup & Delivery", sv4Sub: "Convenient transport for your vehicle.",
    sv5Chip: "Legal", sv5Title: "Technical Inspection", sv5Sub: "Statutory inspection for safety.",
    sv6Chip: "Check", sv6Title: "Seasonal Check", sv6Sub: "Prepared for winter or summer.",
    processTitle: "Process", p1Title: "Inquiry", p1Sub: "Clarification of details.",
    p2Title: "Cost Estimation", p2Sub: "Transparent overview.",
    p3Title: "Execution", p3Sub: "Clean work with documentation.",
    p4Title: "Handover", p4Sub: "Final check & discussion.",
    contactTitle: "Contact",
    contactNote: "WhatsApp is fastest.",
    directTitle: "Direct", directLocLabel: "Location:", directLocVal: "Münchendorf (AT)",
    directHoursLabel: "Hours:", directHoursVal: "By appointment only",
    mapsBtn: "Open Route", footerImprint: "Imprint", footerPrivacy: "Privacy",
    waLink: "https://wa.me/436605621033?text=Hi%2C%20I%20need%20an%20appointment!%20Vehicle%3A%20(VIN)___%2C%20Short%20problem%20description%3A%20___",
    
    imprintTitle: "Legal Notice", imprintIntro: "Information obligation according to Austrian Law.",
    imprintOwner: "Operator", imprintLegal: "Legal Info", imprintJob: "Purpose:", imprintJobVal: "Automotive Engineering",
    imprintChamber: "Member of:", imprintAuth: "Authority:", imprintLaw: "Laws:",
    imprintDisputeTitle: "Dispute Resolution", imprintDisputeText: "EU online dispute platform.",
    imprintLiabilityTitle: "Liability", imprintLiabilityText: "No liability assumed.",
    imprintDisclaimer: "German version is binding.",
    
    privacyTitle: "Privacy Policy", privacyIntro: "Data processed according to GDPR.",
    privacyRespTitle: "Responsible", privacyRespText: "Responsible for data:",
    privacyHostTitle: "Hosting", privacyHostText: "Server logs for security.",
    privacyContactTitle: "Contact", privacyContactText: "Data stored for requests.",
    privacyWATitle: "WhatsApp", privacyWAText: "Data transfer to Meta.",
    privacyRightsTitle: "Rights", privacyRightsText: "Right to access and deletion."
  },
  pl: {
    navServices: "Usługi", navProcess: "Proces", navContact: "Kontakt",
    ctaTop: "Zapytaj o termin", ctaBack: "Powrót do strony głównej",
    kicker: "Precyzja · Dokumentacja · Kontrola",
    heroTitle: "Mechanika. Na najwyższym poziomie.", heroSub: "Sprawne procesy i czysta praca.",
    ctaWhatsApp: "Termin WhatsApp", ctaServices: "Zobacz usługi",
    servicesTitle: "Usługi", servicesSub: "Rzetelnie wykonane.",
    sv1Chip: "Klima", sv1Title: "Serwis Klimatyzacji", sv1Sub: "Test szczelności, napełnianie.",
    sv2Chip: "OEM", sv2Title: "Diagnostyka", sv2Sub: "Systematycznie, bez zgadywania.",
    sv3Chip: "Opieka", sv3Title: "Serwis i konserwacja", sv3Sub: "Utrzymanie wartości.",
    sv4Chip: "Logistyka", sv4Title: "Usługa Door-to-Door", sv4Sub: "Wygodny transport.",
    sv5Chip: "Legal", sv5Title: "Przegląd rejestracyjny", sv5Sub: "Ustawowe badanie techniczne.",
    sv6Chip: "Check", sv6Title: "Przegląd sezonowy", sv6Sub: "Przygotowanie na zimę/lato.",
    processTitle: "Proces", p1Title: "Zapytanie", p1Sub: "Ustalenie szczegółów.",
    p2Title: "Szacunek kosztów", p2Sub: "Przejrzysty przegląd.",
    p3Title: "Realizacja", p3Sub: "Czysta praca z dokumentacją.",
    p4Title: "Wydanie", p4Sub: "Kontrola końcowa.",
    contactTitle: "Kontakt",
    contactNote: "WhatsApp najszybszy.",
    directTitle: "Bezpośrednio", directLocLabel: "Lokalizacja:", directLocVal: "Münchendorf (AT)",
    directHoursLabel: "Godziny:", directHoursVal: "Tylko po umówieniu",
    mapsBtn: "Otwórz trasę", footerImprint: "Nota prawna", footerPrivacy: "Prywatność",
    waLink: "https://wa.me/436605621033?text=Cze%C5%9B%C4%87%2C%20potrzebuj%C4%99%20terminu!%20Pojazd%3A%20(VIN)___%2C%20Kr%C3%B3tki%20opis%20problemu%3A%20___",
    
    imprintTitle: "Nota Prawna", imprintIntro: "Info prawne wg prawa austriackiego.",
    imprintOwner: "Operator", imprintLegal: "Info prawne", imprintJob: "Działalność:", imprintJobVal: "Technika samochodowa",
    imprintChamber: "Członkostwo:", imprintAuth: "Nadzór:", imprintLaw: "Prawo:",
    imprintDisputeTitle: "Spory UE", imprintDisputeText: "Platforma UE.",
    imprintLiabilityTitle: "Odpowiedzialność", imprintLiabilityText: "Brak gwarancji poprawności.",
    imprintDisclaimer: "Wersja niemiecka wiążąca.",
    
    privacyTitle: "Prywatność", privacyIntro: "Dane wg RODO.",
    privacyRespTitle: "Administrator", privacyRespText: "Odpowiedzialny:",
    privacyHostTitle: "Hosting", privacyHostText: "Logi serwera.",
    privacyContactTitle: "Kontakt", privacyContactText: "Dane do obsługi zapytania.",
    privacyWATitle: "WhatsApp", privacyWAText: "Dane do Meta.",
    privacyRightsTitle: "Prawa", privacyRightsText: "Prawo do wglądu/usunięcia."
  },
  ua: {
    navServices: "Послуги", navProcess: "Процес", navContact: "Контакти",
    ctaTop: "Записатися", ctaBack: "Назад на головну",
    kicker: "Точність · Документація · Контроль",
    heroTitle: "Механіка. На найвищому рівні.", heroSub: "Чіткі процеси та чиста робота.",
    ctaWhatsApp: "Запис WhatsApp", ctaServices: "Послуги",
    servicesTitle: "Послуги", servicesSub: "Чисто виконані.",
    sv1Chip: "Клімат", sv1Title: "Кондиціонер", sv1Sub: "Перевірка, заправка.",
    sv2Chip: "OEM", sv2Title: "Діагностика", sv2Sub: "Систематично.",
    sv3Chip: "Догляд", sv3Title: "Сервіс та ТО", sv3Sub: "Збереження вартості.",
    sv4Chip: "Логістика", sv4Title: "Доставка", sv4Sub: "Транспортування авто.",
    sv5Chip: "Огляд", sv5Title: "Техогляд §57a", sv5Sub: "Законодавчий огляд.",
    sv6Chip: "Сезон", sv6Title: "Сезонний огляд", sv6Sub: "Зима / Літо.",
    processTitle: "Процес", p1Title: "Запит", p1Sub: "Уточнення деталей.",
    p2Title: "Оцінка", p2Sub: "Прозорий огляд.",
    p3Title: "Виконання", p3Sub: "Робота з документацією.",
    p4Title: "Передача", p4Sub: "Фінальний контроль.",
    contactTitle: "Контакти",
    contactNote: "WhatsApp найшвидший.",
    directTitle: "Прямо", directLocLabel: "Локація:", directLocVal: "Мюнхендорф (AT)",
    directHoursLabel: "Час:", directHoursVal: "За записом",
    mapsBtn: "Маршрут", footerImprint: "Імпресум", footerPrivacy: "Конфіденційність",
    waLink: "https://wa.me/436605621033?text=UA___",
    
    imprintTitle: "Імпресум", imprintIntro: "Інфо (Австрія).",
    imprintOwner: "Оператор", imprintLegal: "Юридичне", imprintJob: "Діяльність:", imprintJobVal: "Автосервіс",
    imprintChamber: "Членство:", imprintAuth: "Нагляд:", imprintLaw: "Закон:",
    imprintDisputeTitle: "Спори", imprintDisputeText: "Платформа ЄС.",
    imprintLiabilityTitle: "Відповідальність", imprintLiabilityText: "Без гарантій.",
    imprintDisclaimer: "Німецька версія головна.",
    
    privacyTitle: "Конфіденційність", privacyIntro: "Згідно закону.",
    privacyRespTitle: "Відповідальний", privacyRespText: "За дані:",
    privacyHostTitle: "Хостинг", privacyHostText: "Логи безпеки.",
    privacyContactTitle: "Контакти", privacyContactText: "Обробка запиту.",
    privacyWATitle: "WhatsApp", privacyWAText: "Дані Meta.",
    privacyRightsTitle: "Права", privacyRightsText: "Доступ та видалення."
  },
  tr: {
    navServices: "Hizmetler", navProcess: "Süreç", navContact: "İletişim",
    ctaTop: "Randevu", ctaBack: "Ana sayfaya dön",
    kicker: "Hassasiyet · Dokümantasyon · Kontrol",
    heroTitle: "Mekanik. En üst seviyede.", heroSub: "Net kararlar, temiz işçilik.",
    ctaWhatsApp: "WhatsApp", ctaServices: "Hizmetler",
    servicesTitle: "Hizmetler", servicesSub: "Seçkin hizmetler.",
    sv1Chip: "Klima", sv1Title: "Klima Servisi", sv1Sub: "Test, dolum.",
    sv2Chip: "OEM", sv2Title: "Arıza Tespit", sv2Sub: "Sistematik.",
    sv3Chip: "Bakım", sv3Title: "Servis", sv3Sub: "Değer koruma.",
    sv4Chip: "Lojistik", sv4Title: "Transfer", sv4Sub: "Güvenli transfer.",
    sv5Chip: "Yasal", sv5Title: "§57a Muayene", sv5Sub: "Yasal muayene.",
    sv6Chip: "Kontrol", sv6Title: "Sezon Kontrolü", sv6Sub: "Yaz / Kış.",
    processTitle: "Süreç", p1Title: "Talep", p1Sub: "Detaylar.",
    p2Title: "Maliyet", p2Sub: "Şeffaf bakış.",
    p3Title: "Uygulama", p3Sub: "Temiz işçilik.",
    p4Title: "Teslimat", p4Sub: "Son kontrol.",
    contactTitle: "İletişim",
    contactNote: "Hızlı yanıt.",
    directTitle: "Direkt", directLocLabel: "Konum:", directLocVal: "Münchendorf (AT)",
    directHoursLabel: "Saatler:", directHoursVal: "Randevu ile",
    mapsBtn: "Rota", footerImprint: "Künye", footerPrivacy: "Gizlilik",
    waLink: "https://wa.me/436605621033?text=TR___",
    
    imprintTitle: "Künye", imprintIntro: "Yasal bilgi.",
    imprintOwner: "Sahibi", imprintLegal: "Yasal", imprintJob: "Faaliyet:", imprintJobVal: "Otomotiv",
    imprintChamber: "Üyelik:", imprintAuth: "Denetim:", imprintLaw: "Yasa:",
    imprintDisputeTitle: "Uyuşmazlık", imprintDisputeText: "AB platformu.",
    imprintLiabilityTitle: "Sorumluluk", imprintLiabilityText: "Garanti yok.",
    imprintDisclaimer: "Almanca esastır.",
    
    privacyTitle: "Gizlilik", privacyIntro: "Yasalara uygun.",
    privacyRespTitle: "Sorumlu", privacyRespText: "Veri sorumlusu:",
    privacyHostTitle: "Hosting", privacyHostText: "IP kaydı.",
    privacyContactTitle: "İletişim", privacyContactText: "Talep işleme.",
    privacyWATitle: "WhatsApp", privacyWAText: "Meta verisi.",
    privacyRightsTitle: "Haklar", privacyRightsText: "Silme hakkı."
  },
  hr: {
    navServices: "Usluge", navProcess: "Proces", navContact: "Kontakt",
    ctaTop: "Termin", ctaBack: "Natrag na početnu",
    kicker: "Preciznost · Dokumentacija · Kontrola",
    heroTitle: "Mehanika. Na nivou.", heroSub: "Jasne odluke, čist rad.",
    ctaWhatsApp: "WhatsApp", ctaServices: "Usluge",
    servicesTitle: "Usluge", servicesSub: "Čisto izvedene.",
    sv1Chip: "Klima", sv1Title: "Klima Servis", sv1Sub: "Test, punjenje.",
    sv2Chip: "OEM", sv2Title: "Dijagnostika", sv2Sub: "Sustavno.",
    sv3Chip: "Njega", sv3Title: "Servis", sv3Sub: "Očuvanje vrijednosti.",
    sv4Chip: "Logistika", sv4Title: "Prijevoz", sv4Sub: "Siguran transport.",
    sv5Chip: "Legal", sv5Title: "§57a Pregled", sv5Sub: "Zakonski pregled.",
    sv6Chip: "Check", sv6Title: "Sezonski", sv6Sub: "Zima / Ljeto.",
    processTitle: "Proces", p1Title: "Upit", p1Sub: "Detalji.",
    p2Title: "Troškovi", p2Sub: "Bez iznenađenja.",
    p3Title: "Izvedba", p3Sub: "Dokumentacija.",
    p4Title: "Predaja", p4Sub: "Provjera.",
    contactTitle: "Kontakt",
    contactNote: "Najbrži način.",
    directTitle: "Direktno", directLocLabel: "Lokacija:", directLocVal: "Münchendorf (AT)",
    directHoursLabel: "Vrijeme:", directHoursVal: "Po dogovoru",
    mapsBtn: "Ruta", footerImprint: "Impresum", footerPrivacy: "Privatnost",
    waLink: "https://wa.me/436605621033?text=HR___",
    
    imprintTitle: "Impresum", imprintIntro: "Zakonske info.",
    imprintOwner: "Vlasnik", imprintLegal: "Pravno", imprintJob: "Djelatnost:", imprintJobVal: "Auto tehnika",
    imprintChamber: "Članstvo:", imprintAuth: "Nadzor:", imprintLaw: "Zakon:",
    imprintDisputeTitle: "Sporovi", imprintDisputeText: "EU platforma.",
    imprintLiabilityTitle: "Odgovornost", imprintLiabilityText: "Bez jamstva.",
    imprintDisclaimer: "Njemačka verzija bitna.",
    
    privacyTitle: "Privatnost", privacyIntro: "Po zakonu.",
    privacyRespTitle: "Odgovoran", privacyRespText: "Za podatke:",
    privacyHostTitle: "Hosting", privacyHostText: "IP logovi.",
    privacyContactTitle: "Kontakt", privacyContactText: "Obrada upita.",
    privacyWATitle: "WhatsApp", privacyWAText: "Meta podaci.",
    privacyRightsTitle: "Prava", privacyRightsText: "Brisanje."
  },
  cs: {
    navServices: "Služby", navProcess: "Proces", navContact: "Kontakt",
    ctaTop: "Termín", ctaBack: "Zpět na úvod",
    kicker: "Přesnost · Dokumentace · Kontrola",
    heroTitle: "Mechanika. Na úrovni.", heroSub: "Jasná rozhodnutí, čistá práce.",
    ctaWhatsApp: "WhatsApp", ctaServices: "Služby",
    servicesTitle: "Služby", servicesSub: "Čistě provedené.",
    sv1Chip: "Klima", sv1Title: "Klimatizace", sv1Sub: "Zkouška, plnění.",
    sv2Chip: "OEM", sv2Title: "Diagnostika", sv2Sub: "Systematicky.",
    sv3Chip: "Péče", sv3Title: "Servis", sv3Sub: "Udržení hodnoty.",
    sv4Chip: "Logistika", sv4Title: "Odtah", sv4Sub: "Přeprava vozu.",
    sv5Chip: "Legal", sv5Title: "STK (§57a)", sv5Sub: "Zákonná prohlídka.",
    sv6Chip: "Check", sv6Title: "Sezónní", sv6Sub: "Zima / Léto.",
    processTitle: "Proces", p1Title: "Poptávka", p1Sub: "Detaily.",
    p2Title: "Odhad", p2Sub: "Bez překvapení.",
    p3Title: "Realizace", p3Sub: "Dokumentace.",
    p4Title: "Předání", p4Sub: "Kontrola.",
    contactTitle: "Kontakt",
    contactNote: "Nejrychlejší.",
    directTitle: "Přímo", directLocLabel: "Lokalita:", directLocVal: "Münchendorf (AT)",
    directHoursLabel: "Čas:", directHoursVal: "Na objednání",
    mapsBtn: "Trasa", footerImprint: "Impresum", footerPrivacy: "Data",
    waLink: "https://wa.me/436605621033?text=CS___",
    
    imprintTitle: "Impresum", imprintIntro: "Zákonné info.",
    imprintOwner: "Provozovatel", imprintLegal: "Právní", imprintJob: "Činnost:", imprintJobVal: "Auto technika",
    imprintChamber: "Členství:", imprintAuth: "Dohled:", imprintLaw: "Zákon:",
    imprintDisputeTitle: "Spory", imprintDisputeText: "EU platforma.",
    imprintLiabilityTitle: "Ručení", imprintLiabilityText: "Bez záruky.",
    imprintDisclaimer: "Němčina rozhoduje.",
    
    privacyTitle: "Ochrana dat", privacyIntro: "Dle zákona.",
    privacyRespTitle: "Odpovědný", privacyRespText: "Za data:",
    privacyHostTitle: "Hosting", privacyHostText: "IP logy.",
    privacyContactTitle: "Kontakt", privacyContactText: "Zpracování dotazu.",
    privacyWATitle: "WhatsApp", privacyWAText: "Meta data.",
    privacyRightsTitle: "Práva", privacyRightsText: "Výmaz."
  },
  hu: {
    navServices: "Szolgáltatások", navProcess: "Folyamat", navContact: "Kapcsolat",
    ctaTop: "Időpont", ctaBack: "Vissza a főoldalra",
    kicker: "Pontosság · Dokumentáció · Kontroll",
    heroTitle: "Mechanika. Szint.", heroSub: "Tiszta munka.",
    ctaWhatsApp: "WhatsApp", ctaServices: "Szolgáltatások",
    servicesTitle: "Szolgáltatások", servicesSub: "Tisztán kivitelezve.",
    sv1Chip: "Klíma", sv1Title: "Klímaszerviz", sv1Sub: "Töltés, teszt.",
    sv2Chip: "OEM", sv2Title: "Diagnosztika", sv2Sub: "Szisztematikus.",
    sv3Chip: "Gondozás", sv3Title: "Szerviz", sv3Sub: "Értékmegőrzés.",
    sv4Chip: "Logisztika", sv4Title: "Szállítás", sv4Sub: "Kényelmes.",
    sv5Chip: "Legal", sv5Title: "Műszaki (§57a)", sv5Sub: "Törvényes.",
    sv6Chip: "Check", sv6Title: "Szezonális", sv6Sub: "Tél / Nyár.",
    processTitle: "Folyamat", p1Title: "Megkeresés", p1Sub: "Részletek.",
    p2Title: "Költség", p2Sub: "Átlátható.",
    p3Title: "Kivitelezés", p3Sub: "Dokumentáció.",
    p4Title: "Átadás", p4Sub: "Ellenőrzés.",
    contactTitle: "Kapcsolat",
    contactNote: "Leggyorsabb.",
    directTitle: "Közvetlen", directLocLabel: "Helyszín:", directLocVal: "Münchendorf (AT)",
    directHoursLabel: "Idő:", directHoursVal: "Időpontra",
    mapsBtn: "Útvonal", footerImprint: "Impresszum", footerPrivacy: "Adat",
    waLink: "https://wa.me/436605621033?text=HU___",
    
    imprintTitle: "Impresszum", imprintIntro: "Jogi infó.",
    imprintOwner: "Üzemeltető", imprintLegal: "Jogi", imprintJob: "Tevékenység:", imprintJobVal: "Jármű",
    imprintChamber: "Tagság:", imprintAuth: "Felügyelet:", imprintLaw: "Jog:",
    imprintDisputeTitle: "Vita", imprintDisputeText: "EU platform.",
    imprintLiabilityTitle: "Felelősség", imprintLiabilityText: "Nincs garancia.",
    imprintDisclaimer: "Német mérvadó.",
    
    privacyTitle: "Adatvédelem", privacyIntro: "Törvényes.",
    privacyRespTitle: "Felelős", privacyRespText: "Adatkezelő:",
    privacyHostTitle: "Tárhely", privacyHostText: "IP log.",
    privacyContactTitle: "Kapcsolat", privacyContactText: "Feldolgozás.",
    privacyWATitle: "WhatsApp", privacyWAText: "Meta adat.",
    privacyRightsTitle: "Jogok", privacyRightsText: "Törlés."
  }
};

document.addEventListener('DOMContentLoaded', () => {
  
  const langBtn = document.getElementById('langBtn');
  const langMenuContainer = document.querySelector('.lang');
  const langItems = document.querySelectorAll('.lang-item');
  const langLabel = document.getElementById('langBtnLabel');
  
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  // HAUPTFUNKTION: Sprache setzen
  function setLanguage(lang) {
    if (langLabel) langLabel.textContent = lang.toUpperCase();

    if (translations[lang]) {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
          if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = translations[lang][key];
          } else {
            el.textContent = translations[lang][key];
          }
        }
      });
      
      // WhatsApp Links update
      const waHero = document.getElementById('waBtnHero');
      const waContact = document.getElementById('waBtnContact');
      const waFloat = document.getElementById('waFloatBtn');
      
      if (waHero) waHero.href = translations[lang].waLink;
      if (waContact) waContact.href = translations[lang].waLink;
      if (waFloat) waFloat.href = translations[lang].waLink;

      localStorage.setItem('performanceLabLang', lang);
    }
  }

  if (langBtn && langMenuContainer) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langMenuContainer.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (!langMenuContainer.contains(e.target)) {
        langMenuContainer.classList.remove('open');
      }
    });
  }

  langItems.forEach(item => {
    item.addEventListener('click', () => {
      const selectedLang = item.getAttribute('data-lang');
      setLanguage(selectedLang);
      if (langMenuContainer) langMenuContainer.classList.remove('open');
    });
  });

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
    });
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
      });
    });
  }

  const y = document.getElementById('y');
  if(y) y.textContent = new Date().getFullYear();

  const savedLang = localStorage.getItem('performanceLabLang');
  if (savedLang) {
    setLanguage(savedLang);
  } else {
    setLanguage('de');
  }

  // ANIMATIONEN (WICHTIG: Hier ist der Code, der die Kästen einblendet!)
  const animatedElements = document.querySelectorAll(
    '.service-card, .process-step, .section-header, .hero-content, .contact-card, .info-card'
  );

  animatedElements.forEach(el => {
    el.classList.add('animate-on-scroll');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  animatedElements.forEach(el => {
    observer.observe(el);
  });
});