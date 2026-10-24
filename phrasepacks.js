// DRAFT wording: native speakers must check every language before the demo.
// Safety lines are illustrative only.
const PACK = {
  "version": "draft-0.1",
  "approved": false,
  "note": "DRAFT wording written by an AI assistant. Have a native speaker check every language before the demo. Safety wording is illustrative only and must be replaced by airline-approved text for any real use.",
  "languages": {
    "en": "English",
    "ja": "日本語",
    "hi": "हिन्दी",
    "pa": "ਪੰਜਾਬੀ",
    "ta": "தமிழ்"
  },
  "speech_tags": {
    "en": "en-IN",
    "ja": "ja-JP",
    "hi": "hi-IN",
    "pa": "pa-IN",
    "ta": "ta-IN"
  },
  "requests": [
    {
      "id": "water",
      "icon": "💧",
      "text": {
        "en": "Water, please",
        "ja": "お水をお願いします",
        "hi": "कृपया पानी दीजिए",
        "pa": "ਕਿਰਪਾ ਕਰਕੇ ਪਾਣੀ ਦਿਓ",
        "ta": "தயவுசெய்து தண்ணீர் தாருங்கள்"
      }
    },
    {
      "id": "tea_coffee",
      "icon": "☕",
      "text": {
        "en": "Tea or coffee, please",
        "ja": "お茶かコーヒーをお願いします",
        "hi": "कृपया चाय या कॉफ़ी दीजिए",
        "pa": "ਕਿਰਪਾ ਕਰਕੇ ਚਾਹ ਜਾਂ ਕੌਫ਼ੀ ਦਿਓ",
        "ta": "தயவுசெய்து தேநீர் அல்லது காபி தாருங்கள்"
      }
    },
    {
      "id": "blanket",
      "icon": "🛏️",
      "text": {
        "en": "A blanket, please",
        "ja": "毛布をお願いします",
        "hi": "कृपया कंबल दीजिए",
        "pa": "ਕਿਰਪਾ ਕਰਕੇ ਕੰਬਲ ਦਿਓ",
        "ta": "தயவுசெய்து போர்வை தாருங்கள்"
      }
    },
    {
      "id": "pillow",
      "icon": "🛋️",
      "text": {
        "en": "A pillow, please",
        "ja": "枕をお願いします",
        "hi": "कृपया तकिया दीजिए",
        "pa": "ਕਿਰਪਾ ਕਰਕੇ ਸਿਰਹਾਣਾ ਦਿਓ",
        "ta": "தயவுசெய்து தலையணை தாருங்கள்"
      }
    },
    {
      "id": "food",
      "icon": "🍽️",
      "text": {
        "en": "I would like something to eat",
        "ja": "食事をお願いします",
        "hi": "मुझे कुछ खाने को चाहिए",
        "pa": "ਮੈਨੂੰ ਕੁਝ ਖਾਣ ਲਈ ਚਾਹੀਦਾ ਹੈ",
        "ta": "எனக்கு சாப்பிட ஏதாவது வேண்டும்"
      }
    },
    {
      "id": "veg_meal",
      "icon": "🥗",
      "text": {
        "en": "A vegetarian meal, please",
        "ja": "ベジタリアン食をお願いします",
        "hi": "कृपया शाकाहारी भोजन दीजिए",
        "pa": "ਕਿਰਪਾ ਕਰਕੇ ਸ਼ਾਕਾਹਾਰੀ ਖਾਣਾ ਦਿਓ",
        "ta": "தயவுசெய்து சைவ உணவு தாருங்கள்"
      }
    },
    {
      "id": "restroom",
      "icon": "🚻",
      "text": {
        "en": "Where is the restroom?",
        "ja": "お手洗いはどこですか",
        "hi": "शौचालय कहाँ है?",
        "pa": "ਪਖਾਨਾ ਕਿੱਥੇ ਹੈ?",
        "ta": "கழிப்பறை எங்கே இருக்கிறது?"
      }
    },
    {
      "id": "help_walking",
      "icon": "🦯",
      "text": {
        "en": "I need help walking",
        "ja": "歩くのを手伝っていただけますか",
        "hi": "मुझे चलने में मदद चाहिए",
        "pa": "ਮੈਨੂੰ ਤੁਰਨ ਵਿੱਚ ਮਦਦ ਚਾਹੀਦੀ ਹੈ",
        "ta": "நடக்க எனக்கு உதவி வேண்டும்"
      }
    },
    {
      "id": "unwell",
      "icon": "🤒",
      "text": {
        "en": "I am not feeling well",
        "ja": "気分が悪いです",
        "hi": "मेरी तबीयत ठीक नहीं है",
        "pa": "ਮੇਰੀ ਤਬੀਅਤ ਠੀਕ ਨਹੀਂ ਹੈ",
        "ta": "எனக்கு உடம்பு சரியில்லை"
      }
    },
    {
      "id": "temperature",
      "icon": "🌡️",
      "text": {
        "en": "I am too hot or too cold",
        "ja": "暑すぎる、または寒すぎます",
        "hi": "मुझे बहुत गर्मी या ठंड लग रही है",
        "pa": "ਮੈਨੂੰ ਬਹੁਤ ਗਰਮੀ ਜਾਂ ਠੰਢ ਲੱਗ ਰਹੀ ਹੈ",
        "ta": "எனக்கு மிகவும் சூடாக அல்லது குளிராக இருக்கிறது"
      }
    },
    {
      "id": "call_crew",
      "icon": "🙋",
      "text": {
        "en": "Please call a crew member",
        "ja": "客室乗務員を呼んでください",
        "hi": "कृपया किसी क्रू सदस्य को बुलाइए",
        "pa": "ਕਿਰਪਾ ਕਰਕੇ ਕਿਸੇ ਕਰੂ ਮੈਂਬਰ ਨੂੰ ਬੁਲਾਓ",
        "ta": "தயவுசெய்து ஒரு பணியாளரை அழைக்கவும்"
      }
    },
    {
      "id": "connection",
      "icon": "🛫",
      "text": {
        "en": "I need help finding my connecting flight",
        "ja": "乗り継ぎ便の場所を教えてください",
        "hi": "मुझे अपनी कनेक्टिंग फ़्लाइट ढूँढ़ने में मदद चाहिए",
        "pa": "ਮੈਨੂੰ ਆਪਣੀ ਅਗਲੀ ਫ਼ਲਾਈਟ ਲੱਭਣ ਵਿੱਚ ਮਦਦ ਚਾਹੀਦੀ ਹੈ",
        "ta": "எனது இணைப்பு விமானத்தைக் கண்டுபிடிக்க உதவி வேண்டும்"
      }
    }
  ],
  "safety": [
    {
      "id": "seatbelt",
      "icon": "🔒",
      "text": {
        "en": "Please fasten your seatbelt",
        "ja": "シートベルトをお締めください",
        "hi": "कृपया अपनी सीट बेल्ट बाँध लीजिए",
        "pa": "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੀ ਸੀਟ ਬੈਲਟ ਬੰਨ੍ਹੋ",
        "ta": "தயவுசெய்து உங்கள் இருக்கைப் பட்டையை அணியுங்கள்"
      }
    },
    {
      "id": "remain_seated",
      "icon": "💺",
      "text": {
        "en": "Please remain seated",
        "ja": "席にお座りください",
        "hi": "कृपया अपनी सीट पर बैठे रहें",
        "pa": "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੀ ਸੀਟ ਉੱਤੇ ਬੈਠੇ ਰਹੋ",
        "ta": "தயவுசெய்து உங்கள் இருக்கையிலேயே இருங்கள்"
      }
    },
    {
      "id": "brace",
      "icon": "⚠️",
      "text": {
        "en": "Take the position shown on your safety card",
        "ja": "安全のしおりに書かれた姿勢をとってください",
        "hi": "कृपया सुरक्षा कार्ड में दिखाई गई मुद्रा अपनाइए",
        "pa": "ਕਿਰਪਾ ਕਰਕੇ ਸੁਰੱਖਿਆ ਕਾਰਡ ਵਿੱਚ ਦਿਖਾਈ ਗਈ ਮੁਦਰਾ ਅਪਣਾਓ",
        "ta": "பாதுகாப்பு அட்டையில் காட்டப்பட்டுள்ள நிலையில் இருங்கள்"
      }
    },
    {
      "id": "oxygen",
      "icon": "😷",
      "text": {
        "en": "If an oxygen mask drops, pull it toward you and put it on",
        "ja": "酸素マスクが下りてきたら、引き寄せて着けてください",
        "hi": "ऑक्सीजन मास्क नीचे आए तो उसे खींचकर पहन लीजिए",
        "pa": "ਆਕਸੀਜਨ ਮਾਸਕ ਹੇਠਾਂ ਆਵੇ ਤਾਂ ਉਸਨੂੰ ਖਿੱਚ ਕੇ ਪਾ ਲਓ",
        "ta": "ஆக்ஸிஜன் முகமூடி கீழே வந்தால், அதை இழுத்து அணியுங்கள்"
      }
    },
    {
      "id": "lifevest",
      "icon": "🦺",
      "text": {
        "en": "Put on your life vest when the crew tells you to",
        "ja": "乗務員の指示があったら、救命胴衣を着けてください",
        "hi": "क्रू के निर्देश पर ही लाइफ़ वेस्ट पहनिए",
        "pa": "ਕਰੂ ਦੇ ਕਹਿਣ ਤੇ ਹੀ ਲਾਈਫ਼ ਵੈਸਟ ਪਾਓ",
        "ta": "பணியாளர் சொன்னால் மட்டுமே உயிர்காப்பு உடையை அணியுங்கள்"
      }
    },
    {
      "id": "follow",
      "icon": "📣",
      "text": {
        "en": "Please follow the crew's instructions",
        "ja": "乗務員の指示に従ってください",
        "hi": "कृपया क्रू के निर्देशों का पालन कीजिए",
        "pa": "ਕਿਰਪਾ ਕਰਕੇ ਕਰੂ ਦੀਆਂ ਹਦਾਇਤਾਂ ਦੀ ਪਾਲਣਾ ਕਰੋ",
        "ta": "தயவுசெய்து பணியாளர்களின் அறிவுறுத்தல்களைப் பின்பற்றுங்கள்"
      }
    }
  ],
  "replies": [
    {
      "id": "on_my_way",
      "icon": "🚶",
      "text": {
        "en": "We are on our way",
        "ja": "すぐに伺います",
        "hi": "हम आ रहे हैं",
        "pa": "ਅਸੀਂ ਆ ਰਹੇ ਹਾਂ",
        "ta": "நாங்கள் வந்துகொண்டிருக்கிறோம்"
      }
    },
    {
      "id": "wait",
      "icon": "⏳",
      "text": {
        "en": "Please wait a moment",
        "ja": "少々お待ちください",
        "hi": "कृपया थोड़ी प्रतीक्षा कीजिए",
        "pa": "ਕਿਰਪਾ ਕਰਕੇ ਥੋੜ੍ਹਾ ਇੰਤਜ਼ਾਰ ਕਰੋ",
        "ta": "தயவுசெய்து சற்று காத்திருங்கள்"
      }
    },
    {
      "id": "alternative",
      "icon": "🔁",
      "text": {
        "en": "This is not available. May we offer something else?",
        "ja": "申し訳ございません、ご用意できません。代わりのものをご案内してもよろしいですか",
        "hi": "यह उपलब्ध नहीं है। क्या हम कोई और विकल्प दे सकते हैं?",
        "pa": "ਇਹ ਉਪਲਬਧ ਨਹੀਂ ਹੈ। ਕੀ ਅਸੀਂ ਕੋਈ ਹੋਰ ਚੀਜ਼ ਦੇ ਸਕਦੇ ਹਾਂ?",
        "ta": "இது கிடைக்கவில்லை. வேறு ஏதாவது தரலாமா?"
      }
    },
    {
      "id": "done",
      "icon": "✅",
      "text": {
        "en": "Done. Is there anything else you need?",
        "ja": "お待たせしました。他にご用はございますか",
        "hi": "हो गया। क्या और कुछ चाहिए?",
        "pa": "ਹੋ ਗਿਆ। ਕੀ ਹੋਰ ਕੁਝ ਚਾਹੀਦਾ ਹੈ?",
        "ta": "முடிந்தது. வேறு ஏதாவது வேண்டுமா?"
      }
    },
    {
      "id": "help_coming",
      "icon": "🚨",
      "text": {
        "en": "Help is coming",
        "ja": "すぐに参ります",
        "hi": "मदद आ रही है",
        "pa": "ਮਦਦ ਆ ਰਹੀ ਹੈ",
        "ta": "உதவி வருகிறது"
      }
    }
  ]
};