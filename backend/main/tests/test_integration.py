import unittest
from app import app 


class FlaskIntegrationTestCase(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    def test_predict_workflow(self):
        # Testing the entire workflow from sending a request to receiving a response
        response = self.app.post('/predict', json={'sentence': 'Test sentence'})
        self.assertEqual(response.status_code, 200)

if __name__ == '__main__':
    unittest.main()