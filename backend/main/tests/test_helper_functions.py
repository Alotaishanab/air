from django.test import TestCase
import numpy as np
from sentiment.views import prepare_inputs, softmax

class TestHelperFunctions(unittest.TestCase):
    def test_softmax(self):
        # Test the softmax function with a known input and output
        input_array = np.array([[1, 2, 3]])
        expected_output = np.array([[0.09003057, 0.24472847, 0.66524096]])
        np.testing.assert_almost_equal(softmax(input_array), expected_output, decimal=7)

    def test_prepare_inputs(self):
        # Test the prepare_inputs function with a sample sentence
        sentence = "hello world"
        inputs = prepare_inputs(sentence)
        self.assertIn('input_ids', inputs)
        self.assertIn('attention_mask', inputs)
        # Assuming max_length=63 as defined in your prepare_inputs function
        self.assertEqual(inputs['input_ids'].shape, (1, 63))
        self.assertEqual(inputs['attention_mask'].shape, (1, 63))

    def test_softmax_sum_to_one(self):
        # Test that the softmax output sums to 1, which is a property of softmax
        input_array = np.random.rand(1, 10)  # Random input array
        output = softmax(input_array)
        for probabilities in output:
            self.assertAlmostEqual(probabilities.sum(), 1.0, places=5)

    def test_prepare_inputs_empty_sentence(self):
        sentence = ""
        inputs = prepare_inputs(sentence)
        cls_token_id = tokenizer.cls_token_id
        sep_token_id = tokenizer.sep_token_id

        # Check the first token is [CLS]
        self.assertEqual(inputs['input_ids'][0, 0], cls_token_id)
        # Check the second token is [SEP], indicating the tokenizer adds [SEP] for empty inputs
        self.assertEqual(inputs['input_ids'][0, 1], sep_token_id)
        # Since the input is empty, we expect [CLS] followed by [SEP], and then padding
        # Check if the rest are padding tokens
        pad_token_id = tokenizer.pad_token_id
        self.assertTrue((inputs['input_ids'][0, 2:] == pad_token_id).all())
        # Check the total length matches max_length
        self.assertEqual(inputs['input_ids'].shape[1], 63)





if __name__ == '__main__':
    unittest.main()
