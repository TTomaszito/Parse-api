module.exports = {
   detect_language: function (req){

    var language = req.acceptsLanguages('fr', 'es', 'en','ru')

    switch (language) {
      case 'en':
        language = "English"

        break;
      case 'fr':
        language = "French"
        break;
      case 'es':
        language = "Spanish"
        break;
      case 'ru':
        language = "Russian"
        break;

      default:
        language= "unknown"

    }
    return language

  }

};
