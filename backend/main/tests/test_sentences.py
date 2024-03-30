from django.test import TestCase
# Adjust the import paths to where your `prepare_inputs` function and `tokenizer` are located in your Django app
from sentiment.analysis import prepare_inputs, tokenizer

class TestSentenceLengths(TestCase):
    def test_short_sentence(self):
        # Testing a short sentence
        short_sentence = "Hi."
        inputs = prepare_inputs(short_sentence)
        self.assertEqual(inputs['input_ids'].shape[1], 63, "Input IDs for a short sentence should be padded to 63")

    def test_long_sentence(self):
        # Testing a sentence longer than the max_length
        long_sentence = "word " * 200  # Creates a sentence longer than typical max_length
        inputs = prepare_inputs(long_sentence)
        self.assertEqual(inputs['input_ids'].shape[1], 63, "Input IDs for a long sentence should be truncated to 63")

    def test_special_characters_sentence(self):
        # Testing a sentence composed of special characters
        special_chars_sentence = "!@#$%^&*()_+-=[]{}|;:,.<>?"
        inputs = prepare_inputs(special_chars_sentence)
        self.assertEqual(inputs['input_ids'].shape[1], 63, "Input IDs for a sentence with special characters should be padded to 63")

    def test_attention_mask_shape(self):
        # Optionally, test the attention mask for a typical sentence
        sentence = "This is a test sentence."
        inputs = prepare_inputs(sentence)
        self.assertEqual(inputs['attention_mask'].shape[1], 63, "Attention mask should match the padded length of 63")
