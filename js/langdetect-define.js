    $(document).ready(function() {
	      $(document).languageDetection({
		        domain        :  'http://localhost:8000/',
		        languages     :  [
			          {
				            code : 'ja',
				            path : 'examples/ja'
			          },
			          {
				            code : 'en',
				            path : 'examples/en-us',
				            defaultLanguage : true
			          },
			          {
				            code : 'fr',
				            path : 'examples/fr'
			          },
			          {
				            code : 'es',
				            path : 'examples/es'
			          }
		        ],
		        expires       :  10	
	      });
    });
