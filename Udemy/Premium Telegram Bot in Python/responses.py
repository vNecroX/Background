import re

def process_message(message, tag_array, response):
    # Split the message and the punctuation into an array
    list_message = re.findall(r"[\w']+|[.,!?;]", message.lower())
    
    # Scores the amount of words in the message
    score = 0
    
    for word in list_message:
        if word in tag_array:
            score = score + 1
            
    # Returns the response and its score
    print(f'{score}, {response}\n')
    return [score, response]

def get_response(message):
    # Add your custom responses here
    response_list = [
            process_message(message, ['hello', 'hi', 'hey'], 'Hey there!'),
            process_message(message, ['bye', 'goodbye'], 'Goodbye!'),
            process_message(message, ['how', 'are', 'you'], 'I\'m doing fine thanks!'),
            process_message(message, ['your', 'name'], 'My name is Lat, nice to meet you!'),
            process_message(message, ['help', 'me'], 'I will do my best to assist you!'),
            process_message(
                message, ['more', 'info'], 'Hi!, I\'m Esteban Quintero, a graduate Software Engineer.'),
            process_message(
                message, ['background', 'projects'], 'Here you can take a look at my entire Development Background: [GitHub Profile](https://github.com/vNecroX)')
        ]
    
    # Check all scores and return the best matching response
    response_scores = []
    for response in response_list:
        response_scores.append(response[0])
        
    # Get the max value for the best response 
    winning_response = max(response_scores)
    matching_response = response_list[response_scores.index(winning_response)]
    
    # Return matching response
    if winning_response == 0:
        bot_response = 'I didn\'t understand what you wrote.\n'
    else:
        bot_response = matching_response[1]
        
    print(f'@@ Bot response: {bot_response} @@\n')
    return bot_response