from django.test import TestCase
from django.urls import reverse

class PredictWorkflowTestCase(TestCase):
    def test_predict_workflow(self):
        # Django uses the `reverse` function to find the URL of a view by its name.
        # You need to have a URL pattern named 'predict' pointing to your prediction view in your urls.py
        url = reverse('predict')

        # Sending a POST request to the 'predict' endpoint with a sample sentence
        # Django's test client will manage the JSON conversion for you
        response = self.client.post(url, {'sentence': 'Test sentence'}, content_type='application/json')
        
        # Expecting a 200 status code in response to a valid request
        self.assertEqual(response.status_code, 200)

        # If your response includes some JSON data that you want to check, you can do so like this:
        # self.assertJSONEqual(str(response.content, encoding='utf8'), expected_json)
