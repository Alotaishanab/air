import cProfile
import pstats
import unittest

def profile_predict_endpoint():
    with cProfile.Profile() as pr:
        # Simulate a call to the predict endpoint
        with app.test_client() as client:
            response = client.post('/predict', json={'sentence': 'I love sunny days!'})
            assert response.status_code == 200

    stats = pstats.Stats(pr)
    stats.sort_stats(pstats.SortKey.TIME)
    stats.print_stats()

if __name__ == "__main__":
    profile_predict_endpoint()
    unittest.main()
