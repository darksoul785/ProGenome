import requests
from bs4 import BeautifulSoup

# URL of the webpage to be scraped
url = "https://www.example.com"

# Send a GET request to the URL
response = requests.get(url)

# Parse the HTML content using Beautiful Soup
soup = BeautifulSoup(response.content, "html.parser")

# Extract all the headings (h1, h2, h3, etc.) from the page
headings = soup.find_all(["h1", "h2", "h3", "h4", "h5", "h6"])

# Loop through each heading and print its text
for heading in headings:
    print(heading.text.strip())
