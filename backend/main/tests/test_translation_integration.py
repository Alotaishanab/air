import unittest
from unittest.mock import patch
from app import app, translate_to_english, prepare_inputs

class TestTranslationIntegration(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    @patch('app.translate_to_english')
    def test_translation_called(self, mock_translate_to_english):
        # Configure the mock to return a specific translation
        mock_translate_to_english.return_value = 'This is a test sentence in English.'

        # Send a non-English sentence to the predict endpoint
        response = self.app.post('/predict', json={'sentence': 'Esto es una prueba de oración en Español.'})

        # Verify that the translation function was called
        mock_translate_to_english.assert_called_once_with('Esto es una prueba de oración en Español.')

        # Verify response status code
        self.assertEqual(response.status_code, 200)

    @patch('app.translate_to_english')
    def test_prepare_inputs_after_translation(self, mock_translate_to_english):
        mock_translate_to_english.return_value = 'This is a test sentence in English.'
        sentence = 'هذه تجربه في اللغة العربية'
        # Make a request to the endpoint that triggers the translation
        self.app.post('/predict', json={'sentence': sentence})
        # Now check if the mock was called as expected
        mock_translate_to_english.assert_called_once_with(sentence)

if __name__ == '__main__':
    unittest.main()
