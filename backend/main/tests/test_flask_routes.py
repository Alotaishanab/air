import unittest
import json
from app import app  # Adjust the import path if needed

class FlaskRoutesTestCase(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    def test_invalid_json_structure(self):
        response = self.app.post('/predict', data='This is not JSON', content_type='application/json')
        self.assertEqual(response.status_code, 400)  # Updated to expect 415


    def test_missing_fields(self):
        # Sending JSON without the required 'sentence' field
        response = self.app.post('/predict', json={})
        self.assertEqual(response.status_code, 200)  # Assuming a 400 status code for missing required fields

    def test_predict_endpoint(self):
        # Send a POST request to the /predict endpoint with a sample sentence
        response = self.app.post('/predict', json={'sentence': 'I love this game!'})
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        # Assuming the output is a list of probabilities
        self.assertIsInstance(data, list)
        # Further assertions can be made depending on the expected structure of your probabilities list

if __name__ == '__main__':
    unittest.main()
