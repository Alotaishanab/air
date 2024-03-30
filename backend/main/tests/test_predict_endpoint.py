import unittest
from unittest.mock import patch
from django.test import TestCase
from django.urls import reverse
from sentiment.views import translate_to_english  # Adjust the import path to where your function is located

class TestPredictEndpoint(TestCase):
    def setUp(self):
        super().setUp()

    @patch('sentiment.views.translate_to_english')  # Adjust the patch location to match the actual location of your function
    def test_predict_with_mocked_translation(self, mock_translate):
        # Configure the mock to return a specific translation
        mock_translate.return_value = 'This is a test sentence in English.'

        # Use Django's test client to make requests to your application
        response = self.client.post(reverse('predict'), {'sentence': 'هذه جملة اختبار بالعربية.'}, content_type='application/json')
        self.assertEqual(response.status_code, 200)
        # Additional assertions can be made here based on your application's response structure
