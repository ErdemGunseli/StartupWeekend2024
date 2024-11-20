import os
import requests
from typing import List
import time

from strings import ASSISTANT_CONTEXT

def speech_to_text(audio_bytes: bytes, file_name: str) -> str:
    start_time = time.time()
    # Implement the speech-to-text functionality here
    # For example, using OpenAI Whisper API
    # Placeholder implementation:
    result = "Transcribed text from audio"
    time_taken = time.time() - start_time

    print(f"Time taken for speech to text: {time_taken:.4f} seconds")
    return result

def text_to_speech(text: str) -> bytes: 
    start_time = time.time()
    # Implement the text-to-speech functionality here
    # Placeholder implementation:
    result = b"Audio bytes from text to speech"
    time_taken = time.time() - start_time

    print(f"Time taken for text to speech: {time_taken:.4f} seconds")
    return result

def send_completion_request(
    messages: List[dict],
    encoded_image: str = None,
    model: str = "gpt-40",
    max_tokens: int = 300
) -> str:
    # Ensuring the messages are in the correct format for the API
    formatted_messages = messages

    print(f"\n\nFormatted Messages:\n{formatted_messages}\n\n")

    if encoded_image is not None: 
        # Adding the image to the user's last message
        formatted_messages[-1]["content"] += f"\n![Image](data:image/jpeg;base64,{encoded_image})"

    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {os.getenv('OPENAI_API_KEY')}"
    }

    payload = {
        "model": model,
        "messages": formatted_messages,
        "max_tokens": max_tokens
    }

    response = requests.post(
        "https://api.openai.com/v1/chat/completions",
        headers=headers,
        json=payload
    )

    if response.status_code != 200:
        print(f"API request failed with status code {response.status_code}")
        print(f"Response content: {response.text}")
        raise Exception("API request failed")

    response_data = response.json()

    print(f"Full API response: {response_data}")

    if "choices" not in response_data:
        print("Error: 'choices' key not found in the response data")
        raise Exception("Unprocessable response")

    response_message = response_data["choices"][0]["message"]
    response_text = response_message["content"]

    return response_text

def fast_completion(
    text: str,
    model: str = "gpt-4o",
    max_tokens: int = 300
) -> str:
    messages = [
        {"role": "system", "content": ASSISTANT_CONTEXT},
        {"role": "user", "content": text}
    ]

    completion_text = send_completion_request(
        messages, None, model, max_tokens
    )
    return completion_text
        