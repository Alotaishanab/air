from django.test import TestCase
from django.urls import reverse

class PredictEndpointTestCase(TestCase):
    def setUp(self):
        # No need to specify 'self.client.testing = True' as Django's test client is always in testing mode
        self.client = self.client

    def test_predict_endpoint_with_empty_sentence(self):
        # In Django, we use 'reverse' to get the URL of the view we want to test
        # 'reverse' takes the name of the view as an argument, so make sure you have a URL name set for your predict view
        response = self.client.post(reverse('predict'), {'sentence': ''}, content_type='application/json')
        
        # Expecting a successful response
        self.assertEqual(response.status_code, 200)
        
        # Parse the response data
        data = response.json()

        # Perform a check to confirm that the response contains a neutral sentiment score
        # This assumes that the response JSON structure contains a score key.
        # You may need to adjust the index or key based on your actual response structure
        self.assertGreater(data['score'], 0.5)  # Assuming 'score' key and a value greater than 0.5 indicates neutrality

