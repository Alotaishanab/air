import unittest
from unittest.mock import patch
from app import app  # make sure this import correctly points to your Flask app

class TestPredictEndpoint(unittest.TestCase):
    def setUp(self):
        # Set up the test client
        self.app = app.test_client()
        self.app.testing = True

    @patch('app.translate_to_english')
    def test_predict_with_mocked_translation(self, mock_translate):
        # Configure the mock to return a specific translation
        mock_translate.return_value = 'This is a test sentence in English.'

        # Now, self.app is correctly initialized and can be used to make requests
        response = self.app.post('/predict', json={'sentence': 'هذه جملة اختبار بالعربية.'})
        self.assertEqual(response.status_code, 200)
        # Additional assertions can be made here based on your application's response structure

if __name__ == '__main__':
    unittest.main()
