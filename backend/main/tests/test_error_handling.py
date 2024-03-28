import unittest
from app import app  # Import your Flask app

class PredictEndpointTestCase(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    def test_predict_endpoint_with_empty_sentence(self):
        # Send a request with an empty 'sentence' to simulate neutral sentiment
        response = self.app.post('/predict', json={'sentence': ''})
        self.assertEqual(response.status_code, 200)  # Expecting a successful response

        # Parse the response data
        data = response.get_json()

        # Perform a check to confirm that the response contains a neutral sentiment score
        self.assertGreater(data[2], 0.5)  # Assuming a score greater than 0.5 indicates neutrality

if __name__ == '__main__':
    unittest.main()

