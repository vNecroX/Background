import os
from dotenv import load_dotenv
import boto3
import logging
from telegram import Update
from telegram.ext import Application, CommandHandler, MessageHandler, filters, ContextTypes
import responses
# Patch event loop to manage nested event loops
import nest_asyncio
import asyncio

nest_asyncio.apply()

load_dotenv()
AWS_ACCESS_KEY_ID = os.getenv('AWS_ACCESS_KEY_ID')
AWS_SECRET_ACCESS_KEY = os.getenv('AWS_SECRET_ACCESS_KEY')
AWS_DEFAULT_REGION = os.getenv('AWS_DEFAULT_REGION')

# Initialize a session using Amazon S3
ssm_client = boto3.client('ssm', 
                          aws_access_key_id=AWS_ACCESS_KEY_ID,
                          aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
                          region_name=AWS_DEFAULT_REGION)

# Retrieve the key parameter value
def get_api_key():
    response = ssm_client.get_parameter(
        Name='/telegram-bot-lat/api-key',
        WithDecryption=True
    )
    return response['Parameter']['Value']

# Use the API key
API_KEY = get_api_key()
print(f"API_KEY: {API_KEY}")

# Setup the logging
logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s\n', level=logging.INFO)
logging.info('Starting bot. .\n')

def handle_text(t, update):
    if t.startswith('/'):
        logging.info(f'Command: {t} invoked by user ({update.message.chat.id})\n')
    else:
        logging.info(f'User ({update.message.chat.id}) says: {t}\n')

async def start_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    text = update.message.text.lower()
    handle_text(text, update)
    await update.message.reply_text('Hello there! I\'m a bot. What\'s up?')

async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    text = update.message.text.lower()
    handle_text(text, update)
    await update.message.reply_text('Try typing anything and I will do my best to respond!')

async def github_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    text = update.message.text.lower()
    handle_text(text, update)
    await update.message.reply_text(
        'Here you can take a look at my entire Development Background: [GitHub Profile](https://github.com/vNecroX)')

async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE):
    text = update.message.text.lower()
    response = responses.get_response(text)
    handle_text(text, update)
    await update.message.reply_text(response)

async def error_handler(update: object, context: ContextTypes.DEFAULT_TYPE):
    logging.error(f'Update {update} caused error {context.error}\n')

async def main():
    # Create the application
    application = Application.builder().token(API_KEY).build()
    
    # Add handlers
    application.add_handler(CommandHandler('start', start_command))
    application.add_handler(CommandHandler('help', help_command))
    application.add_handler(CommandHandler('github', github_command))
    application.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_message))
    
    # Log all errors
    application.add_error_handler(error_handler)
    
    # Start the bot and listen for updates
    await application.run_polling()

# Run the bot in the existing event loop
if __name__ == '__main__':
    asyncio.run(main())
