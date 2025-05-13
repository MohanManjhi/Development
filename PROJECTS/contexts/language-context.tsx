"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "hi" | "gu" | "ta"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translations for different languages
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.library": "Library",
    "nav.puja_guide": "Puja Guide",
    "nav.bazaar": "Bazaar",
    "nav.my_space": "My Space",
    "nav.community": "Community",
    "nav.calendar": "Calendar",
    "nav.login": "Login",
    "nav.logout": "Logout",
    "nav.profile": "Profile",

    // Home Page
    "home.daily_inspiration": "Daily Inspiration",
    "home.photos": "Photos",
    "home.see_all": "See All",
    "home.community_thoughts": "Community Thoughts",
    "home.videos": "Videos",
    "home.sacred_texts": "Sacred Texts",
    "home.featured_articles": "Featured Articles",
    "home.sacred_mantras": "Sacred Mantras",
    "home.aartis": "Aartis",
    "home.see_more_aartis": "See More Aartis",
    "home.highlighted_article": "Highlighted Article",
    "home.read_more": "Read More",
    "home.upcoming_festivals": "Upcoming Festivals",
    "home.view_all_festivals": "View All Festivals",

    // Profile
    "profile.posts": "Posts",
    "profile.saved": "Saved",
    "profile.about": "About Me",
    "profile.followers": "Followers",
    "profile.following": "Following",
    "profile.edit_profile": "Edit Profile",

    // Common
    "common.view": "View",
    "common.play_audio": "Play Audio",
    "common.hours_ago": "hours ago",
    "common.yesterday": "Yesterday",
    "common.days_left": "days left",
  },
  hi: {
    // Navigation
    "nav.home": "होम",
    "nav.library": "पुस्तकालय",
    "nav.puja_guide": "पूजा गाइड",
    "nav.bazaar": "बाज़ार",
    "nav.my_space": "मेरा स्थान",
    "nav.community": "समुदाय",
    "nav.calendar": "कैलेंडर",
    "nav.login": "लॉगिन",
    "nav.logout": "लॉगआउट",
    "nav.profile": "प्रोफाइल",

    // Home Page
    "home.daily_inspiration": "दैनिक प्रेरणा",
    "home.photos": "तस्वीरें",
    "home.see_all": "सभी देखें",
    "home.community_thoughts": "समुदाय के विचार",
    "home.videos": "वीडियो",
    "home.sacred_texts": "पवित्र ग्रंथ",
    "home.featured_articles": "विशेष लेख",
    "home.sacred_mantras": "पवित्र मंत्र",
    "home.aartis": "आरतियां",
    "home.see_more_aartis": "और आरतियां देखें",
    "home.highlighted_article": "विशेष लेख",
    "home.read_more": "और पढ़ें",
    "home.upcoming_festivals": "आगामी त्योहार",
    "home.view_all_festivals": "सभी त्योहार देखें",

    // Profile
    "profile.posts": "पोस्ट",
    "profile.saved": "सहेजे गए",
    "profile.about": "मेरे बारे में",
    "profile.followers": "फॉलोअर्स",
    "profile.following": "फॉलोइंग",
    "profile.edit_profile": "प्रोफाइल संपादित करें",

    // Common
    "common.view": "देखें",
    "common.play_audio": "ऑडियो चलाएं",
    "common.hours_ago": "घंटे पहले",
    "common.yesterday": "कल",
    "common.days_left": "दिन शेष",
  },
  gu: {
    // Navigation
    "nav.home": "હોમ",
    "nav.library": "લાઇબ્રેરી",
    "nav.puja_guide": "પૂજા ગાઈડ",
    "nav.bazaar": "બજાર",
    "nav.my_space": "મારી જગ્યા",
    "nav.community": "સમુદાય",
    "nav.calendar": "કેલેન્ડર",
    "nav.login": "લોગિન",
    "nav.logout": "લોગઆઉટ",
    "nav.profile": "પ્રોફાઇલ",

    // Home Page
    "home.daily_inspiration": "દૈનિક પ્રેરણા",
    "home.photos": "ફોટા",
    "home.see_all": "બધા જુઓ",
    "home.community_thoughts": "સમુદાયના વિચારો",
    "home.videos": "વિડિઓઝ",
    "home.sacred_texts": "પવિત્ર ગ્રંથો",
    "home.featured_articles": "વિશેષ લેખો",
    "home.sacred_mantras": "પવિત્ર મંત્રો",
    "home.aartis": "આરતીઓ",
    "home.see_more_aartis": "વધુ આરતીઓ જુઓ",
    "home.highlighted_article": "હાઇલાઇટેડ લેખ",
    "home.read_more": "વધુ વાંચો",
    "home.upcoming_festivals": "આગામી તહેવારો",
    "home.view_all_festivals": "બધા તહેવારો જુઓ",

    // Profile
    "profile.posts": "પોસ્ટ્સ",
    "profile.saved": "સેવ કરેલા",
    "profile.about": "મારા વિશે",
    "profile.followers": "ફોલોવર્સ",
    "profile.following": "ફોલોઇંગ",
    "profile.edit_profile": "પ્રોફાઇલ એડિટ કરો",

    // Common
    "common.view": "જુઓ",
    "common.play_audio": "ઓડિયો ચલાવો",
    "common.hours_ago": "કલાક પહેલા",
    "common.yesterday": "ગઈકાલે",
    "common.days_left": "દિવસ બાકી",
  },
  ta: {
    // Navigation
    "nav.home": "முகப்பு",
    "nav.library": "நூலகம்",
    "nav.puja_guide": "பூஜை வழிகாட்டி",
    "nav.bazaar": "சந்தை",
    "nav.my_space": "என் இடம்",
    "nav.community": "சமூகம்",
    "nav.calendar": "நாட்காட்டி",
    "nav.login": "உள்நுழைய",
    "nav.logout": "வெளியேறு",
    "nav.profile": "சுயவிவரம்",

    // Home Page
    "home.daily_inspiration": "தினசரி ஊக்கம்",
    "home.photos": "புகைப்படங்கள்",
    "home.see_all": "அனைத்தையும் காண்க",
    "home.community_thoughts": "சமூக எண்ணங்கள்",
    "home.videos": "வீடியோக்கள்",
    "home.sacred_texts": "புனித நூல்கள்",
    "home.featured_articles": "சிறப்பு கட்டுரைகள்",
    "home.sacred_mantras": "புனித மந்திரங்கள்",
    "home.aartis": "ஆரத்திகள்",
    "home.see_more_aartis": "மேலும் ஆரத்திகள் காண்க",
    "home.highlighted_article": "முக்கிய கட்டுரை",
    "home.read_more": "மேலும் படிக்க",
    "home.upcoming_festivals": "வரவிருக்கும் திருவிழாக்கள்",
    "home.view_all_festivals": "அனைத்து திருவிழாக்களையும் காண்க",

    // Profile
    "profile.posts": "பதிவுகள்",
    "profile.saved": "சேமித்தவை",
    "profile.about": "என்னைப் பற்றி",
    "profile.followers": "பின்தொடர்பவர்கள்",
    "profile.following": "பின்தொடர்கிறேன்",
    "profile.edit_profile": "சுயவிவரத்தை திருத்து",

    // Common
    "common.view": "காண்க",
    "common.play_audio": "ஒலியை இயக்கு",
    "common.hours_ago": "மணி நேரத்திற்கு முன்",
    "common.yesterday": "நேற்று",
    "common.days_left": "நாட்கள் மீதமுள்ளன",
  },
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en")

  // Function to translate text
  const translate = (key: string): string => {
    return translations[language][key] || key
  }

  // Store language preference in localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["en", "hi", "gu", "ta"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage, t: translate }}>{children}</LanguageContext.Provider>
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
