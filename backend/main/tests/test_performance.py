import cProfile
import pstats
from django.test import TestCase
from django.urls import reverse

class PredictEndpointProfile(TestCase):
    def test_profile_predict_endpoint(self):
        with cProfile.Profile() as pr:
            # Use Django's test client to simulate a call to the predict endpoint
            response = self.client.post(reverse('predict'), {'sentence': 'I love sunny days!'}, content_type='application/json')
            
            # Django's test client gives a response object where you can check the status code directly
            self.assertEqual(response.status_code, 200)

        stats = pstats.Stats(pr)
        stats.sort_stats(pstats.SortKey.TIME)
        stats.print_stats()

