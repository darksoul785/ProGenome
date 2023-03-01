import requests
import re
import urllib3
from bs4 import BeautifulSoup as bs


website = "https://www.ncbi.nlm.nih.gov/protein/AAB30058.2"
response = requests.get(website)
soup = bs(response.content, "xml")

title = soup.find("h1").getText()
print(soup.getText())

with open(f'{title}.txt','w') as file:
    file.write(soup.prettify())


#for span in soup.select("div.sequence")

#for link in soup.find_all('a'):
#    print(link.get('span'))