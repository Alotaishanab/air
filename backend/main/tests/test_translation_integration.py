from django.test import TestCase
from django.urls import reverse
from unittest.mock import patch
from sentiment.views import translate_to_english  # Adjust the import path according to your project structure

class TestTranslationIntegration(TestCase):

    def setUp(self):
        # Django's TestCase class provides a built-in client that simulates a user interacting with the code
        super().setUp()

    @patch('sentiment.views.translate_to_english')  # Adjust the import path according to your project structure
    def test_translation_called(self, mock_translate_to_english):
        # Configure the mock to return a specific translation
        mock_translate_to_english.return_value = 'This is a test sentence in English.'

        # Send a non-English sentence to the predict endpoint
        response = self.client.post(reverse('predict'), {'sentence': 'Esto es una prueba de oración en Español.'}, content_type='application/json')

        # Verify that the translation function was called
        mock_translate_to_english.assert_called_once_with('Esto es una prueba de oración en Español.')

        # Verify response status code
        self.assertEqual(response.status_code, 200)

    @patch('your_app_name.views.translate_to_english')  # Adjust the import path according to your project structure
    def test_prepare_inputs_after_translation(self, mock_translate_to_english):
        mock_translate_to_english.return_value = 'This is a test sentence in English.'
        sentence = 'هذه تجربه في اللغة العربية'

        # Make a request to the endpoint that triggers the translation
        self.client.post(reverse('predict'), {'sentence': sentence}, content_type='application/json')

        # Now check if the mock was called as expected
        mock_translate_to_english.assert_called_once_with(sentence)
