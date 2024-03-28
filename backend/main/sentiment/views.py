from django.shortcuts import render
from django.http import JsonResponse
from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
import onnxruntime as ort
from transformers import BertTokenizer
import numpy as np
from google.cloud import translate_v2 as translate
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Load the ONNX model
SENTIMENT_MODEL_PATH = os.path.join(BASE_DIR, '../../sentiment_model.onnx')
session = ort.InferenceSession(settings.SENTIMENT_MODEL_PATH)

# Initialize the tokenizer from Hugging Face Transformers
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')

translate_client = translate.Client()

def translate_to_english(text):
    if text is None or not isinstance(text, str):
        return ""
    
    # Use the official Google Cloud Translation API
    result = translate_client.translate(text, target_language='en')
    return result['translatedText']

def prepare_inputs(sentence, max_length=63):
    # Tokenize and ensure input is padded/truncated to 'max_length'
    inputs = tokenizer(sentence, return_tensors="np", padding='max_length', truncation=True, max_length=max_length)
    return inputs

def softmax(x):
    """Compute softmax values for each set of scores in x."""
    e_x = np.exp(x - np.max(x))
    return e_x / e_x.sum(axis=1)

@api_view(['POST'])
def predict(request):
    # Your prediction logic adapted for Django
    if request.method == 'POST':
        data = JSONParser().parse(request)
        sentence = data.get('sentence', '')
        sentence_in_english = translate_to_english(sentence)
        inputs = prepare_inputs(sentence_in_english)

        ort_inputs = {
            session.get_inputs()[0].name: inputs['input_ids'],
            session.get_inputs()[1].name: inputs['attention_mask']
        }

        ort_outs = session.run(None, ort_inputs)
        probabilities = softmax(ort_outs[0])[0]

        return JsonResponse(probabilities.tolist(), safe=False)
