# Use an official Python runtime as the base image
FROM python:3.10-slim

# Set the working directory in the container
WORKDIR /app

# Copy the project files to the container
COPY . /app
COPY .env /app/.env

# Install the required dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose the container's port (optional; not required for a Telegram bot)
EXPOSE 8000

# Run the bot
CMD ["python", "bot.py"]